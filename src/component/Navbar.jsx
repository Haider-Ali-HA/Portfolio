import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdSms } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div
        className={
          color
            ? "fixed left-0 top-0 border-b border-white z-10 w-full bg-black h-[90px] flex justify-between items-center font-poppin "
            : "fixed left-0 top-0 z-10 w-full bg-transparent h-[90px] flex justify-between items-center font-poppin "
        }
      >
        <div className="flex justify-center items-center ml-[-11%] vsm:ml-0 h-[90px] w-[200px] text-white ">
          <h1>Logo</h1>
        </div>
        <div className="hidden md:block text-[#ff0342]">
          <Link className="mx-4 border-b-2 font-bold border-black hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">
            Home
          </Link>
          <Link className="mx-4 text-white border-b-2 border-black hover:border-[#ff0342] hover:border-b-2 duration-300 transition ">
            About
          </Link>
          <Link className="mx-4 text-white border-b-2 border-black hover:border-[#ff0342] hover:border-b-2 duration-300 transition ">
            Portfolio
          </Link>
          <Link className="mx-4 text-white border-b-2 border-black hover:border-[#ff0342] hover:border-b-2 duration-300 transition ">
            Client
          </Link>
        </div>
        <div className="hidden md:block">
          <button className="flex justify-center items-center text-[13px] p-2 w-[140px] h-[40px] rounded-3xl mr-5 bg-[#ff0342] text-white  hover:bg-white hover:text-black duration-500 transition-all ">
            <MdSms className="mr-2" />
            <h1>Contact me</h1>
          </button>
        </div>

        <div
          onClick={handleClick}
          className=" block md:hidden text-white  mr-10 hover:cursor-pointer "
        >
          {!click ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        {/* responsive navbar */}
        <div
          className={
            click
              ? ` block z-30 md:hidden fixed top-[-250px] w-[100%] border-b border-r-white h-[250px] bg-black ${click ?'translate-y-full':'translate-y-0'}  duration-500 transition ease-out `
              : "fixed left-[-100%]  "
          }
        >
          <div className={`flex justify-between items-center ml-[%] h-[90px] w-full text-white   `}>
            <h1 className="ml-9">Logo</h1>
          <div
          onClick={handleClick}
          className="block md:hidden text-white  mr-10 hover:cursor-pointer "
        >
          {!click ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
          </div>
          <div className="flex justify-center items-center w-full flex-col text-[#ff0342]">
            <Link className="mx-4 text-white hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 hover:duration-300 hover:transition ">
              Home
            </Link>
            <Link className="mx-4 text-white hover:text-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">
              About
            </Link>
            <Link className="mx-4 text-white hover:text-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">
              Portfolio
            </Link>
            <Link className="mx-4 text-white hover:text-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition ">
              Client
            </Link>
              <button className="flex justify-center items-center text-[13px] p-2 w-[140px] h-[40px] rounded-3xl  bg-white text-black hover:bg-yellow-400 duration-500 transition-all ">
                <MdSms className="mx-2" />
                <h1>Contact me</h1>
              </button>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
