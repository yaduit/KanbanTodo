export default function TaskCard({title,description,createdAt,handleDelete,handleEdit,task}){
   return(
    <div>
      <div className="tasks p-3 border border-gray-300 rounded-xl">
              <h3 className="text-xl text-center mb-2 text-gray-400 font-semibold">{title}</h3>
              <p className="text-gray-500 tracking-tighter">{description}</p>
              
              <div className="flex justify-between p-2">
               <button onClick={()=> handleEdit(task)}className="border border-gray-400 hover:bg-gray-200 text-sm text-gray-400 rounded-md px-1 py-1" >edit</button>
               <h5 className="mt-2 text-sm text-gray-400">Created at: {new Date(createdAt).toLocaleDateString()}</h5>
              <button onClick={()=>handleDelete(task._id)} className="border border-gray-400  hover:bg-gray-200 text-sm text-gray-400 rounded-md px-1 py-1">delete</button>
              </div>
              
      </div>
   </div>
   )
   
}
