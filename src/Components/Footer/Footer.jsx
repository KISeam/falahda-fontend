import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import logo from "../../assets/img/logo.png"
import pay from "../../assets/img/pay_with.png"

const Footer = () => {
  return (
    <>
      <div className="bg-white border-t border-gray-300">
        <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="py-4 md:py-6 border-b border-gray-300">
              <img src={pay} alt="" />
            </div>
            <div className="py-4 md:py-6 border-b border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
              <div className="flex flex-col items-center md:items-start justify-center gap-4">
                <div className="flex items-center justify-center w-30 md:w-40">
                  <img
                    src={ logo }
                    alt=""
                  />
                </div>
                <p className="font-montserrat text-xs md:text-sm text-gray-500 md:text-left">
                  Bdcalling Academy is a leading online learning platform in
                  Bangladesh, offering a wide range of courses to help you
                  enhance your skills and knowledge.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-blue-600 hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <FaFacebook className="text-xl" />
                  </div>
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <FaSquareXTwitter className="text-xl" />
                  </div>
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-blue-600 hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-red-600 hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <FaYoutube className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="flex items-center md:items-start justify-center md:justify-between gap-20 lg:gap-0">
                <div className="flex flex-col gap-2">
                  <h2 className="font-montserrat text-sm text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                    Quick Links
                  </h2>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      About Us
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Contact Us
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Success Story
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Mentors
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Team
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Refund Policy
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-montserrat text-sm text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                    Course Categories
                  </h2>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Multimedia
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Web Technology
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Networking & Server
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Software Development
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Programming
                    </p>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      Database
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  gap-2">
                <h2 className="font-montserrat text-sm text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                  Contact Info
                </h2>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                      <IoCallOutline className="text-xl" />
                    </div>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      +88 01321231802
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                      <MdOutlineMailOutline className="text-xl" />
                    </div>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-nowrap"
                    >
                      info@bdcallingacademy.com
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                      <IoLocationOutline className="text-xl" />
                    </div>
                    <p
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300 text-left"
                    >
                      Daisy Garden, House 14, Block A, Banasree, main road,
                      Dhaka-1219
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <p className="font-montserrat text-sm md:text-base text-gray-800 text-center pb-4 md:pb-6">
              Copyright &copy; 2025 Bdcalling Academy. All Rights Reserved.{" "}
              <span
                className="text-xs md:text-sm text-gray-500 hover:text-[#F79952] ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 
after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 relative pb-1 transition-all duration-300"
              >
                Trade License - TRAD/DNCC/032933/2023
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
