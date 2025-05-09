import React from 'react';

const MarketingAndOperationCard = ({ marketer }) => {
    return (
        <div>
            <div className="work">
                <div className="border border-gray-300 p-5 rounded-2xl">
                    <div className="flex items-center gap-5">
                        <img className='w-20 h-20 rounded-full' src={marketer.image} alt="" />
                        <div className="">
                            <h1 className='text-xl font-semibold'>{marketer.name}</h1>
                            <h4 className='csd'>{marketer.designation}</h4>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7 mt-5 border-b border-gray-300 pb-4">
                        <div className="">
                            <h4 className="text-xl font-semibold mb-2">Specialized Area</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {
                                    (marketer.specialized_area).map(sa=>(
                                        <li>{sa}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-xl font-semibold mb-2">Education Qualification</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {
                                    (marketer.education_qualification).map(eq=>(
                                        <li>{eq}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-xl font-semibold mb-2">Work Experience</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {
                                    (marketer.work_experience).map(we=>(
                                        <li>{we}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <h4 className="text-lg font-semibold">Training Experience</h4>
                                <p className="text-gray-700">{marketer.training_experience.years} years +</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Students</h4>
                                <p className="text-gray-700">{marketer.training_experience.students} +</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingAndOperationCard;