import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center   bg-black py-11">
        <div className="w-[70%]  flex flex-row justify-center items-center">
          <a href="https://web.facebook.com/" target="_blank">
            <FaFacebook
              size={30}
              color="#ff0342"
              className="m-5 border-b-2 rounded-full p-2 w-[35px] h-[35px] md:w-[50px] md:h-[50px] shadow-[0px_0px_10px_#ff0342] hover:cursor-pointer hover:scale-110 duration-500 transition-all"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram
              size={30}
              color="#ff0342"
              className="m-5 border-t-2 rounded-full p-2 w-[35px] h-[35px] md:w-[50px] md:h-[50px] shadow-[0px_0px_10px_#ff0342] hover:cursor-pointer hover:scale-110 duration-500 transition-all"
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitter
              size={30}
              color="#ff0342"
              className="m-5 border-b-2 rounded-full p-2 w-[35px] h-[35px] md:w-[50px] md:h-[50px] shadow-[0px_0px_10px_#ff0342] hover:cursor-pointer hover:scale-110 duration-500 transition-all"
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube
              size={30}
              color="#ff0342"
              className="m-5 border-t-2 rounded-full p-2 w-[35px] h-[35px] md:w-[50px] md:h-[50px] shadow-[0px_0px_10px_#ff0342] hover:cursor-pointer hover:scale-110 duration-500 transition-all"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialIcon;
