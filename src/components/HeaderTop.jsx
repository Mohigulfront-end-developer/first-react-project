import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HeaderTop = () => {
  return (
    <div className='header-top bg-[#FF9500] py-[14px] mx-[30px] rounded-lg mt-[20px]'>
        <div className="mx-auto  flex gap-3 justify-center items-center ">
            <p className='text-[white] '>Free Courses 🌟 Sale Ends Soon, Get It Now  </p> <FaArrowRight className='text-[white]'/>
        </div>
    </div>
  )
}

export default HeaderTop;