"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import auth_api from '@/services/auth_api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import jwt from 'jsonwebtoken';

import Cookies from 'js-cookie';

import axios from 'axios';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  

  const handleLogin = () => {
    router.push('/Login');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await auth_api.register({ 
        username: username,
        password: password,
        role: role,
      });
      const token = res.data.token
      
      if (token) {
        toast.success('Register successfully');
        Cookies.set('token', token);
        router.push('/Login');
      }
    } catch (error) {
      console.error('Error Register', error.message);
      toast.error('Register Failed '+ error.message);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <ToastContainer/>
      <div className='w-2/3 flex flex-col justify-center bg-white border border-[#C2C2C2] rounded-lg p-10'>

      <form  onSubmit={handleRegister}>
        <label className='text-[40px] font-semibold text-[#1692EC]  pb-6'>Register</label>
        <hr className='border-[#C2C2C2] mb-6'/>
        <div className='flex flex-col gap-x-6  pb-6'>
          <p className='pb-4 text-2xl'>Username</p>
          <input 
              className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
              type="text" 
              placeholder="Please input username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-x-6  pb-6'>
          <p className='pb-4 text-2xl'>Password</p>
          <input 
              className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
              type="password" 
              placeholder="Please input password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-x-6 pb-6'>
            <p className='pb-2 text-2xl'>Role</p>
            <div className='flex w-full  px-4 text-xl'>
                <div className='flex mr-8'>
                    <input
                    className="mr-3"
                    type="radio"
                    id="admin"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    <label htmlFor="admin">ADMIN</label>
                </div>
                <div className='flex'>
                    <input
                    className="mr-3"
                    type="radio"
                    id="user"
                    name="role"
                    value="user"
                    checked={role === 'user'}
                    onChange={(e) => setRole(e.target.value)}
                    />
                    <label htmlFor="user">USER</label>
                </div>
            </div>
        </div>
        
        <div className='flex justify-end'>
          <button 
            className='flex w-fit items-center gap-x-2.5 rounded bg-[#1692EC] text-white text-2xl px-4 py-3' 
            type="submit"
          >
          Register
          </button>
        </div>
      </form>
      <button className='text-2xl' onClick={handleLogin}>Login</button>
      </div>
    </main>
  )
}
