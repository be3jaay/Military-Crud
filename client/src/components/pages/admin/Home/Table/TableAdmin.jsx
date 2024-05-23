import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";

export const TableAdmin = () => {
    return(
        <div className="overflow-x-auto mt-12 shadow-md">
				<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
				<thead className="ltr:text-left rtl:text-right">
					<tr>
					<th className="px-4 py-6">
						<label htmlFor="SelectAll" className="sr-only">Select All</label>
						<input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
					</th>
					<th className="inline-flex items-center justify-start  mt-3 whitespace-nowrap px-4 py-2 font-bold text-gray-900"> Platoon ID <FaCaretDown className='ml-2'/></th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-center  text-gray-900">Platoon Name</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold text-center text-gray-900">Email Address</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold  text-gray-900" >View</th>
					<th className="whitespace-nowrap px-4 py-2 font-bold  text-gray-900">Delete</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">
					<tr>
					<td className="px-4 py-6 ">
						<label className="sr-only" htmlFor="Row1">Row 1</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row1" />
					</td>
					<td className="whitespace-nowrap px-4 py-2  font-medium text-gray-900">1</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
						Platoon
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">platoongmail@gmail.com</td>
					
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><IoEye /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row2">Row 2</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row2" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">2</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
						Platoon
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">platoongmail@gmail.com</td>
					
					<td onClick={()=>document.getElementById('my_modal_5').showModal()} className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700" ><IoEye /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">3</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
					Platoon
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">platoongmail@gmail.com</td>
			
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><IoEye /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">4</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
					Platoon
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">platoongmail@gmail.com</td>

					
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><IoEye /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300 " type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">5</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
					Platoon
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">platoongmail@gmail.com</td>
	
					
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><IoEye /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
	
					<tr>
					<td className="px-4 py-6 ">
						<label className="sr-only" htmlFor="Row3">Row 3</label>
						<input className="size-5 rounded border-gray-300" type="checkbox" id="Row3" />
					</td>
					<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">6</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
					Platoon
					</td>
					<td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">platoongmail@gmail.com</td>
					
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-yellow-700"><IoEye /></td>
					<td className="text-2xl whitespace-nowrap px-4 py-2 text-red-700"><FaRegTrashCan /></td>
					</tr>
				</tbody>
				</table>
			</div>
    );
};