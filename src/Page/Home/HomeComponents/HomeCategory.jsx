import { FaOpencart } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import { BsPersonLinesFill } from "react-icons/bs";

import { FaRegChartBar } from "react-icons/fa";
const HomeCategory = () => {

  const categories = [
    {
      icon: <FaOpencart className="cpr text-6xl" />,
      title: "Website Build",
      description: "24+ Websites",
    },
    {
      icon: <BsPersonLinesFill className="cpr text-6xl" />,
      title: "Online Course",
      description: "6+ Online Courses",
    },
    {
      icon: <FaRegLightbulb className="cpr text-6xl" />,
      title: "Use Components",
      description: "200+ Components",
    },
    {
      icon: <FaRegChartBar className="cpr text-6xl" />,
      title: "Digital Marketing",
      description: "24 Websites",
    },
  ];
  
  return (
    <div className="flex justify-center font-poppins my-16 gap-8 flex-wrap">
    {categories.map((category, index) => (
      <div
        key={index}
        className="flex w-72 justify-center flex-col items-center border border-[#e6e6e6] py-9 rounded-xl"
      >
        {category.icon}
        <p className="text-2xl font-semibold mt-6 mb-2 outfit">{category.title}</p>
        <p className="text-sm" >{category.description}</p>
      </div>
    ))}
  </div>
);
};

export default HomeCategory;
