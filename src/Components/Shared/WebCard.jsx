import React from "react";
import { BiCategory, BiStar } from "react-icons/bi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const WebCard = React.memo(
  ({
    id,
    title,
    category,
    type,
    mainImage,
    details = {
      project_metrics: {
        revenue,
        average_visitors_month,
        monthly_revenue,
        active_users,
        retention_rate,
      },
      benefits: [],
    },
    totalSell,
    price,
    lastUpdate,
    totalRating,
  }) => {
    const formatSales = (sales) => {
      if (typeof sales !== "number" || sales <= 0) return "No sales data";
      return sales >= 1000
        ? `${(sales / 1000).toFixed(1)}K Sales`
        : `${sales} Sales`;
    };

    return (
      <div className="p-4 sm:p-5 shadow-md hover:shadow-lg bg-white rounded-lg transition-shadow duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="sm:col-span-1 lg:h-[180px] sm:h-[200px] rounded-lg overflow-hidden relative">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover aspect-[3/2]"
              loading="lazy"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/600x400")
              }
            />
            <div className="absolute top-3 left-3 bg-teal-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
              {type}
            </div>
          </div>
          <div className="sm:col-span-3 flex flex-col sm:flex-row justify-between gap-4">
            <div className="space-y-3 flex-1">
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <BiCategory
                  className="text-teal-500 mr-1.5"
                  aria-hidden="true"
                />
                <span>{category}</span>
              </div>

              <h2
                className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight line-clamp-2 overflow-hidden"
                title={title} // Tooltip for full title on hover
              >
                {title}
              </h2>

              <ul className="space-y-2 max-h-[80px] sm:max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                {details.benefits.length > 0 ? (
                  details.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-teal-100 p-1 rounded-full mt-1 mr-2 sm:mr-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-xs sm:text-sm">
                    No benefits listed
                  </li>
                )}
              </ul>
            </div>

            <div className="sm:border-l-2 border-gray-300 sm:pl-4 flex flex-col items-start sm:items-center justify-between">
              <div className="space-y-2 w-full">
                <h3 className="text-center font-semibold text-gray-900 text-base sm:text-lg">
                  ${Number(price).toFixed(2)}
                </h3>
                <div
                  className="flex justify-center gap-1 sm:gap-2"
                  aria-label={`Rating: ${totalRating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                      <span key={i}>
                        {totalRating >= ratingValue ? (
                          <FaStar
                            className="text-yellow-500 w-4 h-4"
                            aria-hidden="true"
                          />
                        ) : totalRating >= ratingValue - 0.5 ? (
                          <FaStarHalfAlt
                            className="text-yellow-500 w-4 h-4"
                            aria-hidden="true"
                          />
                        ) : (
                          <BiStar
                            className="text-gray-300 w-4 h-4"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    );
                  })}
                  <span className="text-xs sm:text-sm font-medium text-gray-600 ml-1">
                    ({totalRating.toFixed(1)})
                  </span>
                </div>

                <p className="text-center text-xs sm:text-sm font-medium text-gray-600">
                  {formatSales(totalSell)}
                </p>
                <p className="text-center text-xs sm:text-sm font-medium text-gray-600">
                  Last Update: {lastUpdate || "N/A"}
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 w-full">
                  <Link
                    to={`/web_site/${id}`}
                    className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    aria-label={`View details for ${title}`}
                  >
                    <LuBookOpenCheck
                      className="text-base sm:text-lg"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm">View Details</span>
                  </Link>
                  <button
                    className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:border-teal-500 hover:text-teal-600 cursor-pointer"
                    aria-label={`Buy ${title} course`}
                  >
                    <span className="text-xs sm:text-sm">Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default WebCard;
