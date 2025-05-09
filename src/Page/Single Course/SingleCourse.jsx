import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCourseDetails from "./Left Section/SingleCourseDetails";
import SingleCourseCard from "./Right Section/SingleCourseCard";

const SingleCourse = () => {
  const [course, setCourse] = useState(null);
  const [populerCourse, setPopulerCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/Course-Data/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((course) => course.id == id);
        setCourse(foundCourse);
        setPopulerCourse(data);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-white pb-6">
        <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto relative">
          <div className="w-full lg:w-2/6 lg:absolute top-10 right-0">
            {course && (
              <SingleCourseCard course={course} populerCourse={populerCourse} />
            )}
          </div>
        </div>
        <div>
          {course && (
            <SingleCourseDetails
              course={course}
              populerCourse={populerCourse}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleCourse;

//  className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12"
// className = "w-full lg:w-3/4";
// className = "w-full lg:w-1/4";
