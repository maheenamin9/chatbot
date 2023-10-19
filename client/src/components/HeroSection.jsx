import React from 'react'
import chat from '../assets/chat.png'

const HeroSection = () => {
  return (
    <div className="mx-56 h-[60vh] flex lg:flex-col justify-between lg:justify-start items-center mt-[60px] text-white">
      <div className='w-2/3 flex justify-center lg:pb-[20px]'>
        <div>
          <h1 className="text-[60px] lg:text-[42px] font-bold text-[#1f8f6d]">Assistance Center</h1>
          <h1 className="text-[40px] lg:text-[25px] font-medium">How may we assist you?</h1>
          <p className='lg:text-[9px]'>We are excited to meet you. Please feel free to reach out to us so we can provide you with the support you need.</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src={chat} alt='chat app' className='w-[77%] lg:w-full' />
      </div>
    </div>
  )
}

export default HeroSection