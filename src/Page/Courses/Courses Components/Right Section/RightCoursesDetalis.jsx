import React, { useState } from "react";
import CourseCard from "../../../../Components/CourseCard";
import WebCard from "../../../../Components/Shared/WebCard";

const RightCoursesDetalis = ({ filteredCourses }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allMentors = [...new Set(filteredCourses.map(course => course.instructorName))];

  const filteredByType = filteredCourses.filter((course) => {
    const typeMatch = selectedType === "All" || course.type === selectedType;
    const mentorMatch = !selectedMentor || course.instructorName === selectedMentor;
    return typeMatch && mentorMatch;
  });

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedMentor(null);
  };

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor === selectedMentor ? null : mentor);
    setIsDropdownOpen(false);
  };

  const typeButtons = ["All", "MERN", "Wordpress", "PHP"];

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <h1 className="text-[#F79952] text-4xl md:text-5xl outfit-semibold ">
          Our <span className="crd">Courses</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-4"> 
            {typeButtons.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`py-2 px-4 cursor-pointer rounded-md  transition-colors ${
                  selectedType === type
                    ? "bg-[#41bfb8] text-white font-medium"
                    : " text-black border border-gray-300"
                }`}
              >
                <p className="text-sm md:text-base">{type}</p>
              </button>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`py-3 px-4 cursor-pointer rounded-md shadow-md transition-colors text-white ${
                selectedMentor
                  ? "bg-[#41bfb8] font-medium"
                  : "bg-[#F79952] hover:bg-[#F79952]/85"
              }`}
            >
              <p className="text-sm md:text-base">
                {selectedMentor || " Select Mentor 🖌️"}
              </p>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-50 bg-white rounded-md shadow-lg z-10 max-h-100 overflow-y-auto">
                {allMentors.length > 0 ? (
                  allMentors.map((mentor) => (
                    <div
                      key={mentor}
                      onClick={() => handleMentorSelect(mentor)}
                      className={`px-4 py-2 text-base cursor-pointer ${
                        selectedMentor === mentor
                          ? "bg-[#41bfb8] text-white"
                          : "hover:bg-gray-100 text-black"
                      }`}
                    >
                      {mentor}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No mentors available
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" gap-6">
        {filteredByType.length > 0 ? (
          filteredByType.map((course) => (
            <WebCard
              key={course.id}
              id={course.id}
              title={course.title}
              image={course.image}
              category={course.category}
              type={course.type}
              details={course.details}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-lg text-gray-600">
              No courses found matching your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightCoursesDetalis;
