import React, { useEffect, useState } from 'react';
import OurManagementCard from './OurManagementCard';

const OurManagement = () => {
    const [managements,setManagement] = useState([])
    useEffect(()=>{
        fetch('ManagementTeam.json')
        .then(res=>res.json())
        .then(data => setManagement(data))
    },[])
    return (
        <div className="lg:p-4 lg:w-11/12 w-/12 mx-auto work">
            <div className="bg-white rounded-lg shadow-md p-6 border border-[#41bfb962]">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex justify-center items-center">
                        <img
                            className="w-65 h-80 object-cover rounded-lg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSse1HbwPCSECJid8tC8F22X5JNv1MvDnVxQFr299nyUhkZuE2-ILEgVXobyNbUKn7ckZc&usqp=CAU"
                            alt="Muhammad Monir Hossain"
                        />
                    </div>

                    <div className="flex-grow">
                        <div className="mb-4">
                            <h1 className="lg:text-3xl text-2xl font-bold">Muhammad Monir Hossain</h1>
                            <h4 className="text-lg csd outfit-semibold">CEO & Founder</h4>
                        </div>

                        <div className="grid lg:grid-cols-3 grid-cols-2 border-b border-gray-300 pb-2">
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold mb-2">Specialized Area</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Graphic Design</li>
                                    <li>Brand Design</li>
                                    <li>Logo Design</li>
                                    <li>Animation</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-xl font-semibold mb-2">Education Qualification</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>MBS (Accounting)</li>
                                    <li>Diploma In Graphic Design</li>
                                    <li>Diploma In Merchandising</li>
                                    <li>CBT&A (Level 5)</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-xl font-semibold mb-2">Work Experience</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Former Trainer Bangladesh Computer Council (B.C.C)</li>
                                    <li>Guest Trainer BUTEX</li>
                                    <li>Freelancer</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <h4 className="text-lg font-semibold">Training Experience</h4>
                                <p className="text-gray-700">10 years +</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Students</h4>
                                <p className="text-gray-700">4000 +</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
                {
                     managements.map(management => ( <OurManagementCard management={management}></OurManagementCard> ))
                }
            </div>
        </div>
    );
};

export default OurManagement;
