import { Navigate,Outlet } from "react-router-dom"
import UseAuth from "../context/useAuth"
import Spinner from "./spinner";
export default function ProtectedRoute(){
    const {isAuth , loading} = UseAuth();
    if(loading){
        return(
            <div className="flex justify-center m-4">
                <Spinner></Spinner>checking authentication...
            </div>
        )
    }
    return isAuth? <Outlet/> : <Navigate to='/login'/>
}