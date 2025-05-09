import React from 'react';

const Vision = () => {
    return (
        <div>
            <div className="bg-[#ecfcfb] py-16">
                <div className="w-9/12 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
                    <div className="lg:w-1/2">
                        <img
                            src="/assets/img/vision.png"
                            alt="Our Vision"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

     
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#41bfb8]">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We envision a future where everyone has access to top-quality education and resources
                            to excel in the tech industry. Our vision is to foster a global community of skilled professionals
                            who will lead the charge in digital transformation, enabling a sustainable and inclusive world.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Vision;