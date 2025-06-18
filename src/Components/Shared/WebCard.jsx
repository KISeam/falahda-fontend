import React from "react";
import { BiCategory, BiStar } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const WebCard = ({
  id,
  title,
  category,
  type,
  image,
  details: {
    project_metrics: {
      revenue,
      average_visitors_month,
      monthly_revenue,
      active_users,
      retention_rate,
    },
  },
}) => {
  const rating = 4.8;
  const fee = monthly_revenue || "$0";

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-600/10 z-10"></div>
              <img
                src={
                  image ||
                  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&h=400&q=80"
                }
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  {type || "Premium"}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <BiCategory className="text-teal-500 mr-1.5" />
                  <span>{category || "Web Development"}</span>
                </div>
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <BiStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-700">
                    {rating}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                {title || "Advanced React & Next.js Masterclass"}
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-500">Course Fee</p>
                  <p className="text-xl font-bold text-gray-800">{fee}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Active Users</p>
                  <p className="text-xl font-bold text-gray-800">
                    {active_users || 0}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Monthly Visitors</p>
                  <p className="text-xl font-bold text-gray-800">
                    {average_visitors_month}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Retention Rate</p>
                  <p className="text-xl font-bold text-gray-800">
                    {retention_rate}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <Link
                  to={`/courses/${id}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  <LuBookOpenCheck className="text-lg" />
                  <span>View Course Details</span>
                </Link>
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:border-teal-500 hover:text-teal-600">
                  <FaWhatsapp className="text-lg text-green-500" />
                  <span>Enroll via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCard;
