import React from "react";

const Clients = () => {
  return (
    <>
      <div
        id="Clients"
        className="h-full w-full flex flex-col justify-center items-center bg-black"
      >
        <div className="flex flex-col justify-center items-center text-white w-[89%] md:w-full">
          <h1 className="text-3xl md:text-4xl font-bold mt-[101px] mb-6">
            My Clients
          </h1>
          <p className="text-center text-[13px] md:text-[16px] ">
            <span>
              I have had the oppurtunity to work with a diverse group of
              companies. Some of the notable
            </span>
            <br />
            <span>companies I have worked with include</span>
          </p>
        </div>
        <div className="flex flex-wrap  justify-center items-center w-[80%] my-16">
          <img
            className="w-[80px] sm:w-[100px] md:w-[150px] m-3 border-b-2 bg-white border-[#ff0342] p-2 md:p-4 shadow-[2px_3px_10px_#ff0342] hover:scale-110 transition-all duration-500"
            src="/img/facebook.png"
            alt="facebook image"
          />
          <img
            className="w-[80px] sm:w-[100px] md:w-[150px] m-3 border-b-2 bg-white border-[#ff0342] p-2 md:p-4 shadow-[2px_3px_10px_#ff0342] hover:scale-110 transition-all duration-500"
            src="/img/microsoft.png"
            alt="microsoft image"
          />
          <img
            className="w-[80px] sm:w-[100px] md:w-[150px] m-3 border-b-2 bg-white border-[#ff0342] p-2 md:p-4 shadow-[2px_3px_10px_#ff0342] hover:scale-110 transition-all duration-500"
            src="/img/adobe.png"
            alt="adobe image"
          />
          <img
            className="w-[80px] sm:w-[100px] md:w-[150px] m-3 border-b-2 bg-white border-[#ff0342] p-2 md:p-4 shadow-[2px_3px_10px_#ff0342] hover:scale-110 transition-all duration-500"
            src="/img/amazon.png"
            alt="amazon image"
          />
        </div>
      </div>
    </>
  );
};

export default Clients;
