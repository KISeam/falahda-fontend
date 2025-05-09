import React from 'react';
import hero1 from "../../../assets/img/aboutpage/1.jpg"
import hero2 from "../../../assets/img/aboutpage/hero2.jpg"
import hero3 from "../../../assets/img/aboutpage/hero3.jpg"

const AboutHero = () => {
    return (
        <div className='pt-10 bg-[#ecfcfb] '>
            <div className='mx-auto w-9/12'>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="overflow-hidden ">
                            <div className='h-full w-full'>
                                <img className="rounded-lg border border-gray-200 h-full w-[700px]" src={hero1} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-rows-1 md:grid-rows-2 gap-6 md:gap-4">
                            <div className="overflow-hidden rounded-lg">
                                <img className="rounded-lg border-gray-200 " src={hero2} alt="" />
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <img className="rounded-lg  border-gray-200" src={hero3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl font-bold text-gray-700">
                                Who We <span className="cpr">Are?</span>
                            </h2>
                            <p className="text-lg font-semibold csd uppercase">
                                We’re here to serve only the best products for you. Enriching
                                your homes with the best essentials.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-[#414042]">
                            <p>
                                BDCalling Academy is an innovative IT and freelancing training center that focuses on empowering individuals with the skills required to thrive in today’s rapidly evolving digital landscape. Our expertise spans across IT fields such as web development, software development, networking, security, database, multimedia, programming and freelancing. We offer flexible courses designed for students,. As pared and digital Bangladesh, meeting the nation’s growing demand for expertise in information technology.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                                possimus nihil itaque dolorem quasi quia alias? Nulla similique
                                exercitationem hic!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                                ullam incidunt, molestias cupiditate doloremque natus ab et
                                veniam dolores totam minus. Beatae nihil ex expedita, dolorum
                                tempore aperiam rerum at iste id praesentium eos dicta esse
                                iusto fugit cum dignissimos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;