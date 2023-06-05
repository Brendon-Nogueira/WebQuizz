import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const useLoadUser = (auth) => {
  const [user, setUser] = useState(undefined);
  const loadingUser = user === undefined;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [auth])

  return [user, loadingUser]
}


