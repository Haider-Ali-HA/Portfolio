import React from "react";
import { GoHorizontalRule } from "react-icons/go";
import { RxArrowRight } from "react-icons/rx";

const Intro = () => {
  return (
    <>
      <div
        id="Intro"
        className="flex justify-center relative  items-center px-9 bg-[#000000] h-[550px] vsm:h-[700px] "
      >
        <div className="absolute left-5 vsm:left-11 top-[220px] vsm:top-[250px]  sm:left-12 right-5 sm:right-20 md:left-[100px] z-[1] flex flex-col font-poppin">
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
            <h1 className="my-1 text-[13px] md:text-1xl text-white">
              I am a skilled and passionate frontend developer with expereince{" "}
              <br />
              in creating visually appealing and user-friendly websites.
            </h1>
          </div>
          <button className="flex justify-center items-center text-[13px] md:text-[14px] md:font-bold p-2 w-[100px] h-[40px] md:w-[140px] md:h-[50px] rounded-lg mr-5 bg-[#ff0342] text-white hover:text-black  hover:bg-[white] duration-500 transition-all ">
            <h1>Hire me</h1>
            <RxArrowRight size={20} className="ml-2 md:mx-2" />
          </button>
        </div>
        <div className="absolute flex top-[90px] z-0   justify-end  right-0 sm:right-10 h-[85%]  w-[650px] ">
          <img
            className="hidden vsm:block  mt-6 w-[50%] h-[60%] vsm:w-[80%] vsm:h-[96%]    "
            src="/img/men2.png"
            alt="men image"
          />
          <img
            className="block vsm:hidden mt-4  w-[43%] h-[95%] "
            src="/img/men.png"
            alt="men image"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
