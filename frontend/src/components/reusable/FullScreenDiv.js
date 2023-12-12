import React from 'react'

export default function FullScreenDiv({children}) {
  return (
    <>
      {/* Versión Web */}
      <div style={{ minHeight: 'calc(100vh - 100px)' }} className='hidden md:flex flex-col w-full items-center justify-center'>
        {children}
      </div>
      {/* Versión Móvil */}
      <div style={{ minHeight: 'calc(100vh - 70px)' }} className='md:hidden flex flex-col w-full items-center justify-center'>
        {children}
      </div>
    </>
  )
}
