import React from "react";
import {Link} from "react-scroll";
import { MdSms  } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-10 w-full bg-[#000300] h-[90px] flex justify-between items-center font-poppin border border-red-500">
        <div className="flex justify-center items-center ml-[%] h-[90px] w-[200px] text-white ">
          <h1>Logo</h1>
        </div>
        <div className="hidden md:block text-[#ff0342]">
          <Link className="mx-4 hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 hover:duration-300 hover:transition "> Home</Link>
          <Link className="mx-4 text-white hover:text-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">About</Link>
          <Link className="mx-4 text-white hover:text-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">Portfolio</Link>
          <Link className="mx-4 text-white hover:text-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">Client</Link>
        </div>
        <div className="">
        <button className="flex justify-center items-center text-[13px] p-2 w-[140px] h-[40px] rounded-3xl mr-5 bg-white text-black hover:bg-yellow-400 duration-500 transition-all ">
           
           <MdSms className="mx-2" />
           <h1>Contact me</h1>
         </button> </div>
      </div>
    </>
  );
};

export default Navbar;
