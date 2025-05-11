
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-black px-4 text-center">
      <div className="mb-8">
        <svg className="w-32 h-32 mx-auto" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#1DB954" strokeWidth="2" />
          <path d="M8 8L16 16M16 8L8 16" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-spotify-lightgray mb-8">
        This track doesn't exist in your library
      </p>
      <Link 
        to="/" 
        className="spotify-button inline-flex items-center justify-center"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
