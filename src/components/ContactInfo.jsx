import React from "react";
import { ICFacebook, ICLinkedIn, ICTwitter, ICYoutube } from "../assets";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-dark w-full h-[74px] flex items-center text-white justify-center p-2 fixed top-0 z-30 ">
        <div className="w-full max-w-[1360px] h-full flex justify-between items-center">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-start gap-5 divide-x-1 sm:flex-row ">
            <span className="flex gap-1 ">
              <b className="font-poppins">Call:</b>
              <p>+9412345678</p>
            </span>
            <div className="hidden sm:block h-6 w-[1px] bg-neutral-300"></div>
            <span className="flex gap-1 ">
              <b className="font-poppins">Email:</b>
              <p>ipetsrilanka@gmail.com</p>
            </span>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex gap-4 sm:gap-8">
            <ICFacebook className="text-2xl text-white" />
            <ICTwitter className="text-2xl text-white" />
            <ICLinkedIn className="text-2xl text-white" />
            <ICYoutube className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
