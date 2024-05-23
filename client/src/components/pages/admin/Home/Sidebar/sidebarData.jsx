import React from "react";
import { IoIosAnalytics } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
export const SidebarData = [
    {
      title: 'View Analytics',
      icon: <IoIosAnalytics />,
      path: '/adminAnalytics'
    },
    {
      title: 'Platoon Profiles',
      icon: <CgProfile />,
      path: '/adminProfile'
    },
    {
      title: 'Logout',
      icon: <IoMdExit />,
      path: '/login',
    }
  ];