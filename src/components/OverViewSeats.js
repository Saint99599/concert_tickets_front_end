// icon
"use client"
import { useState, useEffect } from 'react';
import { User , Award , CircleX  } from 'lucide-react';
import Cookies from 'js-cookie';
import overview_api from '@/services/overview_api';

export default function OverViewSeats() {
  const [seats, setSeats] = useState(0);
  const [reserve, setReserve] = useState(0);
  const [cancel, setCancel] = useState(0);

  const token = Cookies.get('token');

  console.log("token",token)
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const res_overview_api = await overview_api.concertsOverview(token); 
      if (Array.isArray(res_overview_api) && res_overview_api.length > 0) {
        const { cancel, reserve, totalseats } = res_overview_api[0];
        setSeats(totalseats);
        setReserve(reserve);
        setCancel(cancel);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className='flex justify-evenly'>
        <div className="flex flex-col justify-center items-center w-[350px] h-[234px] bg-[#0070A4] px-6 py-4 text-white gap-2.5 rounded-lg">
            <User className='h-10 w-10'/>
            <p className='text-2xl'>Total of seats</p>
            <p className='text-6xl'>{seats}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[350px] h-[234px] bg-[#00A58B] px-6 py-4 text-white gap-2.5 rounded-lg">
            <Award className='h-10 w-10'/>
            <p className='text-2xl'>Reserve</p>
            <p className='text-6xl'>{reserve}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[350px] h-[234px] bg-[#E84E4E] px-6 py-4 text-white gap-2.5 rounded-lg">
            <CircleX className='h-10 w-10'/>
            <p className='text-2xl'>Cancel</p>
            <p className='text-6xl'>{cancel}</p>
        </div>
    </div>
  )
}