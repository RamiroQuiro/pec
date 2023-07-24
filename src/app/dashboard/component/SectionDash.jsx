import React from 'react'

export default function SectionDash({children}) {
  return (
    <section className='flex items-center justify-center min-h-screen w-full relative bg-primary-500 pb-10'>{children}</section>
  )
}
