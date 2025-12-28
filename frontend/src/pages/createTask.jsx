
import { useState } from "react"
import api from "../api/axios.js"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import UseAuth from "../context/useAuth.jsx"


export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [desc ,setDesc] = useState('');

  const{logout} = UseAuth();
  const navigate = useNavigate();


  const addTasks = async (e)=>{
    e.preventDefault();
    if(!title|| !desc) return alert('fill all the fields');
    try{
      await api.post('/tasks',{
      title,
      description: desc
    });
    setTitle('')
    setDesc('')
    navigate('/home')
    } catch(err){
      console.log(err.message)
    } 
  }

  const handleLogout= async ()=>{
    try{
      await logout()
      navigate('/login')
    }catch(err){
      console.log(err.message);
    }

  };
   
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <h3 className="text-2xl text-center text-gray-500">Create Tasks</h3>
          <Link className="px-2 py-1 m-3 border border-gray-300 rounded-xl" to='/home'>tasks</Link>
            <form onSubmit={addTasks}>
            <div className="flex justify-center gap-4 mt-3">
            <input className="w-50 outline-none px-2 py-1 border border-gray-300 rounded-xl" type="text" placeholder="enter title" value={title} onChange={e=> setTitle(e.target.value)}/>
            <textarea className="outline-none px-2 py-2 border border-gray-300 rounded-xl resize-none w-1/3" placeholder="description"value={desc} onChange={e=> setDesc(e.target.value)}></textarea>
            <Button type="submit">Add task</Button>
            </div>
            </form>

    </div>
  )
}

