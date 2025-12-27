import { useContext } from "react";
import AuthContext from "./authContext";
export default function UseAuth(){
    const context = useContext(AuthContext)
    
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
    return context
}