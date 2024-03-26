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
          router.push('/Admin_Home'); // นำทางไปยังหน้า admin
        } else {
          router.push('/Admin_History'); // นำทางไปยังหน้า user
        }
      }
    } catch (error) {
      console.error('Error Login', error.message);
      toast.error('Login Failed '+ error.message);
    }
  };

  return (
    <main className="">
    <ToastContainer/>
      <form className='flex flex-col bg-white border border-[#C2C2C2] rounded-lg p-10' onSubmit={handleLogin}>
        <div className=''>
          <p className=''>username</p>
          <input 
              className='' 
              type="text" 
              placeholder="Please input username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className=''>
          <p className=''>password</p>
          <input 
              className='' 
              type="password" 
              placeholder="Please input password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button 
          className='flex items-center gap-x-2.5 rounded bg-[#1692EC] text-white text-2xl px-4 py-3' 
          type="submit"
        >
         Login
        </button>
      </form>
    </main>
  )
}
