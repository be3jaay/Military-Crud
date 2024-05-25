import React from 'react'
import { Sidebar } from './Sidebar/sidebar'
import { TableAdmin } from './Table/TableAdmin'
export const pending = () => {
  return (
    <div>
        <div className="flex h-screen">
            <Sidebar />
            <div className='bg-white flex-grow p-7'>
                <header>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className='text-3xl font-bold mb-2'>Pending Account</h1>
                            <p className='text-sm text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore minus numquam similique, sit vel consectetur architecto ipsam quidem quibusdam veritatis voluptatem omnis autem a accusamus suscipit molestias veniam nam.</p>
                            <hr className='my-6'/>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </header>
                <section>
                    <TableAdmin/>
                </section>
            </div>
        </div>
    </div>
  )
}

export default pending
