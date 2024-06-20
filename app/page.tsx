import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className=' flex items-center justify-evenly flex-row gap-5 h-screen'>
      <div className='flex flex-col items-center justify-center gap-4 h-[200px] w-[400px] bg-red-500 rounded-md text-white p-3'>
        <span className='text-3xl font-bold'>46°C</span>
        <span className='text-lg font-normal'>Kochi</span>
        <span>Kerala</span>
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex items-center justify-center h-[200px] w-[400px] bg-red-500 rounded-md  text-white p-3'>Weather Forecast</div>
        <div className='flex items-center justify-center h-[200px] w-[400px] bg-red-500 rounded-md  text-white p-3'>Experience the dynamic weather of Kochi! From sunny days perfect for exploring to occasional rain showers that refresh the air, Kochi offers a diverse climate year-round. Stay prepared with up-to-the-minute forecasts, and enjoy all the seasonal beauty this vibrant city has to offer</div>
      </div >

    </div >
  )
}

export default Page