import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const WebCard = ({ id, title, category, type, image, fee, rating }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-4 p-4 border border-gray-200 rounded-xl shadow-md bg-white transition-transform duration-500 hover:shadow-lg hover:scale-[1.01]">
      {/* Left Side Image */}
      <div className="  h-52 overflow-hidden rounded-lg">
        <img
          src={image}
          alt="thumbnail"
          className="w-96 object-cover rounded-lg"
        />
      </div>

      {/* Right Side Content */}
      <div className=" md:w-1/2 space-y-3 text-left">
        {/* Category and Type */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <BiCategory />
            <span>{category}</span>
          </div>
          <span className="bg-[#F79952] text-white text-[13px] px-2 py-1 rounded">
            {type}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        {/* Fee and Rating */}
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-gray-800">
            Course Fee: {fee}
          </p>
          <div className="rating text-sm">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${id}`}
                className="mask mask-star-2 bg-orange-400 w-5"
                aria-label={`${i + 1} star`}
                defaultChecked={i + 1 === rating}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <Link
            to={`${id}`}
            className="flex items-center gap-2 bg-[#41bfb8] text-white px-4 py-2 rounded-md hover:bg-[#36a8a1] transition"
          >
            <LuBookOpenCheck />
            <span className="text-sm">Course Details</span>
          </Link>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `আমি "${title}" কোর্সটি করতে চাই।`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#41bfb8] text-[#41bfb8] px-4 py-2 rounded-md hover:bg-[#e0f7f5] transition"
          >
            <FaWhatsapp className="text-lg" />
            <span className="text-sm">Get Course</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebCard;
