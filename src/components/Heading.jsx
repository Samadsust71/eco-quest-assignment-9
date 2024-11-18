import React from 'react'

const Heading = ({title,subTitle}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <p className='text-gray-500 md:w-[60%] text-center'>{subTitle}</p>
    </div>
  )
}

export default Heading
