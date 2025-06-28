import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import pay from "../../assets/img/pay_with.png";

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray-300">
      <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
        <div className="space-y-4 md:space-y-6">
          <div className="py-4 md:py-6 border-b border-gray-300">
            <img src={pay} alt="Payment Methods" />
          </div>

          <div className="py-4 md:py-6 border-b border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
            {/* Logo and About */}
            <div className="flex flex-col items-center md:items-start justify-center gap-4">
              <h1
                className="font-bold leading-tight"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #00DDB3",
                  fontSize: "2rem",
                }}
              >
                <span className="text-[2rem] relative z-40 outfit">FALAH</span>
              </h1>
              <p className="font-montserrat text-xs md:text-sm text-gray-500 md:text-left">
                FALAH is a modern learning platform offering skill development programs and resources for personal and professional growth.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-blue-600 hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                  <FaFacebook className="text-xl" />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                  <FaSquareXTwitter className="text-xl" />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-blue-600 hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-red-600 hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                  <FaYoutube className="text-xl" />
                </div>
              </div>
            </div>

            {/* Quick Links & Categories */}
            <div className="flex items-center md:items-start justify-center md:justify-between gap-20 lg:gap-0">
              <div className="flex flex-col gap-2">
                <h2 className="font-montserrat text-sm text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                  Quick Links
                </h2>
                <div className="flex flex-col items-start gap-1">
                  {["About Us", "Contact Us", "Success Story", "Mentors", "Team", "Refund Policy"].map((link, idx) => (
                    <p
                      key={idx}
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] cursor-pointer relative pb-1 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-montserrat text-sm text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                  Course Categories
                </h2>
                <div className="flex flex-col items-start gap-1">
                  {["Multimedia", "Web Technology", "Networking & Server", "Software Development", "Programming", "Database"].map((category, idx) => (
                    <p
                      key={idx}
                      className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] cursor-pointer relative pb-1 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100"
                    >
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <h2 className="font-montserrat text-sm text-gray-800 font-semibold pb-2 border-b border-gray-300 text-left">
                Contact Info
              </h2>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                    <IoCallOutline className="text-xl" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] cursor-pointer relative pb-1 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100">
                    01753924093
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                    <MdOutlineMailOutline className="text-xl" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] cursor-pointer relative pb-1 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100">
                    sakkib0081@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-lg border border-gray-300 p-2 text-black hover:bg-[#F79952] hover:text-white transition duration-300 cursor-pointer">
                    <IoLocationOutline className="text-xl" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 hover:text-[#F79952] cursor-pointer relative pb-1 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F79952] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 text-left">
                    123 Main Road, Sector 7, Uttara, Dhaka-1230
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="font-montserrat text-sm md:text-base text-gray-800 text-center pb-4 md:pb-6">
            Copyright &copy; 2025 FALAH. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
