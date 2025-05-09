import React from "react";
import { FaCheck, FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdLanguage, MdLiveTv, MdWorkOutline } from "react-icons/md";
import {
  RiComputerLine,
  RiExpandLeftRightLine,
  RiLiveLine,
} from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import CourseCard from "../../../Components/CourseCard";
import { GiLevelEndFlag } from "react-icons/gi";
import sakibSirImg from "../../../assets/img/Mentors/seminar.png";
import { IoMdCall } from "react-icons/io";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";

const SingleCourseDetails = ({ course, populerCourse }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="bg-[#ecfcfb] py-8 lg:py-14 lg:pt-16 lg:pr-10 2xl:pr-4">
            <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
              <div className="w-full lg:w-4/6">
                <div className="space-y-4">
                  <h1 className="text-[#41bfb8] font-bold outfit text-3xl xl:text-5xl">
                    {course.title}
                  </h1>
                  <h4 className="crd font-medium text-base md:text-lg">
                    {course.technology}
                  </h4>

                  <div className="flex flex-wrap gap-2.5">
                    <div className="cpr flex items-center gap-0.5">
                      <span className="text-lg outfit-semibold">
                        {course.rating}
                      </span>
                      <div className="flex gap-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                    </div>

                    <p className="csd text-base lg:text-lg outfit-semibold">
                      (<span className="">{course.totalRating} </span>ratings)
                    </p>

                    <p className="text-gray-600 text-base lg:text-lg outfit-semibold">
                      {course.totalStudentsEnroll} students
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <FaRegClock className="cpr text-lg" />
                      <p className="crd outfit-semibold">18-May-2025</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MdLanguage className="cpr text-lg" />
                      <p className="crd outfit-semibold">Bangla</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GiLevelEndFlag className="cpr text-lg" />
                      <p className="crd outfit-semibold">
                        Skill Level: Basic to Advanced
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto lg:pr-10 2xl:pr-4">
            <div className="w-full lg:w-4/6">
              <div className="pb-8 lg:pb-14 space-y-10">
                <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    What you'll learn
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <div className="space-y-1.5">
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          Build 16 web development projects for your portfolio,
                          ready to apply for junior developer jobs.
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          After the course you will be able to build ANY website
                          you want.
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          Work as a freelance web developer.
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          Master backend development with Node
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          Build 16 web development projects for your portfolio,
                          ready to apply for junior developer jobs.
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          After the course you will be able to build ANY website
                          you want.
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          Work as a freelance web developer.
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        <FaCheck className="cpr text-base mt-0.5" />
                        <p className="text-md crd">
                          Master backend development with Node
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    This course includes:
                  </h2>
                  <div className="flex flex-wrap gap-x-20 gap-y-3">
                    <div className="space-y-1.5">
                      <div className="flex gap-1.5">
                        <RiLiveLine className="cpr text-base mt-0.5" />
                        <p className="text-md crd">72+ Live Class</p>
                      </div>
                      <div className="flex gap-1.5">
                        <RiExpandLeftRightLine className="cpr text-base mt-0.5" />
                        <p className="text-md crd">12+ Industrial Projects</p>
                      </div>
                      <div className="flex gap-1.5">
                        <RiComputerLine className="cpr text-base mt-0.5" />
                        <p className="text-md crd">Practice lab support</p>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex gap-1.5">
                        <MdLiveTv className="cpr text-base mt-0.5" />
                        <p className="text-md crd">Review Class</p>
                      </div>
                      <div className="flex gap-1.5">
                        <TfiCup className="cpr text-base mt-0.5" />
                        <p className="text-md crd">Certificate of completion</p>
                      </div>
                      <div className="flex gap-1.5">
                        <MdWorkOutline className="cpr text-base mt-0.5" />
                        <p className="text-md crd">Job Opportunity</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    Software You'll Learn
                  </h2>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <FaCheck className="cpr text-base" />
                      <p className="text-md crd">Node.js</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaCheck className="cpr text-base" />
                      <p className="text-md crd">MongoDB Atlas</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaCheck className="cpr text-base" />
                      <p className="text-md crd">Express.js</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaCheck className="cpr text-base" />
                      <p className="text-md crd">React.js</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaCheck className="cpr text-base" />
                      <p className="text-md crd">VS Code</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    Open Job Positions
                  </h2>
                  <div className="flex flex-wrap gap-x-20 gap-y-3 border border-gray-300 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#F79952]"></div>
                        <p className="crd text-md">Full Stack Developer</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#F79952]"></div>
                        <p className="crd text-md">Back-end Developer</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#F79952]"></div>
                        <p className="crd text-md">Front-end Developer</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#F79952]"></div>
                        <p className="crd text-md">Web Application Developer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    Description
                  </h2>
                  <p className="text-base md:text-lg crd">{course.details}</p>
                </div>

                <div className="space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    Instructor
                  </h2>
                  <div className="flex flex-wrap items-center gap-6 rounded-lg">
                    <div className="size-26 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={sakibSirImg}
                        alt=""
                      />
                    </div>

                    <div className="space-y-1 outfit-semibold crd">
                      <h5 className="text-lg md:text-xl">
                        Sheikh Sakibul Hasan
                      </h5>
                      <p className="text-base md:text-lg">
                        {course.instructorEmail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block lg:hidden space-y-6">
              <h3 className="text-[#F79952] text-2xl md:text-3xl outfit-semibold text-center">
                Populer <span className="crd">Courses</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {populerCourse?.slice(0, 2).map((item) => (
                  <div
                    key={item.id}
                    className="relative w-[380px] h-[430px] bg-transparent cursor-pointer transition-transform duration-700 ease-in-out hover:scale-[1.03] hover:shadow-xl group perspective rounded-xl"
                  >
                    <div className="rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
                      <div className="relative h-52 w-full overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt="thumbnail"
                          className="h-full w-full rounded-xl object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />
                      </div>

                      <div className="mt-5 space-y-1 text-left pl-4">
                        <div className="flex justify-between pr-8">
                          <div className="flex items-center gap-1">
                            <BiCategory />
                            <p className="text-[13px] work">{item.category}</p>
                          </div>
                          <p className="bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]">
                            {item.type}
                          </p>
                        </div>

                        <h2 className="text-[22px] font-bold w-10/12 h-17 outfit-semibold csd">
                          {item.title}
                        </h2>

                        <div className="flex justify-between pr-8 items-center">
                          <p className="text-lg font-semibold text-gray-800 work">
                            Course Fee {item.fee}
                          </p>
                          <div className="rating text-sm">
                            {[...Array(5)].map((_, i) => (
                              <input
                                key={i}
                                type="radio"
                                name={`rating-${item.id}`}
                                className="mask mask-star-2 bg-orange-400 w-5"
                                aria-label={`${i + 1} star`}
                                defaultChecked={i + 1 === item.rating}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-2 pl-4 mb-2">
                        <Link
                          to={`/courses/${item.id}`}
                          className="flex gap-2 text-xl items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md"
                        >
                          <LuBookOpenCheck className="text-md font-semibold text-white" />
                          <p className="work tracking-tight text-[15px] text-white">
                            Course Details
                          </p>
                        </Link>
                        <div className="flex gap-2 text-xl items-center border border-[#41bfb8] px-4 py-2 mr-6 rounded-md">
                          <IoMdCall className="text-xl text-[#41bfb8] font-semibold" />
                          <p className="text-[#41bfb8] work text-md tracking-tight text-[15px]">
                            Get Course
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourseDetails;

//  className="w-full lg:w-3/4"
