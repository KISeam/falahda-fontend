import React from 'react';
import { CgWebsite } from "react-icons/cg";


const Section = () => {
    return (
        <div>
            <div className='container items-center flex flex-col lg:flex-row justify-center  mx-auto gap-44 lg:h-[40vw]'>
                <div className=' relative'>
                    <img className='rounded-md' src="https://wp2023.kodesolution.com/amiso/wp-content/uploads/2022/12/p2-400x532.jpg" alt="" />
                    <div className='lg:absolute -bottom-20 -right-20'>
                        <img className='rounded-md'  src="https://wp2023.kodesolution.com/amiso/wp-content/uploads/2024/01/about2h4.jpg" alt="" />
                    </div>
                </div>

                <div className='w-5/12'>
                    <div >
                        <p >Welcome to Agency</p>
                        <h1 className='text-5xl outfit my-5 crd'>
                            <span className='cpr'> NSDA Certified</span > Experienced Designers & Developers
                        </h1>

                        <p className='crd'>System is a term used to refer to an organized collection symbols and
                            processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa. Lorem ipsum dolor sit amet contetur adipi elit tempor</p>

                    </div>

                    <div className='flex justify-center mt-12'>
                        <div>
                            <CgWebsite className='text-5xl cpr' />
                            <p className='outfit text-xl crd'>Web solutions</p>
                            <p className='crd'>Web solutions duis aute irure dolor simply free in velit</p>
                        </div>
                        <div>
                            <CgWebsite className='text-5xl cpr ' />
                            <p className='outfit text-xl crd'>Web solutions</p>
                            <p className='text-red-500 crd'>Web solutions duis aute irure dolor simply free in velit</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section;