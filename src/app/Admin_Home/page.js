"use client"
import { useState, useEffect } from 'react';

import OverView from "@/components/OverViewSeats"
import CreateConcert from "@/components/CreateConcert"
import OverViewConcert from "@/components/OverViewConcert"
import Cookies from 'js-cookie';

import admin_api from '@/services/admin_api';
import SideBarAdmin from '@/components/SideBarAdmin';

export default function Admin_Home() {
  const token = Cookies.get('token');
  const [showOverview, setShowOverview] = useState(true)
  const [allConcert, setAllConcert] = useState([]);

  useEffect(() => {
    // CheckAuth()
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const result = await admin_api.fetchConcertData(token); 
      setAllConcert(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } 
  };

  return (
    <>
      <SideBarAdmin />
      <main className="bg-[#FBFBFB] w-full md:ml-60 py-16 px-8">
          <OverView/>
          <div className='flex gap-y-2.5 text-2xl text-[#5C5C5C] font-semibold my-12'>
              <button 
              className={`${showOverview  ? 'text-[#1692EC] border border-b-[#1692EC] border-0 border-b-2' : ''}  px-4 py-2.5 ` }
              onClick={() => setShowOverview(true)}
              >
              Overview
              </button>

              <button 
              className={`${showOverview  ? '' : 'text-[#1692EC] border border-b-[#1692EC] border-0 border-b-2'}  px-4 py-2.5 ` }
              onClick={() => setShowOverview(false)}
              >
              Create
              </button>
          </div>
          {showOverview ?
          <>
              {allConcert.map((item, index) => (
              <div key={index} >
                  <OverViewConcert Name={item.name} Seat={item.seat} Description={item.description} fetchData={fetchData}/>
              </div>
              ))}
          </> 
          : 
              <CreateConcert fetchData={fetchData} />
          }
      </main>
    </>
  )
}
  