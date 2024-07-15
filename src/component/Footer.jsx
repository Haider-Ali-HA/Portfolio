import React from "react";
import { LiaCopyright } from "react-icons/lia";
const Footer = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center w-full py-4 bg-[#1c1e1f] text-white text-[13px] md:text-[15px]">
        <LiaCopyright />
        <p className="px-2">{new Date().getFullYear()} Portfolio All Right Reserved</p>
      </div>
    </>
  );
};

export default Footer;
