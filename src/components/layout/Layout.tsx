
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = () => {
  return (
    <div className="flex h-screen bg-spotify-black text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-64 transition-all duration-300">
        <Topbar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
