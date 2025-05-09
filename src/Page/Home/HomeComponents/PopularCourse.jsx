import React from "react";

import PopularCourseCard from "./PopularCourseCard";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const PopularCourse = () => {
  return (
    <div className="">
      <div className=" py-16 w-11/12 mx-auto rounded-2xl">
        <SectionHeading
          title={"Popular Courses"}
          description={
            "Bdcalling Academy offers a variety of courses, and upon successful completion, we provide job in our company Additionally,  we offer scholarships  in different categories   to support aspiring individuals. Our training programs include hands-on experience with real client projects,  ensuring a comprehensive and practical learning experience. "
          }
        ></SectionHeading>
        <PopularCourseCard></PopularCourseCard>
      </div>
    </div>
  );
};

export default PopularCourse;
