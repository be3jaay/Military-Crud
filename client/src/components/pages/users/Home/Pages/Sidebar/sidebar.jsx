import React, { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoIosAnalytics } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

import Profile from '../../../../../../assets/images/profile.png';

const SidebarData = [
  {
    title: 'View Activities',
    icon: <HiOutlineViewGrid />,
    path: '/userdashboard'
  },
  {
    title: 'View Analytics',
    icon: <IoIosAnalytics />,
    path: '/viewAnalytics'
  },
  {
    title: 'Profile Settings',
    icon: <CgProfile />,
    path: '/profile'
  },
  {
    title: 'Logout',
    icon: <IoMdExit />,
    path: '/login',
    cName: 'logout'
  }
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`h-full bg-white drop-shadow-lg text-black flex flex-col ${isCollapsed ? 'w-20 '  : 'w-64' }`}>
       <button onClick={toggleSidebar} className="text-2xl mt-2 mr-1 flex items-end justify-end">
       <TbLayoutSidebarLeftCollapseFilled />
        </button>
      <div className="p-3 flex items-center justify-between flex-col">
        {!isCollapsed && (
          <div className="profile-info flex items-center justify-center flex-col">
            <img src={Profile} className="w-16 h-auto rounded-full" alt="Profile" />
            <span className='text-xl font-bold text-gray-400'>Franklin Mayad</span>
          </div>
        )}
      </div>
      <ul className="flex-grow">
        {SidebarData.map((item, index) => (
          <a key={index} href={item.path} className="flex items-center p-4 hover:bg-black hover:text-white">
            <span className="mr-4">{item.icon}</span>
            {!isCollapsed && <span>{item.title}</span>}
          </a>
        ))}
      </ul>
    </nav>
  );
};
