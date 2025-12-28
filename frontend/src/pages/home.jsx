 import api from "../api/axios.js"
 import TaskCard from "../components/taskCard"
 import Spinner from '../components/spinner.jsx'
import { useEffect, useState } from "react"
import Button from "../components/Button.jsx";
import { Navigate, useNavigate } from "react-router-dom";
 export default function Home(){
  const[tasks , setTasks] = useState([]);
  const[loading, setLoading] = useState(true);

 
  const navigate = useNavigate()

 const getTasks = async function (){
    try{
      const res = await api.get('/tasks')
      console.log(res.data)
      setTasks(res.data.tasks)
    }catch(err){
      console.log(err.message);
    }finally{
      setLoading(false)
    }
   }

   useEffect(()=>{
    getTasks()
   },[])

   if(loading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner/>
      </div>
    )
   }
    return(
        <div className="m-4">   
        <div>
           <Button onClick={()=>navigate('/create')}>home</Button>
        </div>
       
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-4 gap-3">
            {tasks.length === 0 && <p className=" text-xl text-gray-400 ">No tasks found</p>}
            {tasks.map((task)=>{
              return(
                <TaskCard key={task._id} title={task.title} description={task.description} createdAt={task.createdAt}/>
              )
            })}
           

            
          </div>
         
         
        </div>
    )
 }