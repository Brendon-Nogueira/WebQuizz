import { useState, useEffect } from "react"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";


export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // memory leak
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkCancelled(){
    setLoading(true)

    return
  }

  const createUser = async(data) =>{

    checkCancelled()
    setLoading(true)

    try {
      const {user} =  await createUserWithEmailAndPassword(auth, data.email, data.password)

      await updateProfile(user, {displayName: data.displayName})


      return user 

    } catch (error) {

      console.log(error.message)
      console.log(typeof error.message) 
    }

    setLoading(false)

  }

  useEffect (()=>{
    return setCancelled(true)
  },[])

  

  return{
    auth,
    createUser,
    error,
    //logout,
    //login,
    loading,
  }
}