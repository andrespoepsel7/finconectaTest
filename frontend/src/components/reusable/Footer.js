import React from 'react'
import WebComponent from './WebComponent'
import MobileComponent from './MobileComponent'
import {MdLocationPin, MdPhoneEnabled, MdEmail} from 'react-icons/md'
import {BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs'

export default function Footer() {
  return (
    <>
      <WebComponent>
        <div className='w-full flex flex-col bg-gradient-to-r from-blue-700 to-cyan-500 px-[10%]'>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center justify-between py-12'>
            <div className='flex flex-col text-white font-roboto space-y-4'>
              <div className='flex flex-row items-center justify-start'>
                <MdLocationPin className='w-[26px] h-[26px]'/>
                <p className='font-light text-[18px] ml-2'>La Paz, Bolivia</p>
              </div>
              <div className='flex flex-row items-center justify-start'>
                <MdPhoneEnabled className='w-[26px] h-[26px]'/>
                <p className='font-light text-[18px] ml-2'>+591 78849039</p>
              </div>
              <div className='flex flex-row items-center justify-start'>
                <MdEmail className='w-[26px] h-[26px]'/>
                <p className='font-light text-[18px] ml-2'>andres.poevas@gmail.com</p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-3 text-white'>
              <a 
                href="https://www.linkedin.com/in/andrespoepselv"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsLinkedin className='w-[35px] h-[35px]'/>
              </a>
              <a 
                href="https://github.com/andrespoepsel7"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsGithub className='w-[35px] h-[35px]'/>
              </a>
              <a 
                href="https://www.instagram.com/andrespoepsel7/"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsInstagram className='w-[35px] h-[35px]'/>
              </a>
              <a 
                href="https://www.facebook.com/andres.poepsel.5"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsFacebook className='w-[35px] h-[35px]'/>
              </a>
              
            </div>
            <div className='flex flex-col items-end justify-center'>
              <a 
                href="https://wa.link/v43p7e"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='flex flex-row items-center justify-center w-[210px] bg-slate-700 text-white py-2 rounded-full hover:scale-110'
              >
                <BsWhatsapp className='w-[30px] h-[30px]'/>
                <p className='text-[20px] font-bold ml-3'>Contact me!</p>
              </a> 
            </div>
          </div>
          <div className='relative w-full flex items-center justify-center border-t-2 border-white'>
            {/* Puntito */}
            <div className='absolute -top-[6px] left-[50%] bg-white h-[10px] w-[10px] rounded-full'></div>
            <p className='my-3 font-thin text-white'>© 2023 Andrés Poepsel Vásquez. All Rights Reserved</p>
          </div>
        </div>
      </WebComponent>
      <MobileComponent>
        <div className='w-full flex flex-col bg-gradient-to-r from-blue-700 to-cyan-500 px-[5%]'>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-col items-center py-12'>
            <div className='flex flex-col text-white font-roboto space-y-4'>
              <div className='flex flex-row items-center justify-start'>
                <MdLocationPin className='w-[26px] h-[26px]'/>
                <p className='font-light text-[18px] ml-2'>La Paz, Bolivia</p>
              </div>
              <div className='flex flex-row items-center justify-start'>
                <MdPhoneEnabled className='w-[26px] h-[26px]'/>
                <p className='font-light text-[18px] ml-2'>+591 78849039</p>
              </div>
              <div className='flex flex-row items-center justify-start'>
                <MdEmail className='w-[26px] h-[26px]'/>
                <p className='font-light text-[18px] ml-2'>andres.poevas@gmail.com</p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-3 text-white mt-10'>
              <a 
                href="https://www.linkedin.com/in/andrespoepselv"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsLinkedin className='w-[35px] h-[35px]'/>
              </a>
              <a 
                href="https://github.com/andrespoepsel7"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsGithub className='w-[35px] h-[35px]'/>
              </a>
              <a 
                href="https://www.instagram.com/andrespoepsel7/"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsInstagram className='w-[35px] h-[35px]'/>
              </a>
              <a 
                href="https://www.facebook.com/andres.poepsel.5"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='hover:scale-110'
              >
                <BsFacebook className='w-[35px] h-[35px]'/>
              </a>
              
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
              <a 
                href="https://wa.link/v43p7e"
                target="_blank" 
                rel="noopener noreferrer" 
                download={true}
                className='flex flex-row items-center justify-center w-[210px] bg-slate-700 text-white py-2 rounded-full hover:scale-110'
              >
                <BsWhatsapp className='w-[30px] h-[30px]'/>
                <p className='text-[20px] font-bold ml-3'>Contact me!</p>
              </a> 
            </div>
          </div>
          <div className='relative w-full flex flex-col items-center justify-center border-t-2 border-white'>
            {/* Puntito */}
            <div className='absolute -top-[6px] left-[50%] bg-white h-[10px] w-[10px] rounded-full'></div>
            <p className='mt-3 font-thin text-white'>© 2023 Andrés Poepsel Vásquez.</p>
            <p className='mb-3 font-thin text-white'>All Rights Reserved.</p>
          </div>
        </div>
      </MobileComponent>
    </>
  )
}
