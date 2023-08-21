import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const SocialIcon = () => {
  return (
    <>
    <div className="h-full w-full flex justify-center items-center   bg-black py-11">
<div className='w-[70%]  flex flex-wrap flex-row justify-center items-center'>

    <FaFacebook size={30} color='#ff0342' className='m-5 border-b-2 rounded-full p-2 w-[50px] h-[50px] shadow-[0px_0px_10px_#ff0342] hover:scale-110 duration-500 transition-all' />
    <FaInstagram size={30} color='#ff0342' className='m-5 border-t-2 rounded-full p-2 w-[50px] h-[50px] shadow-[0px_0px_10px_#ff0342] hover:scale-110 duration-500 transition-all' />
    <FaTwitter size={30} color='#ff0342' className='m-5 border-b-2 rounded-full p-2 w-[50px] h-[50px] shadow-[0px_0px_10px_#ff0342] hover:scale-110 duration-500 transition-all' />
    <FaYoutube size={30} color='#ff0342' className='m-5 border-t-2 rounded-full p-2 w-[50px] h-[50px] shadow-[0px_0px_10px_#ff0342] hover:scale-110 duration-500 transition-all' />
</div>
    </div>
      
    </>
  )
}

export default SocialIcon
