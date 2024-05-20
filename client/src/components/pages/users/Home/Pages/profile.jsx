import React from 'react'
import { SidebarData } from './sidebarData'; 
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import Peeps from '../../../../../assets/images/peeps.png'
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
      <div className='bg-white flex-grow p-7'>
		<h1 className='text-2xl font-bold '>Profile</h1>
		<p className='text-md text-gray-500 mb-2'>Manage your profile</p>
		<hr className='my-5 w-full'/>
		<div className="flex items-center justify-between">
			<div className="">
				<h1 className='text-2xl font-bold'>Basic Information 👨‍💻</h1>
				<p className='text-md text-gray-500 mb-6'>Tell us your basic information</p>
				<span className='text-gray-500'>Full Name</span>
				<label className="input input-bordered w-full max-w-96 flex items-center gap-2 bg-white border-black mb-4">
					<FaUserAstronaut />
					<input type="text" className="grow" placeholder="Username" />
				</label>
				<span className='text-gray-500'>Email Address</span>
				<label className="input input-bordered w-full max-w-96 flex items-center gap-2 bg-white border-black mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
					<input type="text" className="grow" placeholder="Email" />
				</label>
				<span className='text-gray-500'>Change Password</span>
				<label className="input input-bordered w-full max-w-96 flex items-center gap-2 bg-white border-black mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
					<input type="password" className="grow" placeholder="New Password" />
				</label>
				<span className='text-gray-500'>Re-type New Password</span>
				<label className="input input-bordered w-full max-w-96 flex items-center gap-2 bg-white border-black mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
					<input type="password" className="grow" placeholder='Confirm New Password' />
				</label>
			</div>
			<img src={Peeps} alt="" className='w-80 h-auto'/>
		</div>
		
		<hr className='my-5 w-full'/>
		<div className="flex items-center justify-center flex-col">
			
		</div>
		<span className='block'>Profile Picture</span>
		<div className="flex items-center justify-start mb-2">
			<img src={Profile} alt="" className='w-16 h-auto rounded-full mr-2' />
			<button
			className="flex items-center justify-center rounded bg-white border-black border-1 text-black px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
			href="#"
			><IoCloudUploadOutline className='mr-2' /> Upload File
			</button>
		</div>
       
		<button
		className="inline-block rounded bg-black w-full max-w-96 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
		href="#"
		>Update
		</button>


      </div>
    </div>
  )
}

export default profile
