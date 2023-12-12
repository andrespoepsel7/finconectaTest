import React, {useState, useEffect, useRef} from 'react'
import WebComponent from './WebComponent'
import MobileComponent from './MobileComponent'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { MdMenu, MdHome, MdConnectedTv } from 'react-icons/md'
import { FaDatabase } from "react-icons/fa6"
import { FaUserAlt } from "react-icons/fa";

export default function Header() {

  const navigate = useNavigate()
  // States
  const [modal, setModal] = useState(false)

  // Modal
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    let handler = (e)=>{
      if(!mobileMenuRef.current?.contains(e.target)){
        setModal(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <>
      <WebComponent>
        <div className='fixed flex flex-row top-0 left-0 w-full h-[100px] py-2 px-[5%] bg-slate-200 shadow-md shadow-slate-500 items-center justify-between'>
          <div className='flex flex-col items-center justify-center'>
            <img src={logo} alt="logo" width={300}/>
            <p className='text-[11px] text-slate-900'>Test - Andrés Poepsel Vásquez</p>
          </div>
          <div className='flex flex-row items-center justify-center space-x-5'>
            <p onClick={()=>navigate('/')} className='text-xl font-bold text-blue-700 hover:underline cursor-pointer hover:scale-110'>Home</p>
            <p onClick={()=>navigate('/api')} className='text-xl font-bold text-blue-700 hover:underline cursor-pointer hover:scale-110'>API</p>
            <p onClick={()=>navigate('/crud')} className='text-xl font-bold text-blue-700 hover:underline cursor-pointer hover:scale-110'>CRUD</p>
            <p onClick={()=>navigate('/authenticate')} className='text-xl font-bold text-blue-700 hover:underline cursor-pointer hover:scale-110'>Authenticate</p>
          </div>
        </div>
      </WebComponent>
      <MobileComponent>
        <div className='fixed flex flex-row top-0 left-0 w-full h-[70px] py-2 px-[2%] bg-slate-200 shadow-md shadow-c2light items-center justify-between'>
          <div className='flex flex-col items-center justify-center'>
            <img src={logo} alt="logo" width={200}/>
            <p className='text-[11px] text-slate-900'>Test - Andrés Poepsel Vásquez</p>
          </div>
          {/* Menu, modal */}
          <div className='cursor-pointer font-mon text-c2' ref={mobileMenuRef}>
            <div 
              className='flex flex-row items-center justify-center text-blue-700'
              onClick={()=>setModal(!modal)}
            >   

              <p className='font-bold text-[20px] mr-2 transition-all duration-100'>Menu</p>
              <MdMenu className='w-[40px] h-[40px] transition-all duration-100'/>
            </div>  

            {/* Modal */}
            {modal &&
              <div className='fixed top-[70px] right-0 bg-gradient-to-r from-blue-700 to-cyan-300 text-white text-[18px] min-w-[200px] transition-transform duration-300 rounded-bl-2xl border-l-2 border-b-2 border-white'>
                <div className='flex flex-col justify-start font-semibold'>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/')
                    }}
                  >
                    <MdHome className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>Home</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/api')
                    }}
                  >
                    <MdConnectedTv className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>API</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/crud')
                    }}
                  >
                    <FaDatabase className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>CRUD</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/authenticate')
                    }}
                  >
                    <FaUserAlt className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>Authenticate</p>
                  </div>
                </div>
              </div>
            } 
          </div>
        </div>
      </MobileComponent>
    </>
  )
}
