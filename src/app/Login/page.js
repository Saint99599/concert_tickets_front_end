"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import auth_api from '@/services/auth_api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import jwt from 'jsonwebtoken';

import Cookies from 'js-cookie';

import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRegister = () => {
    router.push('/Register');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await auth_api.login({ 
        username: username,
        password: password
      });
      const token = res.data.token
      
      if (token) {
        toast.success('Login successfully');
        Cookies.set('token', token);
        // const gettoken = Cookies.get('token');
        // console.log("gettoken login",gettoken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const decodedToken = jwt.decode(token);
        const role = decodedToken.role;
        if (role === 'admin') {
          router.push('/Admin_Home');
        } else {
          router.push('/User_Home'); 
        }
      }
    } catch (error) {
      console.error('Error Login', error.message);
      toast.error('Login Failed '+ error.message);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <ToastContainer/>
      <div className='w-2/3 flex flex-col justify-center bg-white border border-[#C2C2C2] rounded-lg p-10'>

      <form  onSubmit={handleLogin}>
        <label className='text-[40px] font-semibold text-[#1692EC]  pb-6'>Login</label>
        <hr className='border-[#C2C2C2] mb-6'/>
        <div className='flex flex-col gap-x-6  pb-6'>
          <p className='pb-4 text-2xl'>username</p>
          <input 
              className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
              type="text" 
              placeholder="Please input username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-x-6  pb-6'>
          <p className='pb-4 text-2xl'>password</p>
          <input 
              className='w-full py-3 px-4 outline-none rounded border border-[#5C5C5C]' 
              type="password" 
              placeholder="Please input password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className='flex justify-end'>
          <button 
            className='flex w-fit items-center gap-x-2.5 rounded bg-[#1692EC] text-white text-2xl px-4 py-3' 
            type="submit"
          >
          Login
          </button>
        </div>
      </form>
      <button className='text-2xl' onClick={handleRegister}>Register</button>
      </div>
    </main>
  )
}
