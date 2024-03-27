"use client"
import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';

import overview_api from '@/services/overview_api';
import SideBarAdmin from '@/components/SideBarAdmin';

export default function Admin_History() { 
  const token = Cookies.get('token');
  const [dataLog, setDataLog] = useState([]);

  useEffect(() => {
    // CheckAuth()
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const result = await overview_api.logConcerts(token); 
      setDataLog(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } 
  };

  return (
    <>
      <SideBarAdmin />
      <main className="bg-[#FBFBFB] w-full h-screen md:ml-60 py-16 px-8">
        <table className='w-full border'>
          <thead className='text-xl font-semibold'>
            <tr>
              <th className='border py-2.5 px-3'>Date time</th>
              <th className='border py-2.5 px-3'>Username</th>
              <th className='border py-2.5 px-3'>Concert name</th>
              <th className='border py-2.5 px-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataLog.map(item => (
              <tr key={item._id}>
                <td className='border py-2.5 px-3'>{new Date(item.datetime).toLocaleString()}</td>
                <td className='border py-2.5 px-3'>{item.username}</td>
                <td className='border py-2.5 px-3'>{item.productname}</td>
                <td className='border py-2.5 px-3'>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  )
}
  