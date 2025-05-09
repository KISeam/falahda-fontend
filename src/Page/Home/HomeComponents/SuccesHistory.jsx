import React from "react";
import { Star } from "lucide-react";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const reviews = [
  {
    id: 1,
    name: "Sadia Rahman",
    role: "Web Developer",
    review:
      "Bdcalling Academy gave me the platform to launch my career. The hands-on projects and expert guidance were exactly what I needed.",
    image: "https://i.ibb.co/nR9MQ15/avatar1.png",
  },
  {
    id: 2,
    name: "Rakib Hossain",
    role: "UI/UX Designer",
    review:
      "Their training and real-life project experience helped me grow faster than I ever expected.",
    image: "https://i.ibb.co/8x1QnDd/avatar2.png",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Digital Marketer",
    review:
      "Amazing mentors and a supportive learning environment. I even got a job offer right after completing the course!",
    image: "https://i.ibb.co/Qfzkskz/avatar3.png",
  },
  {
    id: 4,
    name: "Shakil Ahmed",
    role: "MERN Stack Developer",
    review:
      "The real client projects helped me gain confidence in applying my skills practically.",
    image: "https://i.ibb.co/QMdSPtL/avatar4.png",
  },
  {
    id: 5,
    name: "Farzana Akter",
    role: "Graphics Designer",
    review:
      "Great learning experience. The scholarship I received made it possible for me to study here.",
    image: "https://i.ibb.co/VH7CBTP/avatar5.png",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#ecfcfb] via-white to-[#f2f7f6] py-16">
      <div className="container mx-auto px-4">
      
        <h1 className="font-extrabold relative z-40 leading-tight text-center text-[3.5rem] cpr outfit-semibold">
        Customer <span className="crd"> Revew </span>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-green-200 group-hover:scale-105 transition duration-300"
                />
                <div>
                  <h4 className="text-lg font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>

              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
