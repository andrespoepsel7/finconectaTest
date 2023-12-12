import React, {useEffect} from 'react'

export default function WebComponent({children}) {
  useEffect(() => {
    window.scroll(0,0)
  }, [])
  
  return (
    <div className='hidden md:flex flex-col w-full items-center justify-center'>
      {children}
    </div>
  )
}
