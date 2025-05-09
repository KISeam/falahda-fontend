import React, { useState, useEffect } from "react";
import { IoMdCall } from "react-icons/io";
import { LuBookOpenCheck } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import useCourses from "../../../Hooks/useCourses";

const PopularCourseCard = () => {

  const [courseCategorys, setCourseCategorys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);


  const {courses} = useCourses()

  useEffect(() => {
    fetch("/Course-Data/CourseCategorys.json")
      .then((res) => res.json())
      .then((data) => setCourseCategorys(data));
  }, []);

  // Adjust visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleItems(1); // Show 1 item on mobile
      } else {
        setVisibleItems(3); // Show 3 items on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on the current screen width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses?.filter((course) => course.category === selectedCategory);

  const visibleCourses = filteredCourses.slice(
    startIndex,
    startIndex + visibleItems
  );

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  return (
    <div className="relative mx-auto mt-12 w-full  ">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 pl-6 pb-8 pr-6">
        {courseCategorys.map((cat, idx) => (
          <label
            key={idx}
            className={`fieldset-label btn rounded-md dark:border-gray-300 dark:shadow-none ${selectedCategory === (cat.name || cat)
                ? "bg-[#41bfb8] text-white"
                : "bg-[#ecfcfb] dark:text-gray-500"
              }`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </label>
        ))}
      </div>

      {/* Course Cards Wrapper */}
      <div className="flex items-center justify-center relative">
        {/* Arrow Buttons */}
        <button
          onClick={handlePrev}
          className="absolute cursor-pointer md:left-0  -left-4 lg:left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white transition duration-500"
        >
          <FaChevronLeft className="cpr" size={18} />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-4 lg:right-10  cursor-pointer top-1/2 transform -translate-y-1/2 z-10 bg-white  shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white border border-gray-300 transition duration-500"
        >
          <FaChevronRight className="cpr" size={18} />
        </button>

        {/* Course Cards */}
        <div className="flex flex-wrap gap-8 justify-center transition-all duration-700 ease-in-out  md:px-12 ">
          {visibleCourses.map((course) => (
            <div
              key={course.id}
              className="relative md:w-[380px] h-[430px] bg-transparent cursor-pointer  transition-transform duration-700 ease-in-out hover:scale-[1.03] hover:shadow-xl group perspective rounded-xl"
            >
              <div className="rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
                <div className="relative h-52 w-[full] overflow-hidden rounded-xl">
                  <img
                    src={course.image}
                    alt="thumbnail"
                    className="h-full w-full rounded-xl object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-1 text-left pl-4">
                  <div className="flex justify-between pr-8">
                    <div className="flex items-center gap-1">
                      <BiCategory />
                      <p className="text-[13px] work">{course.category}</p>
                    </div>
                    <p className="bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]">
                      {course.type}
                    </p>
                  </div>

                  <h2 className="text-[22px] font-bold w-10/12 h-17 outfit-semibold csd">
                    {course.title}
                  </h2>

                  <div className="flex justify-between pr-8 items-center">
                    <p className="text-lg font-semibold text-gray-800 work">
                      Course Fee {course.fee}
                    </p>
                    <div className="rating text-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${course.id}`}
                          className="mask mask-star-2 bg-orange-400 w-5"
                          aria-label={`${i + 1} star`}
                          defaultChecked={i + 1 === course.rating}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex  justify-between items-center mt-2 pl-4 mb-2 gap-2 md:gap-0">
                  <Link
                    to={`/courses/${course.id}`}
                    className="flex gap-2 text-xl items-center border  bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md"
                  >
                    <LuBookOpenCheck className="text-md font-semibold text-white" />
                    <p className="work tracking-tight text-sm md:text-[15px] text-white">
                      Course Details
                    </p>
                  </Link>
                  <a
                    href={`https://wa.me/8801321231802?text=${encodeURIComponent(
                      `আমি "${course.title}" কোর্সটি করতে চাই।`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-1 text-xl items-center border border-[#41bfb8] px-4 py-2 mr-6 rounded-md hover:bg-[#e0f7f5] cursor-pointer transition">
                    <FaWhatsapp className="text-2xl text-[#41bfb8] font-semibold" />
                      <p className="text-[#41bfb8] work text-md tracking-tight text-[15px]">
                        Get Course
                      </p>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourseCard;
