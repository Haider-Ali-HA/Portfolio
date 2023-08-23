import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdSms } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

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
        <div className="flex justify-center items-center font-Lobster text-2xl vsm:ml-0 h-[90px] w-[200px] text-white ">
          <h1>Portfolio</h1>
        </div>
        <div className="hidden md:block text-white">
          <Link
            activeClass="active"
            to="Intro"
            spy={true}
            smooth={true}
            offset={-100}
            className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition "
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="Skilled"
            spy={true}
            smooth={true}
            offset={-100}
            className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="Project"
            spy={true}
            smooth={true}
            offset={-100}
            className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
          >
            Project
          </Link>
          <Link
            activeClass="active"
            to="Clients"
            spy={true}
            smooth={true}
            offset={-100}
            className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
          >
            Client
          </Link>
        </div>
        <div className="hidden md:block">
          <Link  
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}><button
            
            className="flex justify-center items-center text-[14px] p-2 w-[140px] h-[40px] font-bold rounded-lg mr-5 bg-white text-black border hover:border-[#ff0342] hover:bg-[#ff0342] hover:text-black duration-500 transition-all "
          >
            <MdSms size={18} className="mr-2" />
            <h1>Contact me</h1>
          </button>
          </Link>
        </div>

        <div
          onClick={handleClick}
          className=" block md:hidden text-white  mr-10 hover:cursor-pointer "
        >
          {!click ? (
            <GiHamburgerMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>

        {/* responsive navbar */}
        <div
          className={
            click
              ? ` block z-30 md:hidden fixed top-[-250px] w-[100%] border-b border-r-white h-[270px] bg-black ${
                  click ? "translate-y-full" : "translate-y-0"
                }  duration-500 transition ease-out `
              : "fixed left-[-100%]  "
          }
        >
          <div
            className={`flex justify-between text-2xl font-Lobster items-center ml-[%] h-[90px] w-full text-white   `}
          >
            <h1 className="ml-9">Portfolio</h1>
            <div
              onClick={handleClick}
              className="block md:hidden text-white  mr-10 hover:cursor-pointer "
            >
              {!click ? (
                <GiHamburgerMenu size={20} />
              ) : (
                <AiOutlineClose size={20} />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center w-full flex-col text-white">
            <Link
              activeClass="active"
              to="Intro"
              spy={true}
              smooth={true}
              offset={-100}
              className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="Skilled"
              spy={true}
              smooth={true}
              offset={-100}
              className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="Project"
              spy={true}
              smooth={true}
              offset={-100}
              className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
            >
              Project
            </Link>
            <Link
              activeClass="active"
              to="Clients"
              spy={true}
              smooth={true}
              offset={-100}
              className="mx-4 border-[#ff0342] hover:border-[#ff0342] hover:border-b-2 hover:duration-300 hover:transition  "
            >
              Client
            </Link>
            <Link
             
             to="Contact"
             spy={true}
             smooth={true}
             offset={-20}>
            <button
              
              className="flex justify-center items-center text-[10px] p-2 my-5 w-[100px] h-[40px] md:w-[140px] md:h-[40px] rounded-lg  bg-white text-black border-t-2 border-b-2 border-white hover:border-b-white hover:border-t-white hover:bg-transparent hover:text-white duration-500 transition-all"
              >
              <MdSms className="mr-2" />
              <h1>Contact me</h1>
            </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
