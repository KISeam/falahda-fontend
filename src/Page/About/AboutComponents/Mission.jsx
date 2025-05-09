import React from "react";

const Mission = () => {
    return (
        <div className="bg-[#ecfcfb] py-16">
            <div className="w-9/12 mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
         
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#41bfb8]">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        To be the leading IT training platform, equipping individuals with the tools and knowledge to drive innovation and success in the global tech industry.
                        To provide employment opportunities for over 5,000 individuals by 2030, contributing significantly to the dream of Digital Bangladesh and reducing the nation's unemployment rate.
                    </p>

                </div>

               
                <div className="lg:w-1/2">
                    <img
                        src="/assets/img/mission.png"
                        alt="Our Mission"
                        className="w-full h-auto rounded-lg  object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Mission;
