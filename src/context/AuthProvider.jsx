import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  // 🔥 Auto-sync userData changes into localStorage
  useEffect(() => {
    if (userData) {
      localStorage.setItem("employees", JSON.stringify(userData))
    }
  }, [userData])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
