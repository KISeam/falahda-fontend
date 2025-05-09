import { useState, useEffect } from "react";
import { FaUsers, FaBuilding, FaBookOpen } from "react-icons/fa";

const iconMap = {
    FaUsers: <FaUsers />,
    FaBuilding: <FaBuilding />,
    FaBookOpen: <FaBookOpen />
};

const Mentors = () => {
    const [stats, setStats] = useState([]);


    useEffect(() => {
        fetch("/mentors.json")
            .then((res) => res.json())
            .then((data) => setStats(data.stats));
    }, []);

    return (
        <div className="py-16 bg-[#f0fdfa]">
            <div className="w-9/12 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
             
                <div className="lg:w-1/3 text-center lg:text-left space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#41bfb8]">
                        Mentors
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                        Our expert mentors have been contributing to making IT experts for the past 16 years. With their utmost dedication, we have been able to train more than 90,000 people who are currently working in several job sectors. All the mentors have the academic skills and job experience in the marketplace. They will be your guide in your journey to achieve a bright career.
                    </p>
                </div>

            
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className={`flex gap-4 bg-gray-50 p-6 border-gray-200 border-1 rounded-2xl shadow-lg text-center items-center space-x-6  transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]`}
                        >
                            <div className="text-5xl text-[#41bfb8]">
                               
                                {iconMap[stat.icon]}
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <h3 className="text-2xl font-semibold text-gray-600">{stat.title}</h3>
                                <p className="text-lg font-bold text-gray-500">{stat.number}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mentors;
