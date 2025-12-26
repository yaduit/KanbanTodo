export default function TaskCard({title,description,createdAt}){
   return(
    <div>
      <div className="tasks p-2 border border-gray-300 rounded-xl">
              <h3 className="text-xl text-center mb-2 text-gray-400 font-semibold">{title}</h3>
              <p className="text-gray-500">{description}</p>
              <h5 className="mt-2 text-sm text-gray-400">Created at: {new Date(createdAt).toLocaleDateString()}</h5>
      </div>
   </div>
   )
   
}
