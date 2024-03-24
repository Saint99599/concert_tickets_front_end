"use client"
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// icon
import { User, Save  } from 'lucide-react';

import admin_api from '@/services/admin_api';

export default function CreateConcert({ fetchData }) {
  const [nameConcert, setNameConcert] = useState('');
  const [seatConcert, setSeatConcert] = useState(0);
  const [descriptionConcert, setDescriptionConcert] = useState('');

  const handleCreateConcert = async (e) => {
    e.preventDefault();
    try {
      await admin_api.postConcert({ 
        name: nameConcert,
        seat: seatConcert,
        description: descriptionConcert
      });
      fetchData()
      toast.success('Create successfully');
    } catch (error) {
      console.error('Error posting data:', error.message);
      toast.error('Create Failed '+ error.message);
    }
  };

  return (
    <>   
      <ToastContainer/>
      <form className='flex flex-col bg-white border border-[#C2C2C2] rounded-lg p-10' onSubmit={handleCreateConcert}>
          <label className='text-[40px] font-semibold text-[#1692EC]  pb-6'>Create</label>
          <hr className='border-[#C2C2C2] mb-6'/>
          <div className='flex gap-x-6  pb-6'>
              <div className='w-1/2'>
                  <p className='pb-4 text-2xl'>Concert Name</p>
                  <input 
                      className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
                      type="text" 
                      placeholder="Please input concert name"
                      value={nameConcert} 
                      onChange={(e) => setNameConcert(e.target.value)}
                  />
              </div>
              
              <div className='w-1/2 gap-y-4'>
                  <p className='pb-4 text-2xl'>Total of seat</p>
                      <div className='flex py-3 px-4 rounded border border-[#5C5C5C]'>
                          <input 
                              className='w-full outline-none ' 
                              type="number" 
                              placeholder="Please input total of seat"
                              value={seatConcert} 
                              onChange={(e) => setSeatConcert(parseInt(e.target.value))}
                          />
                          <User/>
                      </div>
              </div>
          </div>
          <div className='pb-6'>
              <p className='pb-4 text-2xl'>Description</p>
              <textarea 
                  className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
                  type="text" 
                  placeholder="Please input description"
                  value={descriptionConcert} 
                  onChange={(e) => setDescriptionConcert(e.target.value)}
              />
          </div>
          <div className='flex justify-end'>
              <button 
                  className='flex items-center gap-x-2.5 rounded bg-[#1692EC] text-white text-2xl px-4 py-3' 
                  type="submit"
              >
                  <Save/>
                  Save
              </button>
          </div>
      </form>
    </> 
  )
}