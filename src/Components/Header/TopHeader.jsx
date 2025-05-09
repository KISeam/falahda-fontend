import React from 'react';
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';
const TopHeader = () => {
    return (
        <div className=' bg-[#e6eded] work hidden lg:block'>
            <div className='w-full sm:w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto'>
                <div className=' flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex items-center gap-5 py-2 '>
                        <div className='flex gap-1 items-center  pr-4 '>
                            <IoMdCall className='text-[20px] cpr ' />
                            <p className='text-[15px] dark:text-black/70'>01753924093</p>
                        </div>
                        <div className='flex gap-2  text-[20px] items-center'>
                            <IoMailOutline className='text-xl  cpr' />
                            <p className='text-[15px] dark:text-black/70'>sakkib0081@gmail.com</p>
                        </div>

                    </div>
                    <div>
                        <div className='flex gap-12 items-center'>
                            <div className='flex gap-6 text-[20px] text-gray-700 items-start'>
                              <a href="https://www.facebook.com/sakibtechdev" target='_blank'>  < SlSocialFacebook /></a>
                                < SlSocialLinkedin />
                                < FaInstagram className='transform translate-y-[2px]' />
                                < FiTwitter className='transform translate-y-[2px]' />

                            </div>
                            <div className='flex gap-4 text-[15px]'>
                                <Link to="/login"> <p className='border-r border-gray-400 pr-3 dark:text-black/70'>Login</p></Link>
                                <Link to="/signup">   <p className='dark:text-black/70'>Register</p></Link>
                               
                              
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopHeader;