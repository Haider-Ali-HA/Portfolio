import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className="h-full w-full flex flex-col justify-center items-center bg-black"
      >
        <h1 className="text-3xl md:text-4xl font-bold mt-[10px] mb-6 text-white">
          Contact Me
        </h1>
        <input
          className=" text-[13px] md:text-[15px] text-white bg-[#1c1e1f] outline-none p-4 m-4 rounded-lg h-[30px] md:h-[60px] w-[70%] md:w-[50%]"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className=" text-[13px] md:text-[15px] text-white bg-[#1c1e1f] outline-none p-4 m-1 rounded-lg h-[30px] md:h-[60px] w-[70%] md:w-[50%]"
          type="email"
          placeholder="Your Email"
          required
        />
        <input
          className=" text-[13px] md:text-[15px] text-white bg-[#1c1e1f] outline-none p-4 m-4 rounded-lg h-[90px] md:h-[120px] w-[70%] md:w-[50%] inline-block align-baseline"
          type="text"
          placeholder="Your Message"
          required
        />
        <button className="flex items-center justify-center w-[80px] h-[30px] md:w-[150px] md:h-[50px] p-4 bg-[#ff0342] rounded-lg md:my-11 font-bold text-white text-[13px] md:text-[15px] hover:bg-white  hover:text-black duration-500 ">
          Submit
        </button>
      </div>
    </>
  );
};

export default Contact;
