import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
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

const UserDashboard = () => {
  return (
	<div className="flex h-screen">
      <Sidebar />
      <div className='bg-white flex-grow'>
        <header className='flex items-center justify-between bg-white w-full h-32 p-7'>
          <div className="header-container flex flex-col justify-center">
            <div className="header-info flex items-center">
              <h1 className='text-2xl mr-3 font-bold'>Military Performance Monitoring</h1>
              <span className='bg-transparent border-1 border-black rounded-2xl p-2 text-black'>70 Platoon</span>
            </div>
            <div className="header-sub">
              <p className='text-md text-gray-500'>Keep track of vendor and their security ratings.</p>
            </div>
          </div>
          <div className="button flex items-center w-96 mt-6">
            <a
              className="inline-flex items-center gap-2 rounded border border-black bg-transparent px-8 py-3 text-black hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <IoCloudUploadOutline />
              <span className="text-sm font-medium"> Import </span>
            </a>

            	<button className="btn gap-2 rounded border ml-3 text-white bg-black px-8 py-3" onClick={()=>document.getElementById('my_modal_5').showModal()}><IoMdAdd/> Add Activity</button>
					<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
					<div className="modal-box bg-white border-black border-1">
						<h3 className="font-bold text-lg bg-trasnparent border-b border-white text-black x">Add a To Do! ✏️</h3>
						<p className="py-4 text-gray-400">Activity Name: </p>
						<input type="text" placeholder="Enter Activity" className="input input-bordered w-full bg-transparent border border-black text-black " />
						<div>
							<label htmlFor="OrderNotes" className="block text-md font-medium text-gray-400 my-3"> Order notes </label>

							<textarea
								id="OrderNotes"
								className="mt-2 w-full rounded-md p-3 text-black bg-white border border-black align-top shadow-sm sm:text-sm"
								rows="4"
								placeholder="Enter any additional order notes..."
							></textarea>
						</div>
						<p className="py-4 text-gray-400">Choose a Date: </p>
						<div className="flex items-center justify-center mb-6">
								<button className='btn bg-indigo-600 text-white w-40 mr-3'>Start Date</button>
								<button className="btn bg-indigo-600 text-white w-40 ">End Date</button>
						</div>
						<input type="date" className='bg-white border border-black rounded-lg px-4 py-2 mb-3 w-full' />	 
						<select className="select select-bordered w-full bg-transparent border border-black text-black">
							<option disabled selected>Status</option>
							<option>To Do</option>
							<option>On Progress</option>
							<option>Done</option>
						</select>
						<div className="modal-action">
						<form method="dialog">
							<div className="flex items-center justify-between">
								<button className='btn bg-black text-white mr-2'>Add Submit</button>
								<button className="btn bg-white text-black">Close</button>
							</div>	
						</form>
						</div>
					</div>
					</dialog>
          </div>        
        </header>
        <section className='w-full h-5/6 bg-white p-7'>
          <div className="flex justify-between items-center">
            <div>
              <h1 className='text-xl font-bold text-gray-400'>To Do: Progress Report</h1>
			</div>
				<div className="flex align-center justify-center">
				<div className="relative">
					<label htmlFor="Search" className="sr-only">Search</label>
					<input
					type="text"
					id="Search"
					placeholder="Search for..."
					className="w-96 rounded-md bg-white border-1 border-gray-300 p-3 pe-10 shadow-sm sm:text-sm"
					/>
					<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
					<button type="button" className="text-gray-600 hover:text-gray-700">
						<span className="sr-only">Search</span>
						<IoSearchSharp />
					</button>
					</span>
				</div>
				<a className="inline-flex items-center gap-2 rounded border border-gray-200 ml-3 bg-transparent px-8 py-3 text-black hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="#">
					<IoFilterOutline />
					<span className="text-sm font-medium"> Filters </span>  
				</a>
				</div>
			</div>
	
			<div className="overflow-x-auto mt-12">
				<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
				<thead className="ltr:text-left rtl:text-right">
					<tr>
					<th className="px-4 py-6">
						<label htmlFor="SelectAll" className="sr-only">Select All</label>
						<input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
					</th>
					<th className="inline-flex items-center justify-start mt-3 whitespace-nowrap px-4 py-2 font-bold text-gray-900"> Activities <FaCaretDown className='ml-2'/></th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Progress</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Start Date</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">End Date</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Status</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900" >Edit</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Delete</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row1">Row 1</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row1" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">
						<div>
						<span id="ProgressLabel" className="sr-only">Loading</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="75"
							className="relative block rounded-full bg-gray-200"
						>
							<span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
							<span className="font-bold text-white"> 75% </span>
							</span>
							<span className="block h-6 rounded-full bg-black text-center" style={{ width: '75%' }}> </span>
						</span>
						</div>
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="inline-flex items-center gap-2 border mt-3 bg-yellow-100 rounded-2xl whitespace-nowrap px-4 py-2 text-gray-700">
						<GoDotFill className='text-yellow-500' /> Ongoing
					</td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><FaRegEdit /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row2">Row 2</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row2" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">
						<div>
						<span id="ProgressLabel" className="sr-only">Loading</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="75"
							className="relative block rounded-full bg-gray-200"
						>
							<span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
							<span className="font-bold text-white"> 88% </span>
							</span>
							<span className="block h-6 rounded-full bg-black text-center" style={{ width: '88%' }}> </span>
						</span>
						</div>
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="inline-flex items-center gap-2 border mt-3 bg-green-100 rounded-2xl whitespace-nowrap px-4 py-2 text-gray-700">
						<GoDotFill className='text-green-500' /> Active
					</td>
					<td onClick={()=>document.getElementById('my_modal_5').showModal()} className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700" ><FaRegEdit  /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">
						<div>
						<span id="ProgressLabel" className="sr-only">Loading</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="75"
							className="relative block rounded-full bg-gray-200"
						>
							<span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
							<span className="font-bold text-white"> 95% </span>
							</span>
							<span className="block h-6 rounded-full bg-black text-center" style={{ width: '95%' }}> </span>
						</span>
						</div>
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="inline-flex items-center gap-2 border mt-3 bg-green-100 rounded-2xl whitespace-nowrap px-4 py-2 text-gray-700">
						<GoDotFill className='text-green-500' /> Active
					</td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><FaRegEdit /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">
						<div>
						<span id="ProgressLabel" className="sr-only">Loading</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="75"
							className="relative block rounded-full bg-gray-200"
						>
							<span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
							<span className="font-bold text-white"> 55% </span>
							</span>
							<span className="block h-6 rounded-full bg-black text-center" style={{ width: '55%' }}> </span>
						</span>
						</div>
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="inline-flex items-center gap-2 border mt-3 bg-green-100 rounded-2xl whitespace-nowrap px-4 py-2 text-gray-700">
						<GoDotFill className='text-green-500' /> Active
					</td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><FaRegEdit /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300 " type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">
						<div>
						<span id="ProgressLabel" className="sr-only">Loading</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="75"
							className="relative block rounded-full bg-gray-200"
						>
							<span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
							<span className="font-bold text-white"> 66% </span>
							</span>
							<span className="block h-6 rounded-full bg-black text-center" style={{ width: '66%' }}> </span>
						</span>
						</div>
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="inline-flex items-center gap-2 border mt-3 bg-green-100 rounded-2xl whitespace-nowrap px-4 py-2 text-gray-700">
						<GoDotFill className='text-green-500' /> Active
					</td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><FaRegEdit /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6 ">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">
						<div>
						<span id="ProgressLabel" className="sr-only">Loading</span>
						<span
							role="progressbar"
							aria-labelledby="ProgressLabel"
							aria-valuenow="75"
							className="relative block rounded-full bg-gray-200"
						>
							<span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
							<span className="font-bold text-white"> 99% </span>
							</span>
							<span className="block h-6 rounded-full bg-black text-center" style={{ width: '99%' }}> </span>
						</span>
						</div>
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700">Jan 22 2024</td>
					<td className="inline-flex items-center gap-2 border mt-3 bg-green-100 rounded-2xl whitespace-nowrap px-4 py-2 text-gray-700">
						<GoDotFill className='text-green-500' /> Active
					</td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><FaRegEdit /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
				</tbody>
				</table>
			</div>
			<div className="flex align-center justify-between border-t-2 border-gray-200">
				<div className="text-xl font-bold mt-5">
				<span>Page 1 of 10</span>
				</div>
				<div className="flex align-center justify-center mt-5">
				<a className="inline-flex items-center gap-2 rounded border border-black bg-transparent px-8 py-3 text-black hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="#">
					<IoMdArrowDropleftCircle /> 
					<span className="text-sm font-medium"> Previous </span>
				</a>
				<a className="inline-flex items-center gap-2 ml-2 rounded border border-black bg-transparent px-8 py-3 text-black hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="#">
					<span className="text-sm font-medium"> Next </span>
					<IoMdArrowDroprightCircle />
				</a>
				</div>
			</div>
			</section>
	  	</div>
	</div>
    
  )
}

export default UserDashboard
