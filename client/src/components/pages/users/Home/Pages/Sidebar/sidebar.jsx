import React, { useState, useContext } from "react";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { SidebarData } from "./sidebarData";
import Profile from '../../../../../../assets/images/profile.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AuthContext from "../../../../../../AuthContext";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext); // Get setAuth from context

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = async () => {
    try {
      // Send logout request to your backend (if needed)
      const response = await fetch('/logout', { 
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store token in localStorage
        },
      });

      if (response.ok) {
        // Clear authentication token and user data
        localStorage.removeItem('token');
        setAuth({}); // Clear authentication state
        navigate('/login'); // Redirect to login after successful logout
      } else {
        // Handle logout errors (e.g., display an error message)
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="bg-white drop-shadow-lg">
    <nav className={`w-full h-screen bg-white text-black flex flex-col ${isCollapsed ? 'w-20 '  : 'w-64' }`}>
       <button onClick={toggleSidebar} className="text-2xl mt-2 mr-1 flex items-end justify-end">
       <TbLayoutSidebarLeftCollapseFilled />
        </button>
      <div className="p-3 flex items-center justify-between flex-col">
        {!isCollapsed && (
          <div className="profile-info flex items-center justify-center flex-col sm:hidden lg:flex">
            <img src={Profile} className="hidden sm:flex sm:w-16 sm:h-auto sm:rounded-full" alt="Profile" />
            <span className='hidden sm:block text-md font-bold text-gray-400'>Franklin Mayad</span>
          </div>
        )}
      </div>
      <ul className="flex-grow ">
      {SidebarData.map((item, index) => (
        <a key={index} href={item.path} onClick={(e) => { if (item.title === 'Logout') { e.preventDefault(); handleLogout(); } }} className="w-full flex items-center justify-start lg:w-64 lg:flex lg:items-center lg:justify-center p-4 hover:bg-black hover:text-white ">
            <span className={` xl:mr-2 md:mr-4 ${isCollapsed ? 'ml-2 '  : 'mr-4' }`}>{item.icon}</span>
            {!isCollapsed && <span className="hidden lg:flex ">{item.title}</span>}
          </a>
        ))}
      </ul>
    </nav>
    </div>
  );
};
