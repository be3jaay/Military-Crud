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
                            <h1>Account</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore minus numquam similique, sit vel consectetur architecto ipsam quidem quibusdam veritatis voluptatem omnis autem a accusamus suscipit molestias veniam nam.</p>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </header>
                <section>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="w-full h-80 bg-transparent border border-black shadow-md rounded-lg row-span-3">
                            <div className="flex items-center justify-center flex-col ">
                                <img src={Profile} alt="" className='rounded-md my-3' />

                                <hr className='border w-full border-black my-2' />
                                <h1 className='font-bold text-xl'>John Doe</h1>
                                <p className='text-sm text-gray-500'>platform@gmail.com</p>
                            </div>
                            
                        </div>
                        <div className="w-full h-40 bg-transparent border border-black shadow-md">02</div>
                        <div className="w-full h-80 bg-transparent border border-black shadow-md row-span-3 flex items-center justify-center flex-col">
                            <h1 className='my-3 text-xl font-bold text-green-500'>John Doe Progress Report :</h1>
                            <div className="radial-progress " style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
                        </div>

                        <div className="w-full h-40 bg-transparent border border-black shadow-md">05</div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default platoonProfile
