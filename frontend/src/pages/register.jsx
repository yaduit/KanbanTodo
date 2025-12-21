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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username'  onChange={e=> setName(e.target.value)}/>
            <input type="text" placeholder='email'  onChange={e=> setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)} />
            <Button>Register</Button>
        </form>
    </div>
  )
}
