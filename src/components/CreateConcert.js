// icon
import { User, Save  } from 'lucide-react';

export default function CreateConcert() {
  return (
    <form className='flex flex-col bg-white border border-[#C2C2C2] rounded-lg p-10'>
        <label className='text-[40px] font-semibold text-[#1692EC]  pb-6'>Create</label>
        <hr className='border-[#C2C2C2] mb-6'/>
        <div className='flex gap-x-6  pb-6'>
            <div className='w-1/2'>
                <p className='pb-4 text-2xl'>Concert Name</p>
                <input 
                    className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
                    type="text" 
                    placeholder="Please input concert name"
                />
            </div>
            
            <div className='w-1/2 gap-y-4'>
                <p className='pb-4 text-2xl'>Total of seat</p>
                    <div className='flex py-3 px-4 rounded border border-[#5C5C5C]'>
                        <input 
                            className='w-full outline-none ' 
                            type="number" 
                            placeholder="Please input total of seat"
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
  )
}