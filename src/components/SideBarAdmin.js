"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// icon
import { Home, Inbox, RefreshCcw, LogOut  } from 'lucide-react';

const pages = [
  { name: 'Home', icon: <Home/>, path: '/Admin_Home' },
  { name: 'History', icon: <Inbox/>, path: '/Admin_History' },
  { name: 'Switch to User', icon: <RefreshCcw/>, path: '/' },
];

export default function SideBarAdmin() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(pages[0]);

  //setCurrentPage to add bg color in button
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/Login');
  };

  return (
    <nav className="fixed bg-white flex flex-col justify-between h-screen min-w-60 py-10">
      <div className='flex flex-col'>
        {/* admin logo */}
        <label className='p-6 text-[40px] font-semibold'>Admin</label>

        {/* list */}
        <ul className='flex flex-col'>
          {pages.map((page, index) => (
            <li key={index} className={`${currentPage === page ? 'bg-[#EAF5F9] rounded-lg' : 'hover:bg-[#EAF5F9] rounded-lg'} m-2.5 text-2xl py-4 px-2 `} >
              <Link className='flex gap-2.5 items-center' href={page.path}>
                {page.icon}
                <span onClick={() => changePage(page)}>
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* logout */}
      <div
        className='flex gap-2.5 items-center m-2.5 text-2xl py-4 px-2 hover:bg-[#EAF5F9] rounded-lg'
        onClick={handleLogout}
      > 
        <LogOut/>
        Logout
      </div>
    </nav>
  )
}

