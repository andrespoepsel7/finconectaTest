import React, {useState} from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'

export default function Authenticate() {

  //States
  // login, signup
  const [authenticate, setAuthenticate] = useState('login')
  const [loginForm, setLoginForm] = useState({
    email:'',
    password:'',
  })
  const [signupForm, setSignupForm] = useState({
    name:'',
    email:'',
    password:'',
    repeatPassword:'',
  })

  const handleSignup = async(e) => {
    e.preventDefault()
    console.log(signupForm)
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    console.log(loginForm)
  }

  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          {authenticate === 'signup' ?
            <div className='w-full flex items-center justify-center'>
              <form onSubmit={handleSignup} className='flex flex-col w-[400px] bg-slate-300 py-5 px-7 rounded-2xl'>
                <p className='text-3xl font-bold text-blue-700 text-center mb-3'>Sign Up</p>
                <label className='text-lg font-bold text-blue-700'>Name:</label>
                <input 
                  type="text" 
                  placeholder='enter name...'
                  className='py-1 px-3 rounded-md outline-none text-slate-600 mt-1'
                  onChange={(e)=>setSignupForm({...signupForm, name:e.target.value})} 
                  value={signupForm.name}
                />
                <label className='text-lg font-bold text-blue-700 mt-3'>Email:</label>
                <input 
                  type="email" 
                  placeholder='enter email...'
                  className='py-1 px-3 rounded-md outline-none text-slate-600 mt-1'
                  onChange={(e)=>setSignupForm({...signupForm, email:e.target.value})} 
                  value={signupForm.email}
                />
                <label className='text-lg font-bold text-blue-700 mt-3'>Password:</label>
                <input 
                  type="password" 
                  placeholder='enter password...' 
                  className='py-1 px-3 rounded-md outline-none text-slate-600 mt-1'
                  onChange={(e)=>setSignupForm({...signupForm, password:e.target.value})}
                  value={signupForm.password}
                />
                <label className='text-lg font-bold text-blue-700 mt-3'>Repeat Password:</label>
                <input 
                  type="password" 
                  placeholder='repeat password...' 
                  className='py-1 px-3 rounded-md outline-none text-slate-600 mt-1'
                  onChange={(e)=>setSignupForm({...signupForm, repeatPassword:e.target.value})}
                  value={signupForm.repeatPassword}
                />
                <div className='mt-5 w-full flex justify-end'>
                  <button className='bg-blue-700 text-white py-1 px-3 font-bold rounded-lg hover:bg-blue-600'>Sign Up</button>
                </div>
                <div className='w-full flex flex-row items-center'>
                  <p>Already have an account?</p>
                  <p onClick={()=>setAuthenticate('login')} className='ml-2 text-blue-700 underline hover:text-blue-500 cursor-pointer'>Log In</p>
                </div>
              </form>
            </div>
            :
            <div className='w-full flex items-center justify-center'>
              <form onSubmit={handleLogin} className='flex flex-col w-[400px] bg-slate-300 py-5 px-7 rounded-2xl'>
                <p className='text-3xl font-bold text-blue-700 text-center mb-3'>Log In</p>
                <label className='text-lg font-bold text-blue-700'>Email:</label>
                <input 
                  type="email" 
                  placeholder='enter email...'
                  className='py-1 px-3 rounded-md outline-none text-slate-600 mt-1'
                  onChange={(e)=>setLoginForm({...loginForm, email:e.target.value})} 
                  value={loginForm.email}
                />
                <label className='text-lg font-bold text-blue-700 mt-3'>Password:</label>
                <input 
                  type="password" 
                  placeholder='enter password...' 
                  className='py-1 px-3 rounded-md outline-none text-slate-600 mt-1'
                  onChange={(e)=>setLoginForm({...loginForm, password:e.target.value})}
                  value={loginForm.password}
                />
                <div className='mt-5 w-full flex justify-end'>
                  <button className='bg-blue-700 text-white py-1 px-3 font-bold rounded-lg hover:bg-blue-600'>Log In</button>
                </div>
                <div className='w-full flex flex-row items-center'>
                  <p>Don't have an account?</p>
                  <p onClick={()=>setAuthenticate('signup')} className='ml-2 text-blue-700 underline hover:text-blue-500 cursor-pointer'>Sign Up</p>
                </div>
              </form>
            </div>
          }
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          {authenticate === 'login' ?
            <div>

            </div>
            :
            <div>

            </div>
          }
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}
