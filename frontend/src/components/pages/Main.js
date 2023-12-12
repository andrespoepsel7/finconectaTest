import React from 'react'
import Header from '../reusable/Header'
import Footer from '../reusable/Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {

  return (
    <div className='flex w-full min-h-screen'>
      {/* Versión WEB */}    
      <div className='hidden md:flex flex-col relative w-full min-h-screen items-center'>
        {/* Navbar */}
        <div className='z-30 w-full'>
          <Header/>
        </div>
        {/* Contenido */}
        <div className="relative w-full pt-[100px] font-roboto">
          <Outlet/>
        </div>  
        {/* Footer */}
        <div className='w-full'>
          <Footer/>
        </div>
      </div>
      {/* Versión MÓVIL */}
      <div className='relative flex flex-col w-full min-h-screen items-center md:hidden'>
        {/* Navbar */}
        <div className='z-30 w-full'>
          <Header/>
        </div>
        {/* Contenido */}
        <div className="w-[100%] pt-[70px] font-roboto">
          <Outlet/>
        </div>   
        {/* Footer */}
        <div className='z-0 w-full'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
