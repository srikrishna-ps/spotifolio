import { Search, User, Home as HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-spotify-darkgray bg-opacity-95 sticky top-0 z-10 flex items-center justify-between h-16 px-8 border-b border-spotify-black rounded-b-2xl shadow-md font-inter">
      {/* Left: Home button */}
      <div className="flex items-center min-w-0 flex-1 justify-center relative">
        <button
          className="absolute left-0 flex items-center justify-center h-10 w-10 rounded-full hover:bg-spotify-black/60 transition-colors"
          onClick={() => navigate("/")}
          aria-label="Home"
        >
          <HomeIcon className="h-6 w-6 text-spotify-white" />
        </button>
        {/* Center: Search bar */}
        <div className="flex items-center bg-spotify-black rounded-full px-5 py-2 w-full max-w-xl mx-auto shadow-sm">
          <Search className="text-spotify-lightgray mr-3 h-5 w-5" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-white outline-none w-full text-base font-medium font-inter"
          />
        </div>
      </div>
      {/* Right: Profile button */}
      <div className="flex items-center ml-6">
        <div className="h-9 w-9 bg-spotify-black rounded-full flex items-center justify-center shadow-sm cursor-pointer">
          <User className="h-5 w-5 text-spotify-lightgray" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
