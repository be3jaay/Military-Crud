import React from 'react'
import { Sidebar } from './Sidebar/sidebar';
import { TableAdmin } from './Table/TableAdmin';
const adminProfile = () => {
  return (
    <div className="flex h-screen">
    <Sidebar />
        <div className='bg-white flex-grow p-7'>
            <TableAdmin />
        </div>
    </div>
  ); 
};

export default adminProfile;