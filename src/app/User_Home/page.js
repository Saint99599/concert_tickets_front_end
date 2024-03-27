"use client"
import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import ReserveConcert from '@/components/ReserveConcert';

import SideBarUser from '@/components/SideBarUser';

import admin_api from '@/services/admin_api';
import user_api from '@/services/user_api';

export default function User_Home() {
  const token = Cookies.get('token');
  const [allConcert, setAllConcert] = useState([]);
  const [userConcert, setUserConcert] = useState([]);
  const [userName, setUserName] = useState("");

  const decodedToken = jwt.decode(token);

  useEffect(() => {
    fetchUserConcert()
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const result = await admin_api.fetchConcertData(token); 
      setAllConcert(result);
      setUserName(decodedToken.username);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } 
  };

  const fetchUserConcert = async () => {
    try {
      const result = await user_api.findOne(userName,token); 
      setUserConcert(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } 
  };

  console.log("userName",userName)
  console.log("userConcert",userConcert)

  return (
    <>
        <SideBarUser username={userName}/>
        <main className="bg-[#FBFBFB] w-full md:ml-60 py-16 px-8">
          {allConcert.map((item, index) => (
            <div key={index} >
                <ReserveConcert UserName={userName} Name={item.name} Seat={item.seat} Description={item.description} fetchData={fetchData}/>
            </div>
          ))}
        </main>
    </>
  )
}
  