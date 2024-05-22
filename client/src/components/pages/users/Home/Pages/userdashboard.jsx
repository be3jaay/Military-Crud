import React from 'react'
import * as Io from "react-icons/io5"
import { IoMdAdd } from "react-icons/io";
import { Table } from "../Table/Table"
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Sidebar } from './Sidebar/sidebar';

const UserDashboard = () => {
  return (
	<div className="flex h-screen">
      <Sidebar />
      <div className='bg-white flex-grow '>
        <header className='flex items-center justify-between bg-white w-full h-32 p-7'>
          <div className="header-container">
            <div className="header-info flex items-center justify-center">
              <h1 className='text-2xl mr-3 font-bold'>Military Performance Monitoring</h1>
              <span className='bg-transparent border-1 border-black rounded-2xl p-2 text-black'>70 Platoon</span>
            </div>
            <div className="header-sub">
              <p className='text-md text-gray-500'>Keep track of vendor and their security ratings.</p>
            </div>
          </div>
          <div className="button">
            	<button className="btn gap-2 rounded border text-white bg-black px-8 py-3" onClick={()=>document.getElementById('my_modal_5').showModal()}><IoMdAdd/> Add Activity</button>
					<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
					<div className="modal-box bg-white border-black border-1">
						<h3 className="font-bold text-lg bg-trasnparent border-b border-white text-black x">Add a To Do! ✏️</h3>
						<p className="py-4 text-gray-400">Activity Name: </p>
						<input type="text" placeholder="Enter Activity" className="input input-bordered w-full bg-transparent border border-black text-black " />
						<div>
							<label htmlFor="OrderNotes" className="block text-md font-medium text-gray-400 my-3"> Description: </label>

							<textarea
								id="Description"
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
					className="w-96 rounded-md bg-white border-1 border-gray-300 shadow-md p-3 pe-10 sm:text-sm"
					/>
					<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
					<button type="button" className="text-gray-600 hover:text-gray-700">
						<span className="sr-only">Search</span>
						<Io.IoSearchSharp />
					</button>
					</span>
				</div>
				
				</div>
			</div>
			<Table />
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
