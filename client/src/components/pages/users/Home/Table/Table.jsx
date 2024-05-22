import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export const Table = () => {
    return(
        <div className="overflow-x-auto mt-12 shadow-md">
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
					<td className="px-4 py-6 ">
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
    );
};