import React from "react";

const Skilled = () => {
  return (
    <>
      <div
        id="Skilled"
        className="flex justify-center white items-center flex-col font-poppin bg-black text-white h-[1100px] md:h-[790px] w-full"
      >
        <div className="flex justify-center items-center flex-col ">
          <h1 className=" text-4xl font-extrabold">What I do</h1>
          <div className=" w-[90%] lg:w-[100%] text-[13px] md:text-[15px] text-justify md:text-center mt-9">
            <span>
              I am a seasoned web developer with a passion for crafting
              immersive digital experiences. Proficient in both front-end and
              back-end.
            </span>
            <br className="hidden md:block" />
            <span>
              Merging innovation and precision, I build web experiences that
              captivate audiences.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col  w-[90%] px-7 md:w-[69%] mt-[85px]">
          <div className="flex justify-center items-center flex-col md:flex-row md:flex  md:justify-center  p-4  w-full md:items-center my-4 rounded-xl bg-[#1c1e1f] hover:shadow-[1px_-9px_24px_#ff0342]  hover:scale-105 duration-300 ">
            <img className="w-[100px] " src="/img/ux.png" alt="ui/ux image" />
            <div className="flex justify-center items-center md:flex md:items-start flex-col  ml-4 w-full">
              <h1 className="md:text-xl font-bold">UI/UX Design</h1>
              <p className="text-[13px] md:text-sm  text-center">
                Designing intuitive interfaces for exceptional user experiences
                and visual aesthetics.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col md:justify-center md:flex-row md:flex w-full md:items-center p-4 my-4 rounded-xl bg-[#1c1e1f] hover:shadow-[1px_1px_24px_#ff0342]  hover:scale-105 duration-300  ">
            <img
              className="w-[100px] "
              src="/img/web.png"
              alt="frontend image"
            />
            <div className="flex justify-center items-center md:flex md:items-start flex-col  ml-4 w-full">
              <h1 className="md:text-xl font-bold">Frontend Developer</h1>
              <p className="text-[13px] md:text-sm text-center">
                Crafting user-centric interfaces with HTML, CSS, and JavaScript
                expertise.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col md:flex-row md:flex md:justify-center  p-4 w-full md:items-center my-4 rounded-xl bg-[#1c1e1f] hover:shadow-[1px_9px_24px_#ff0342]  hover:scale-105 duration-300 ">
            <img
              className="w-[100px] "
              src="/img/responsive.png"
              alt="responsive image"
            />
            <div className="flex justify-center items-center md:flex md:items-start flex-col ml-4 w-full">
              <h1 className="md:text-xl font-bold">Responsive Design</h1>
              <p className="text-[13px] md:text-sm text-center">
                Creating adaptive layouts for seamless experiences across
                diverse devices and screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skilled;
