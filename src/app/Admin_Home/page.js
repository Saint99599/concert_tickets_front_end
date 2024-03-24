"use client"
import { useState, useEffect } from 'react';

import OverView from "@/components/OverViewSeats"
import CreateConcert from "@/components/CreateConcert"
import OverViewConcert from "@/components/OverViewConcert"

import admin_api from '@/services/admin_api';

export default function Admin_Home() {
  const [showOverview, setShowOverview] = useState(true)
  const [allConcert, setAllConcert] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await admin_api.fetchConcertData(); 
      console.log(result)
      setAllConcert(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
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
    </>
  )
}
  