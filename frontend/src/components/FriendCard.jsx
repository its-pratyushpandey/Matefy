import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-100 hover:shadow-xl transition-all duration-300 border border-base-300/50 group hover:border-primary/20">
      <div className="card-body p-6">
        {/* USER INFO */}
        <div className="flex items-center gap-4 mb-4">
          <div className="avatar size-14 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <img 
              src={friend.profilePic} 
              alt={friend.fullName}
              className="rounded-full object-cover" 
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate text-lg text-base-content">{friend.fullName}</h3>
            <p className="text-sm text-base-content/60">Language Partner</p>
          </div>
        </div>

        {/* Language badges with improved styling */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge badge-primary gap-1 py-2 px-3 text-xs font-medium">
            {getLanguageFlag(friend.nativeLanguage)}
            <span>Native: {friend.nativeLanguage}</span>
          </span>
          <span className="badge badge-outline gap-1 py-2 px-3 text-xs font-medium border-primary/30 hover:border-primary/60 transition-colors">
            {getLanguageFlag(friend.learningLanguage)}
            <span>Learning: {friend.learningLanguage}</span>
          </span>
        </div>

        {/* Enhanced Message Button */}
        <Link 
          to={`/chat/${friend._id}`} 
          className="btn btn-primary w-full hover:btn-primary-focus transition-all duration-200 group/btn"
        >
          <svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4z"></path>
          </svg>
          Start Conversation
        </Link>
      </div>
    </div>
  );
};
export default FriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}
