import React from "react";
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <>
      <div className="bg-[#1e1e1e] h-[90px] flex justify-between items-center font-poppin border border-red-500">
        <div className="flex justify-center items-center ml-[%] h-[90px] w-[200px] ">
          <img className=" w-[70px] h-[60px]" src="/img/logo.png" alt="logo image" />
        </div>
        <div className="text-white">
          <Link className="mx-4 hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 hover:duration-300 hover:transition "> Home</Link>
          <Link className="mx-4 hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 hover:duration-300 hover:transition ">About</Link>
          <Link className="mx-4 hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 hover:duration-300 hover:transition ">Portfolio</Link>
          <Link className="mx-4 hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 hover:duration-300 hover:transition ">Client</Link>
        </div>
        <div className="">
          <button className="flex justify-center items-center text-[13px] p-2 w-[140px] h-[40px] rounded-3xl mr-5 bg-white hover:bg-yellow-400 duration-500 transition-all "><img className="w-4 mr-2" src="/img/contact.png" alt="contact image" />Contact me </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
