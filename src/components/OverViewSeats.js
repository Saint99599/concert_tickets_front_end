// icon
import { User , Award , CircleX  } from 'lucide-react';

export default function OverViewSeats() {
  return (
    <div className='flex justify-evenly'>
        <div className="flex flex-col justify-center items-center w-[350px] h-[234px] bg-[#0070A4] px-6 py-4 text-white gap-2.5 rounded-lg">
            <User className='h-10 w-10'/>
            <p className='text-2xl'>Total of seats</p>
            <p className='text-6xl'>500</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[350px] h-[234px] bg-[#00A58B] px-6 py-4 text-white gap-2.5 rounded-lg">
            <Award className='h-10 w-10'/>
            <p className='text-2xl'>Reserve</p>
            <p className='text-6xl'>120</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[350px] h-[234px] bg-[#E84E4E] px-6 py-4 text-white gap-2.5 rounded-lg">
            <CircleX className='h-10 w-10'/>
            <p className='text-2xl'>Cancel</p>
            <p className='text-6xl'>12</p>
        </div>
    </div>
  )
}