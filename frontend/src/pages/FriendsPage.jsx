import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import {
  getOutgoingFriendReqs,
  getRecommendedUsers,
  getUserFriends,
  sendFriendRequest,
} from "../lib/api";
import { Link } from "react-router";
import { 
  CheckCircleIcon, 
  MapPinIcon, 
  UserPlusIcon, 
  UsersIcon, 
  RefreshCwIcon,
  SearchIcon 
} from "lucide-react";

import { capitialize } from "../lib/utils";
import FriendCard, { getLanguageFlag } from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const queryClient = useQueryClient();
  const [outgoingRequestsIds, setOutgoingRequestsIds] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const { 
    data: friends = [], 
    isLoading: loadingFriends,
    error: friendsError,
    refetch: refetchFriends
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
    retry: 3,
    retryDelay: 1000
  });

  const { 
    data: recommendedUsers = [], 
    isLoading: loadingUsers,
    error: usersError,
    refetch: refetchUsers
  } = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers,
    retry: 3,
    retryDelay: 1000
  });

  const { data: outgoingFriendReqs, refetch: refetchOutgoing } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
    retry: 2
  });

  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["outgoingFriendReqs"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error sending friend request:", error);
    }
  });

  // Update outgoing request IDs when data changes
  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs && outgoingFriendReqs.length > 0) {
      outgoingFriendReqs.forEach((req) => {
        outgoingIds.add(req.recipient._id);
      });
      setOutgoingRequestsIds(outgoingIds);
    }
  }, [outgoingFriendReqs]);

  // Filter friends based on search term
  const filteredFriends = friends.filter(friend =>
    friend.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    friend.nativeLanguage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    friend.learningLanguage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter recommended users based on search term
  const filteredRecommendedUsers = recommendedUsers.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.nativeLanguage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.learningLanguage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.location && user.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleRefreshAll = () => {
    refetchFriends();
    refetchUsers();
    refetchOutgoing();
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Friends & Connections
            </h1>
            <p className="text-base-content/70 mt-2">
              Connect with language exchange partners around the world
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link to="/notifications" className="btn btn-outline">
              <UsersIcon className="mr-2 size-4" />
              Friend Requests
            </Link>
            <button onClick={handleRefreshAll} className="btn btn-ghost">
              <RefreshCwIcon className="mr-2 size-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="form-control w-full max-w-md">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50 size-4" />
            <input
              type="text"
              placeholder="Search friends or language partners..."
              className="input input-bordered w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Your Friends Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Friends ({friends.length})</h2>
          </div>

          {loadingFriends ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg" />
            </div>
          ) : friendsError ? (
            <div className="card bg-error/10 border border-error/20 p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-error">Unable to Load Friends</h3>
              <p className="text-error/70 mb-4">
                There was an issue connecting to the server. Please check your connection.
              </p>
              <button 
                className="btn btn-error btn-outline btn-sm"
                onClick={() => refetchFriends()}
              >
                Try Again
              </button>
            </div>
          ) : filteredFriends.length === 0 ? (
            searchTerm ? (
              <div className="card bg-base-200 p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">No friends found</h3>
                <p className="text-base-content opacity-70">
                  No friends match your search "{searchTerm}". Try a different search term.
                </p>
              </div>
            ) : (
              <NoFriendsFound />
            )
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {filteredFriends.map((friend) => (
                <FriendCard key={friend._id} friend={friend} />
              ))}
            </div>
          )}
        </section>

        {/* Discover New Partners Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Discover Language Partners</h2>
              <p className="text-base-content/70">
                Find perfect language exchange partners based on your interests
              </p>
            </div>
          </div>

          {loadingUsers ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg" />
            </div>
          ) : usersError ? (
            <div className="card bg-error/10 border border-error/20 p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-error">Unable to Load Recommendations</h3>
              <p className="text-error/70 mb-4">
                There was an issue connecting to the server. Please check your connection.
              </p>
              <button 
                className="btn btn-error btn-outline btn-sm"
                onClick={() => refetchUsers()}
              >
                Try Again
              </button>
            </div>
          ) : filteredRecommendedUsers.length === 0 ? (
            searchTerm ? (
              <div className="card bg-base-200 p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">No partners found</h3>
                <p className="text-base-content opacity-70">
                  No language partners match your search "{searchTerm}". Try a different search term.
                </p>
              </div>
            ) : (
              <div className="card bg-base-200 p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">No recommendations available</h3>
                <p className="text-base-content opacity-70">
                  Check back later for new language partners!
                </p>
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecommendedUsers.map((user) => {
                const hasRequestBeenSent = outgoingRequestsIds.has(user._id);

                return (
                  <div
                    key={user._id}
                    className="card bg-base-200 hover:shadow-xl transition-all duration-300 border border-base-300/50"
                  >
                    <div className="card-body p-5 space-y-4">
                      {/* User Profile Header */}
                      <div className="flex items-center gap-3">
                        <div className="avatar size-16 rounded-full ring-2 ring-primary/20">
                          <img 
                            src={user.profilePic} 
                            alt={user.fullName}
                            className="rounded-full object-cover" 
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg truncate">{user.fullName}</h3>
                          {user.location && (
                            <div className="flex items-center text-sm opacity-70 mt-1">
                              <MapPinIcon className="size-3 mr-1 flex-shrink-0" />
                              <span className="truncate">{user.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Languages with improved styling */}
                      <div className="flex flex-wrap gap-2">
                        <div className="badge badge-secondary gap-1 py-2">
                          {getLanguageFlag(user.nativeLanguage)}
                          <span className="text-xs">Native: {capitialize(user.nativeLanguage)}</span>
                        </div>
                        <div className="badge badge-outline gap-1 py-2">
                          {getLanguageFlag(user.learningLanguage)}
                          <span className="text-xs">Learning: {capitialize(user.learningLanguage)}</span>
                        </div>
                      </div>

                      {/* Bio */}
                      {user.bio && (
                        <p className="text-sm opacity-80 line-clamp-3 leading-relaxed">
                          {user.bio}
                        </p>
                      )}

                      {/* Action button */}
                      <button
                        className={`btn w-full mt-4 ${
                          hasRequestBeenSent 
                            ? "btn-success btn-disabled" 
                            : "btn-primary hover:btn-primary-focus"
                        }`}
                        onClick={() => sendRequestMutation(user._id)}
                        disabled={hasRequestBeenSent || isPending}
                      >
                        {hasRequestBeenSent ? (
                          <>
                            <CheckCircleIcon className="size-4 mr-2" />
                            Request Sent
                          </>
                        ) : isPending ? (
                          <>
                            <span className="loading loading-spinner loading-xs mr-2"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <UserPlusIcon className="size-4 mr-2" />
                            Send Friend Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FriendsPage;
