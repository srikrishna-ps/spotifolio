
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Book, Award, Contact, Music, Headphones } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5 nav-icon" /> },
    { name: "About", path: "/about", icon: <User className="w-5 h-5 nav-icon" /> },
    { name: "Projects", path: "/projects", icon: <Book className="w-5 h-5 nav-icon" /> },
    { name: "Certifications", path: "/certifications", icon: <Award className="w-5 h-5 nav-icon" /> },
    { name: "Contact", path: "/contact", icon: <Contact className="w-5 h-5 nav-icon" /> },
  ];

  const playlistItems = [
    { name: "React Projects", icon: <Music className="w-4 h-4" /> },
    { name: "Full-Stack Apps", icon: <Music className="w-4 h-4" /> },
    { name: "UI/UX Designs", icon: <Music className="w-4 h-4" /> },
    { name: "Mobile Development", icon: <Music className="w-4 h-4" /> },
  ];

  return (
    <aside className={`bg-spotify-black flex flex-col h-screen transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} p-4 fixed left-0 top-0 z-20`}>
      <div className="flex items-center mb-8 animate-fade-in">
        <div className="flex-shrink-0 animate-pulse-slow">
          <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
        </div>
        {!isCollapsed && (
          <span className="ml-3 text-xl font-bold text-white">DevPortfolio</span>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="ml-auto text-spotify-lightgray hover:text-white transition-colors duration-200 hover:scale-110"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1">
        <div className="mb-6">
          <h3 className={`uppercase text-xs font-bold text-spotify-lightgray mb-2 px-2 ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
            Menu
          </h3>
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.name} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active font-bold' : ''} ${isCollapsed ? 'justify-center' : ''}`
                  }
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {!isCollapsed && (
          <div className="mb-6 animate-fade-in delay-300">
            <h3 className="uppercase text-xs font-bold text-spotify-lightgray mb-2 px-2">
              Skill Playlists
            </h3>
            <ul className="space-y-1">
              {playlistItems.map((item, index) => (
                <li key={item.name} className="animate-slide-in" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                  <a 
                    href="#" 
                    className="nav-link"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="mt-auto pt-4 border-t border-spotify-darkgray animate-fade-in delay-500">
        {!isCollapsed && (
          <div className="flex flex-col space-y-2 text-spotify-lightgray text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              <span>Now Coding To</span>
            </a>
            <p className="text-xs">© 2025 DevPortfolio</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
