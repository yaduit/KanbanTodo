import Register  from './pages/register.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import CreateTask from './pages/createTask.jsx';
import ProtectedRoute from './components/protectedRoute.jsx';
function App() {
return(
   <Routes>

  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route element={<ProtectedRoute/>}>
      <Route path='/create' element={<CreateTask/>}/>
      <Route path='/home' element={<Home/>}/>
  </Route>
  

   </Routes>


)
}

export default App
