import React, {useEffect} from 'react'

export default function MobileComponent({children}) {

  useEffect(() => {
    window.scroll(0,0)
  }, [])
  
  return (
    <div className='md:hidden flex flex-col w-full items-center justify-center'>
      {children}
    </div>
  )
}
