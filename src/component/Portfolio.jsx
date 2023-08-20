import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-full bg-black">
        <div className="flex justify-center items-center flex-col text-white  mt-[50px] w-full">
          <h1 className="text-4xl font-bold ">Portfolio</h1>
          <div className=" my-5 w-[85%] text-justify text-[13px] md:text-md md:text-center">
            <p className="mt-1">
            My portfolio design embodies simplicity and elegance, focusing on user-centric navigation and engagement. Through clean layouts, harmonious color schemes, and intuitive UI/UX, I've curated an 
            </p>
            <p className="mt-1">
            immersive browsing experience. Each page reflects my commitment to responsive design, ensuring accessibility across devices. I've thoughtfully organized projects, 
            </p>
            <p className="mt-1">
            highlighting diverse skills and technologies  Explore a showcase that not only displays my work but also reflects my design philosophy.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap  mt-[40px] w-[90%] md:w-[70%]">
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-xl m-3"
            src="/img/portfolio.png"
            alt="men image"
          />
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-xl m-3"
            src="/img/portfolio1.png"
            alt="men image"
          />
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-xl m-3"
            src="/img/portfolio2.png"
            alt="men image"
          />
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-xl m-3"
            src="/img/portfolio3.png"
            alt="men image"
          />
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-xl m-3"
            src="/img/portfolio4.png"
            alt="men image"
          />
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-xl m-3"
            src="/img/portfolio5.png"
            alt="men image"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
