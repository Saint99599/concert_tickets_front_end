"use client"
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from './Modal';

// icon
import { User, Trash2, CircleX } from 'lucide-react';

import user_api from '@/services/user_api';

import Cookies from 'js-cookie';

export default function ReserveConcert({UserName, Name, Seat, Description, fetchData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = Cookies.get('token');

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  }

  const handleReserveConcert = async (e) => {
    e.preventDefault();
    try {
      await user_api.addProductToUser({
        username: UserName,
        productname: Name,
        token:token
      });
      //bug notice
      fetchData();
      setIsModalOpen(false); // ปิดโมดัลหลังจากลบเสร็จ
      toast.success('Reserve successfully')
    } catch (error) {
      console.error('Error Reserve data:', error.message);
      toast.error('Reserve Failed', {
        position: 'top-right' // แก้เป็น 'top-right' หรือตำแหน่งที่ต้องการ
      });
    }
  };

  return (
    <>
      <ToastContainer/>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleClose}
      >
        <div className="flex flex-col bg-white rounded-lg p-6 gap-y-6">
          <div className="flex flex-col items-center">
            <p className="text-xl">Are you sure to Reserve?</p>
            <p className="text-xl">"{Name}"</p>
          </div>
          <div className='flex justify-around gap-x-4'>
            <button 
              className='w-[179px] rounded border border-[#C4C4C4] px-4 py-3'
              onClick={handleClose}
            >
              Cancel
            </button>
            <button 
              className='w-[179px] rounded bg-[#1692EC] border border-[#C4C4C4] text-white px-4 py-3'
              onClick={handleReserveConcert}
            >
              Yes, Reserve
            </button>
          </div>
        </div>
      </Modal>

      <div className='flex flex-col bg-white border border-[#C2C2C2] rounded-lg p-10 mb-12'>
        <label className='text-[40px] font-semibold text-[#1692EC] pb-6'>{Name}</label>
        <hr className='border-[#C2C2C2] mb-6'/>
        <p className='pb-6 text-2xl'>
          {Description}  
        </p>
        <div className='flex justify-between items-center'>
          <span className='flex text-2xl gap-x-2'><User/>{Seat}</span>
          <button 
            className='flex items-center gap-x-2.5 rounded bg-[#1692EC] text-white text-2xl px-4 py-3' 
            onClick={handleOpen}
          >
            Reserve
          </button>
        </div>
      </div>
    </>
  )
}