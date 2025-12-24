import React from 'react'
import { useState } from 'react';
import api from '../api/axios.js';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit = async(e) =>{
    e.preventDefault();
    try{
      await api.post('/auth/login',{
        email,
        password
      })
    }catch(err){
      console.log(err.message);
    }
    navigate('/Home')
  }
  return (
    <div className='flex min-h-screen justify-center'>
      <div>
      <h3 className="text-2xl text-gray-400 m-2">Login user</h3>
      <form className='flex flex-col gap-3' onSubmit={handleLoginSubmit}>
      <input required className='border border-gray-300 rounded-xl outline-none px-3 py-2 ' type="text" placeholder='email' onChange={e=> setEmail(e.target.value)}/>
      <input required className='border border-gray-300 rounded-xl outline-none px-3 py-2 ' type="text" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
      <Button type='submit'>Login</Button>
    </form>
      </div>
    
    </div>
  )
}
