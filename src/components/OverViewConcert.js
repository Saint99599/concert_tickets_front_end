// icon
import { User, Trash2  } from 'lucide-react';

import admin_api from '@/services/admin_api';

export default function OverViewConcert({Name, Seat, Description, fetchData}) {

  const handleDeleteConcert = async (e) => {
    e.preventDefault();
    try {
      await admin_api.deleteConcert({ 
        name: Name
      });
      fetchData()
    } catch (error) {
      console.error('Error delete data:', error.message);
    }
  };

  return (
    <form className='flex flex-col bg-white border border-[#C2C2C2] rounded-lg p-10 mb-12' onSubmit={handleDeleteConcert}>
      <label className='text-[40px] font-semibold text-[#1692EC] pb-6'>{Name}</label>
        <hr className='border-[#C2C2C2] mb-6'/>
        <p className='pb-6 text-2xl'>
          {Description}  
        </p>
        <div className='flex justify-between items-center'>
          <span className='flex text-2xl gap-x-2'><User/>{Seat}</span>
          <button 
            className='flex items-center gap-x-2.5 rounded bg-[#E84E4E] text-white text-2xl px-4 py-3' 
            type="submit"
          >
            <Trash2/>
            Delete
          </button>
        </div>
    </form>
  )
}