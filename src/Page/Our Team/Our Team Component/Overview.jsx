import React from 'react';
import img1 from "../../../assets/img/icon (1).png";
import img2 from "../../../assets/img/icon4.png";
import img3 from "../../../assets/img/gd.png";

const statsData = [
    {
        id: 1,
        image: img1,
        count: "50+",
        label: "Courses",
        bg: "bg-[#e1fcf9]",
    },
    {
        id: 2,
        image: img2,
        count: "20+",
        label: "Mentors",
        bg: "bg-[#e1fcf9]",
    },
    {
        id: 3,
        image: img3,
        count: "150+",
        label: "Associate Employees",
        bg: "bg-[#e1fcf9]",
    },
];

const Overview = () => {
    return (
        <div className="w-11/12 mx-auto my-10 ">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {statsData.map((item) => (
                    <div
                        key={item.id}
                        className={`flex gap-10 justify-center items-center py-10 border border-gray-200 rounded-2xl ${item.bg}`}
                    >
                        <div>
                            <img className="w-20" src={item.image} alt={item.label} />
                        </div>
                        <div className="">
                            <p className="text-5xl outfit-semibold">{item.count}</p>
                            <p className={`font-semibold ${item.label.length > 10 ? 'text-xl' : 'text-2xl'}`}>
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
