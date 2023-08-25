import React from 'react'

export default function InputsNumeros({id,children,onChange,value}) {
  return (
    <div className='flex items-center text-left justify-between text-sm gap-2 text-primary-200 w-[30%]  flex-'>
        <label htmlFor={`input${id}`}>{children}</label>
        <input type="text" onChange={onChange} name={`input${id}`} value={value} id={id} className='rounded border border-primary-textGris w-8 p-1 focus:outline-primary-600/80 text-center' required maxLength={"2"}/>
    </div>
  )
}
