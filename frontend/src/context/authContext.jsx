import { createContext, useEffect, useState } from "react"
import api from "../api/axios"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me")
        setIsAuth(true)
        setUser(res.data.user)
      } catch (err) {
        setIsAuth(false)
        setUser(null)
        console.log(err.message)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password })
    setIsAuth(true)
    setUser(res.data.user)
  }

  const logout = async () => {
    await api.post("/auth/logout")
    setIsAuth(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

