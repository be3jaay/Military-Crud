import React from 'react'
import { Sidebar } from './Sidebar/sidebar'
import Profile from '../../../../assets/images/profile.png'

export const platoonProfile = () => {
  return (
    <div>
        <div className="flex h-screen">
            <Sidebar />
            <div className='bg-white flex-grow p-7'>
                <header>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className='text-3xl font-bold mb-2'>Account</h1>
                            <p className='text-sm text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore minus numquam similique, sit vel consectetur architecto ipsam quidem quibusdam veritatis voluptatem omnis autem a accusamus suscipit molestias veniam nam.</p>
                            <hr className='my-6'/>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </header>
                <section>
                    <div className="w-full h-auto grid grid-cols-3 gap-x-4 gap-y-2 rounded-xl shadow-lg p-6">
                        <div className="w-full bg-transparent border border-black shadow-md rounded-lg row-span-3">
                            <div className="w-full flex items-center justify-center flex-col ">
                                <img src={Profile} alt="" className='rounded-md my-3' />
                                <hr className='border w-full border-black my-2' />
                                <h1 className='font-bold text-xl'>John Doe</h1>
                                <p className='text-sm text-gray-500'>platform@gmail.com</p>
                            </div>
                            
                        </div>
                        <div className="w-full h-60 bg-transparent border rounded-lg border-black shadow-md flex items-center justify-center flex-col">
                        <h1 className='my-3 text-xl font-bold text-gray-500'>John Doe To Do: Report :</h1>
                            <div className="radial-progress text-black" style={{ "--value": "30", "--size": "5rem", "--thickness": "1rem" }} role="progressbar">30%</div>
                        </div>
                        <div className="w-full  bg-transparent border rounded-lg border-black shadow-md row-span-3 flex items-center justify-center flex-col">
                            <h1 className='my-3 text-xl font-bold text-gray-500'>John Doe Progress Report :</h1>
                            <div className="radial-progress text-success" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
                        </div>

                        <div className="w-full h-60 bg-transparent border rounded-lg border-black shadow-md flex items-center justify-center flex-col">
                        <h1 className='my-3 text-xl font-bold text-gray-500'>John Doe On-Progress Report :</h1>
                            <div className="radial-progress text-warning" style={{ "--value": "55", "--size": "5rem", "--thickness": "1rem" }} role="progressbar">55%</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default platoonProfile
