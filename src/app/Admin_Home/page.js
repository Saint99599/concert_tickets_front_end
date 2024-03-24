"use client"
import React, { useState } from 'react';

import OverView from "@/components/OverViewSeats"
import CreateConcert from "@/components/CreateConcert"
import OverViewConcert from "@/components/OverViewConcert"

export default function Admin_Home() {
  const [showOverview, setShowOverview] = useState(true)
  const [data, setData] = useState([
    {
        name: "QwertyLorem002",
        seat: 500,
        description: "QwertyLorem001 750seat"
    },
    {
        name: "QwertyLorem002",
        seat: 250,
        description: "QwertyLorem001 750seat"
    },
    {
        name: "QwertyLorem003",
        seat: 750,
        description: "QwertyLorem001 750seat"
    }
]);

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
        {data.map((item, index) => (
          <div key={index} >
              <OverViewConcert Name={item.name} Seat={item.seat} Description={item.description}/>
          </div>
        ))}
       </> 
      : 
        <CreateConcert />
      }
    </>
  )
}
  