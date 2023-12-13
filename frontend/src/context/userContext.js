import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../utils/Urls";

export const UserContext = createContext({})

export default function UserContextProvider({children}){

  const [user, setUser] = useState(null)
  const [count, setCount] = useState(0)

  const logOut = async() =>{
    setCount(count+1)
    setUser(null)
    axios
      .get(`${apiUrl}/auth/logout`, {withCredentials:true})
      .then((response)=>{
        console.log("Success")
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    if(!user){
      axios
        .get(`${apiUrl}/auth/profile`, {withCredentials:true})
        .then(({data})=>{
          setUser(data)
        })
    }
    // eslint-disable-next-line
  }, [count])
  
  return(
    <UserContext.Provider
      value={{
        user, 
        setUser,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}