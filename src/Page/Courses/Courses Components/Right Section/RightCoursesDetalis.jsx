import React, { useState } from "react";
import WebCard from "../../../../Components/Shared/WebCard";

const RightCoursesDetalis = ({ filteredCourses, selectedRating, onRatingChange }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);

  const allMentors = [
    ...new Set(filteredCourses.map((course) => course.instructorName)),
  ];

  const filteredByType = filteredCourses.filter((course) => {
    const typeMatch = selectedType === "All" || course.type === selectedType;
    const mentorMatch =
      !selectedMentor || course.instructorName === selectedMentor;
    return typeMatch && mentorMatch;
  });

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedMentor(null);
  };


  const typeButtons = ["All", "MERN", "Wordpress", "PHP"];

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <h1 className="text-[#41bfb8] text-4xl md:text-5xl outfit-semibold">
          Our <span className="crd">Web Sites</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-4">
            {typeButtons.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`py-2 px-4 cursor-pointer rounded-md transition-colors ${
                  selectedType === type
                    ? "bg-[#41bfb8] text-white font-medium"
                    : "text-black border border-gray-300"
                }`}
              >
                <p className="text-sm md:text-base">{type}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        {filteredByType.length > 0 ? (
          filteredByType.map((course) => (
            <WebCard
              key={course.id}
              id={course.id}
              title={course.title}
              mainImage={course.mainImage}
              category={course.category}
              type={course.type}
              details={course.details}
              totalSell={course.totalSell}
              price={course.price}
              lastUpdate={course.lastUpdate}
              totalRating={course.totalRating}
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