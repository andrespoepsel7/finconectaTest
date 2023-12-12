import React from 'react'
import logo from '../../assets/loader_logo.png'
import WebComponent from './WebComponent'
import MobileComponent from './MobileComponent'
import FullScreenDiv from './FullScreenDiv'

export default function Loader() {
  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col items-center justify-center bg-white'>
            <div className='w-[320px] h-[320px] flex items-center justify-center'>
              <div className='w-[300px] h-[300px] flex items-center justify-center'>
                <img src={logo} alt="loader-gif" width={250} className='animate-bounce'/>
              </div>
            </div>
          </div>
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col items-center justify-center bg-white'>
            <div className='w-[160px] h-[160px] flex items-center justify-center'>
              <div className='w-[150px] h-[150px] flex items-center justify-center'>
                <img src={logo} alt="loader-gif" width={150} className='animate-bounce'/>
              </div>
            </div>
          </div>
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}