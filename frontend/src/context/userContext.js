import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../utils/Urls";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export default function UserContextProvider({children}){

  const [user, setUser] = useState(null)
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  const signUp = async(signupForm) => {
    axios
      .post(`${apiUrl}/auth/register`, signupForm,  {withCredentials:true})
      .then((response)=>{
        console.log(response)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'success',
            title:'Success!',
            text:"User created succesfully!"
        })
        setCount(count+1)
      })
      .catch((error)=>{
        console.log('Error', error)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'error',
            title:'Error!',
            text:"Please try again!"
        })
      })
  }

  const logIn = async(loginForm) => {
    axios
      .post(`${apiUrl}/auth/login`, loginForm,  {withCredentials:true})
      .then((response)=>{
        console.log(response)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'success',
            title:'Success!',
            text:"Log In succesfull!"
        })
        setCount(count+1)
        navigate('/')
      })
      .catch((error)=>{
        console.log('Error', error)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'error',
            title:'Error!',
            text:"Error logging in!"
        })
      })
     
  }

  const logOut = async() =>{
    
    setUser(null)
    axios
      .get(`${apiUrl}/auth/logout`, {withCredentials:true})
      .then((response)=>{
        console.log("Success")
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'success',
            title:'Success!',
            text:"Log Out succesfull!"
        })
        setCount(count+1)
        navigate('/')

      })
      .catch((error)=>{
        console.log(error)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'error',
            title:'Error!',
            text:"Error logging out!"
        })
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
        signUp,
        logIn,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}