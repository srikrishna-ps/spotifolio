
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Book, Award, Contact } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-6 h-6" /> },
    { name: "About", path: "/about", icon: <User className="w-6 h-6" /> },
    { name: "Projects", path: "/projects", icon: <Book className="w-6 h-6" /> },
    { name: "Certifications", path: "/certifications", icon: <Award className="w-6 h-6" /> },
    { name: "Contact", path: "/contact", icon: <Contact className="w-6 h-6" /> },
  ];

  return (
    <aside className={`bg-spotify-black flex flex-col h-screen transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} p-4 fixed left-0 top-0`}>
      <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
        </div>
        {!isCollapsed && (
          <span className="ml-3 text-xl font-bold text-white">DevPortfolio</span>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="ml-auto text-spotify-lightgray hover:text-white transition-colors duration-200"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''} ${isCollapsed ? 'justify-center' : ''}`
                }
              >
                {item.icon}
                {!isCollapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-spotify-darkgray">
        {!isCollapsed && (
          <div className="text-spotify-lightgray text-sm">
            <p>© 2025 DevPortfolio</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
