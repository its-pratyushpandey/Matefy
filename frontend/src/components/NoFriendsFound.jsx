import { UsersIcon, UserPlusIcon } from "lucide-react";
import { Link } from "react-router";

const NoFriendsFound = () => {
  return (
    <div className="card bg-base-200/50 border border-base-300/50 p-8 text-center">
      <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <UsersIcon className="size-8 text-primary/60" />
      </div>
      
      <h3 className="font-semibold text-xl mb-3">No friends yet</h3>
      <p className="text-base-content/70 mb-6 max-w-md mx-auto">
        Start connecting with language partners below to begin practicing together and improve your skills!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link to="/friends" className="btn btn-primary">
          <UserPlusIcon className="mr-2 size-4" />
          Find Language Partners
        </Link>
        <Link to="/notifications" className="btn btn-outline">
          Check Friend Requests
        </Link>
      </div>
    </div>
  );
};

export default NoFriendsFound;
