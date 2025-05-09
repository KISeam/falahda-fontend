import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { FcCollaboration } from "react-icons/fc";

const WhatWeProvide = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-1 my-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="font-extrabold relative z-40 leading-tight text-center text-[3.5rem] cpr outfit-semibold">
          What We <span className="crd"> Provide </span>
        </h1>
        <SectionHeading

          description={
            "At Falah Web Solution, we don't just build websites—we build long-term partnerships by offering services that drive growth, support, and satisfaction."
          }
        />


      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">

          {/* Card 1 */}
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#f0fdfc] rounded-2xl cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#e0f7f5]">

            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Custom Website Development 💻
            </h2>
            <p className="work crd text-sm md:text-base">
              We specialize in building responsive, high-performing websites tailored to your business needs. Whether it’s a portfolio, e-commerce site, or business page—we craft experiences that represent your brand effectively online.
            </p>
          </div>

          {/* Card 2 */}
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#fafaee] rounded-2xl cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3d6]">

            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Ongoing Technical Support 🛠️
            </h2>
            <p className="work crd text-sm md:text-base">
              Our relationship doesn’t end after delivering your website. We offer reliable maintenance and technical support to ensure your site runs smoothly, stays secure, and remains up-to-date with evolving technology.
            </p>
          </div>

          {/* Card 3 */}
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#ecfcfb] rounded-2xl cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#d7f7f6]">

            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Domain & Hosting Assistance 🌐
            </h2>
            <p className="work crd text-sm md:text-base">
              From selecting the perfect domain to setting up your hosting environment, we guide you through every step. Let us handle the technicalities so you can focus on growing your business.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
