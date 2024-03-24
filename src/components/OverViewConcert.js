"use client"
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from './Modal';

// icon
import { User, Trash2, CircleX } from 'lucide-react';

import admin_api from '@/services/admin_api';

export default function OverViewConcert({Name, Seat, Description, fetchData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  }

  const handleDeleteConcert = async (e) => {
    e.preventDefault();
    try {
      await admin_api.deleteConcert({
        name: Name
      });
      console.log("---1---")
      fetchData();
      console.log("---2---")
      setIsModalOpen(false); // ปิดโมดัลหลังจากลบเสร็จ
      console.log("---3---")
      toast.success('Delete successfully')
      console.log("---4---")
    } catch (error) {
      console.error('Error delete data:', error.message);
      toast.error('Delete Failed', {
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
            <CircleX className='text-[#E63946] w-12 h-12'/>
            <p className="text-xl">Are you sure to delete?</p>
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
              className='w-[179px] rounded bg-[#E63946] border border-[#C4C4C4] text-white px-4 py-3'
              onClick={handleDeleteConcert}
            >
              Yes, Delete
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
            className='flex items-center gap-x-2.5 rounded bg-[#E84E4E] text-white text-2xl px-4 py-3' 
            onClick={handleOpen}
          >
            <Trash2/>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}