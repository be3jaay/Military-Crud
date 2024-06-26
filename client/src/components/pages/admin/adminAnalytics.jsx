import React from 'react'
import { Sidebar } from './Home/Sidebar/sidebar'
import Profile from '../../../assets/images/profile.png'
import { LineGraph } from './Home/Charts/line';
import { BarGraph } from './Home/Charts/bar';
import { PieGraph } from './Home/Charts/pie';
import { Line } from 'react-chartjs-2';
const adminAnalytics = () => {
  return (
    <div className="bg-white flex h-full ">
      <Sidebar />
      <div className='bg-white w-full flex items-center justify-center p-7'>
      <section className="bg-white ">
        <div className="grid grid-col-4 gap-4 place-content-center w-full h-96">
          <div className="flex items-center justify-between gap-4">
          <div className="stat shadow-md rounded-md border border-black">
            <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
              <div className="stat-title text-black">Total Projects</div>
              <div className="stat-value text-primary">45,021</div>
              <div className="stat-desc text-secondary">Platoon's Total Projects.</div>
           </div>
           <div className="stat shadow-md rounded-md border border-black">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
              <div className="stat-title text-black">Accomplished</div>
              <div className="stat-value text-green-500">564</div>
              <div className="stat-desc text-secondary">Platoon's done projects.</div>
          </div>
          <div className="stat shadow-md rounded-md border border-black">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="stat-title text-black">On-Progress</div>
              <div className="stat-value text-red-400">202</div>
              <div className="stat-desc text-secondary">Platoon's On-going Projects.</div>
            </div>
          </div>
          <div className="row-span-2 shadow-md rounded-md w-96 h-full p-3 flex items-center border border-black">
           <PieGraph/>
          </div>
          <div className="col-row-2 shadow-md rounded-md w-full h-96 p-3 border border-black">
            <BarGraph/>
          </div>
          <div className="col-span-2 shadow-md rounded-md w-full h-96 p-3 border border-black">
            <LineGraph/>
          </div>
        </div>
        </section>
      </div>
  
    </div>
   
  );
};

export default adminAnalytics;