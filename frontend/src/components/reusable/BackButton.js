import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export default function BackButton({destination='/'}) {

  const navigate = useNavigate()
  return (
    <div>
      <button 
        className='flex flex-row items-center justify-center px-3 py-1 rounded-lg bg-blue-700 text-white'
        onClick={()=>navigate(destination)}
      >
        <BsArrowLeft className='w-[25px] h-[25px]'/>
        <p className='ml-2 text-lg font-semibold'>Back</p>
      </button>
    </div>
  )
}
