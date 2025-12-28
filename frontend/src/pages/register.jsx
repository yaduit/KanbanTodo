import React from 'react'
import { useState } from 'react'
import api from '../api/axios.js';
import Button from '../components/Button.jsx'
import {useNavigate} from 'react-router-dom';


export default function Register() {
    const [name , setName] =  useState('') ;
    const [email , setEmail] =  useState('');
    const [password, setPassword] = useState('');

   

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await api.post('/auth/register',{
                name,
                email,
                password
            })
        }catch(err){
            console.log(err.message);
        }
        navigate('/login');
    }

  return (
    <div className='flex min-h-screen items-center justify-center m-3'>
        <div className='flex flex-col items-center gap-4'>
             <h3 className="text-2xl text-gray-400 m-2">Register user</h3>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <input required className='border border-gray-300 outline-none px-3 py-2 rounded-xl' type="text" placeholder='username'  onChange={e=> setName(e.target.value)}/>
            <input required className='border border-gray-300 outline-none px-3 py-2 rounded-xl' type="text" placeholder='email'  onChange={e=> setEmail(e.target.value)}/>
            <input required className='border border-gray-300 outline-none px-3 py-2 rounded-xl' type="password" placeholder='password' onChange={e=>setPassword(e.target.value)} />
            <Button type='submit'>Register</Button>
        </form>
        <p className='mt-2 text-gray-400'>Already registered then login</p>
        <Button onClick={()=>navigate('/login')}>Login</Button>
        </div>
       
    </div>
  )
}
