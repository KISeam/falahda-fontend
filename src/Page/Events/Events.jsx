import React from "react";
import LeftEventSection from "./Events Components/Left Event Section/LeftEventSection";
import RightSeminarSection from "./Events Components/Right Seminar Section/RightSeminarSection";

const Events = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] py-16 md:py-24">
        <div className="w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2"><LeftEventSection /></div>
            <div className="w-full lg:w-1/2"><RightSeminarSection /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
