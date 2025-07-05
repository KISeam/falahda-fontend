import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { FcCollaboration, FcTemplate, FcSettings, FcGlobe } from "react-icons/fc";

const WhatWeProvide = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="font-extrabold relative z-40 leading-tight text-center text-4xl md:text-5xl lg:text-6xl mb-6 outfit-semibold cpr">
            What We <span className="crd relative inline-block">
              Provide
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#00ddb3]/30 -z-10 transform -translate-y-1/2"></span>
            </span>
          </h1>
          
          <SectionHeading
            description={
              "At Falah Web Solution, we don't just build websites—we build long-term partnerships by offering services that drive growth, support, and satisfaction."
            }
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="px-6 py-8 bg-[#f0fdfc] rounded-xl cursor-pointer
            transition-all duration-500 ease-in-out 
            hover:scale-[1.02] hover:shadow-xl border border-[#e0f7f5] hover:border-[#c4f0ec]
            relative overflow-hidden group">
            
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
              <FcTemplate className="text-7xl" />
            </div>
            
            <div className="relative z-10">
              <div className="bg-white p-3 rounded-full inline-flex items-center justify-center mb-6">
                <FcTemplate className="text-4xl" />
              </div>
              
              <h2 className="outfit-semibold my-4 text-xl font-bold text-gray-900 flex items-center">
                Custom Website Development <span className="ml-2 text-2xl">💻</span>
              </h2>
              
              <p className="work crd text-base leading-relaxed line-clamp-5">
                We specialize in building responsive, high-performing websites tailored to your business needs. Whether it's a portfolio, e-commerce site, or business page—we craft experiences that represent your brand effectively online.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-6 py-8 bg-[#fafaee] rounded-xl cursor-pointer
            transition-all duration-500 ease-in-out 
            hover:scale-[1.02] hover:shadow-xl border border-[#f3f3d6] hover:border-[#e8e8c4]
            relative overflow-hidden group">
            
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
              <FcSettings className="text-7xl" />
            </div>
            
            <div className="relative z-10">
              <div className="bg-white p-3 rounded-full inline-flex items-center justify-center mb-6">
                <FcSettings className="text-4xl" />
              </div>
              
              <h2 className="outfit-semibold my-4 text-xl font-bold text-gray-900 flex items-center">
                Ongoing Technical Support <span className="ml-2 text-2xl">🛠️</span>
              </h2>
              
              <p className="work crd text-base leading-relaxed line-clamp-5">
                Our relationship doesn't end after delivering your website. We offer reliable maintenance and technical support to ensure your site runs smoothly, stays secure, and remains up-to-date with evolving technology.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-6 py-8 bg-[#ecfcfb] rounded-xl cursor-pointer
            transition-all duration-500 ease-in-out 
            hover:scale-[1.02] hover:shadow-xl border border-[#d7f7f6] hover:border-[#bcf1ef]
            relative overflow-hidden group">
            
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
              <FcGlobe className="text-7xl" />
            </div>
            
            <div className="relative z-10">
              <div className="bg-white p-3 rounded-full inline-flex items-center justify-center mb-6">
                <FcGlobe className="text-4xl" />
              </div>
              
              <h2 className="outfit-semibold my-4 text-xl font-bold text-gray-900 flex items-center">
                Domain & Hosting Assistance <span className="ml-2 text-2xl">🌐</span>
              </h2>
              
              <p className="work crd text-base leading-relaxed line-clamp-5">
                From selecting the perfect domain to setting up your hosting environment, we guide you through every step. Let us handle the technicalities so you can focus on growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;