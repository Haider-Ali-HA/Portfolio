import React from "react";
import { GoHorizontalRule } from "react-icons/go";
import { MdSms } from "react-icons/md";
const Intro = () => {
  return (
    <>
      <div className="flex justify-center relative  items-center px-9 bg-[#000000] h-[550px] vsm:h-[700px] border border-red-700">
        <div className="absolute left-5 top-[220px] vsm:top-[250px]  sm:left-20 right-5 sm:right-20 z-50 flex flex-col font-poppin">
          <div className="flex items-center  w-[100%] my-3">
            <span>
              <GoHorizontalRule className="text-3xl text-white" />
            </span>
            <h1 className="mx-3 md:text-1xl text-white">Hello</h1>
          </div>
          <div className="w-[100%] ">
            <h1 className="font-bold text-white text-4xl  sm:text-4xl md:text-5xl">
              I'm <span className="text-[#ff0342]">Haider</span> Ali
            </h1>
          </div>
          <div className="vsm:my-5 py-4 w-[100%]  ">
            <h1 className="my-1 md:text-1xl text-white">
              I am a skilled and passionate frontend developer with expereince{" "}
              <br />
              in creating visually appealing and user-friendly websites.
            </h1>
          </div>
          <button className="flex justify-center items-center text-[13px] p-2 w-[140px] h-[40px] rounded-3xl mr-5 bg-white text-black hover:bg-yellow-400 duration-500 transition-all ">
            <MdSms className="mx-2" />
            <h1>Hire me</h1>
          </button>
        </div>
        <div className="absolute flex top-[90px]   justify-end  right-0 sm:right-10 h-[85%]  w-[650px] ">
      
          <img
            className="hidden vsm:block  mt-6 w-[50%] h-[60%] vsm:w-[80%] vsm:h-[96%]    "
            src="/img/men2.png"
            alt="men image"
          />
          <img
            className="block vsm:hidden mt-4  w-[39%] h-[95%] " src="/img/men1.png"
            alt="men image"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
