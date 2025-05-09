import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineWatchLater } from 'react-icons/md';

const Address = () => {
    return (
        <div>
            <div className="w-10/12 lg:w-full mx-auto mt-10 border border-gray-300 rounded-2xl shadow p-13">
                <div className="mb-5 lg:mb-12">
                    <h1 className='text-4xl font-extrabold mb-3'>Office Information</h1>
                    <p className='text-sm text-gray-500'>Completely recapitalize 24/7 communities via standards compliant metrics whereas.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6 group pb-6 border-b border-gray-300">
                        <div className="border border-gray-300 rounded-xl duration-300 group-hover:bg-[#41bfb8] group-hover:text-white  flex justify-center p-3 text-center">
                            <FaPhoneAlt className='text-2xl' />
                        </div>
                        <div className=" ">
                            <h1 className='font-semibold text-lg'>Phone Number & Email</h1>
                            <h4>+88 01321231802</h4>
                            <h4>info@bdcallingacademy.com</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 group pb-6 border-b border-gray-300">
                        <div className="border border-gray-300 rounded-xl duration-300 group-hover:bg-[#41bfb8] group-hover:text-white  flex justify-center p-3 text-center">
                            <FaLocationDot className='text-2xl' />
                        </div>
                        <div className=" ">
                            <h1 className='font-semibold text-lg'>Our Office Address</h1>
                            <h4>Daisy Garden, House 14,Block A, Banasree, main road, Dhaka-1219</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                        <div className="border border-gray-300 rounded-xl duration-300 group-hover:bg-[#41bfb8] group-hover:text-white  flex justify-center p-3 text-center">
                            <MdOutlineWatchLater className='text-2xl' />
                        </div>
                        <div className=" ">
                            <h1 className='font-semibold text-lg'>Official Work Time</h1>
                            <h4>Saturday- Friday 9:00 am to 6:00 pm</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;