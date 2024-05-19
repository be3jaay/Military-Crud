import React from 'react'
import { SidebarData } from './sidebarData'; 
import Profile from '../../../../../assets/images/profile.png'

const Sidebar = () => {
	return (
	  <nav className="w-64 h-full bg-white drop-shadow-lg text-black flex flex-col">
		<div className="profile-info p-3 flex items-center justify-center flex-col mb-6">
			<img src={Profile} className="w-16 h-auto rounded-full"alt="" />
			<span className='text-xl font-bold text-gray-400'>Franklin Mayad</span>
		</div>
		
		<ul className="flex-grow">
		  {SidebarData.map((item, index) => (
			<a key={index} href={item.path} className="flex items-center p-4 hover:bg-black hover:text-white">
			  <span className="mr-4">{item.icon}</span>
			  <span>{item.title}</span>
			</a>
		  ))}
		</ul>
	  </nav>
	);
  };
const profile = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className='bg-white flex-grow'>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
      </div>
    </div>
  )
}

export default profile
