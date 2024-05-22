import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoIosAnalytics } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
export const SidebarData = [
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