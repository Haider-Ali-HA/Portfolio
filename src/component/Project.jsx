import React from "react";

const Project = () => {
  return (
    <>
      <div id="Project" className="flex justify-center items-center flex-col h-full bg-black">
        <div className="flex justify-center items-center flex-col text-white w-full">
          <h1 className="text-4xl font-bold ">Project</h1>
          <div className=" my-5 w-[85%] text-justify text-[13px] md:text-[16px] md:text-center">
            <p className="mt-1">
            My Project design embodies simplicity and elegance, focusing on user-centric navigation and engagement. Through clean layouts,and intuitive
            </p>
            <p className="mt-1">
             UI/UX, I've curated an  Each page reflects my commitment to responsive design, ensuring accessibility across devices. 
            </p>
            <p className="mt-1">
            Explore a showcase that not only displays my work but also reflects my design philosophy.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap  mt-[40px] w-[90%] md:w-[100%]">
          <img
            className="text-white w-[200px] sm:w-[250px] md:w-[350px] rounded-xl m-3 hover:scale-110 hover:shadow-[0px_0px_10px_white] transition-all duration-500"
            src="/img/project1.png"
            alt="project1 image"
          />
          <img
            className="text-white w-[200px] sm:w-[250px] md:w-[350px] rounded-xl m-3 hover:scale-110 hover:shadow-[0px_0px_10px_white] transition-all duration-500"
            src="/img/project2.png"
            alt="project2 image"
          />
          <img
            className="text-white w-[200px] sm:w-[250px] md:w-[350px] rounded-xl m-3 hover:scale-110 hover:shadow-[0px_0px_10px_white] transition-all duration-500"
            src="/img/project3.png"
            alt="project3 image"
          />
          <img
            className="text-white w-[200px] sm:w-[250px] md:w-[350px] rounded-xl m-3 hover:scale-110 hover:shadow-[0px_0px_10px_white] transition-all duration-500"
            src="/img/project4.png"
            alt="project4 image"
          />
          <img
            className="text-white w-[200px] sm:w-[250px] md:w-[350px] rounded-xl m-3 hover:scale-110 hover:shadow-[0px_0px_10px_white] transition-all duration-500"
            src="/img/project5.png"
            alt="project5 image"
          />
          <img
            className="text-white w-[200px] sm:w-[250px] md:w-[350px] rounded-xl m-3 hover:scale-110 hover:shadow-[0px_0px_10px_white] transition-all duration-500"
            src="/img/project6.png"
            alt="project6 image"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
