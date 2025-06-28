import React, { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const LeftCategory = ({
  courseCategories,
  selectedCategories,
  handleCheckboxChange,
  searchQuery,
  onSearch,
  selectedRating,
  onRatingChange,
  showMobileFilters,
  setShowMobileFilters,
  resetFilters,
  selectedPriceRange,
  onPriceRangeChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const priceRanges = [
    { label: "All", value: "all" },
    { label: "Free", value: "free" },
    { label: "$0 - $50", value: "0-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100+", value: "100+" },
  ];

  const filterContent = (
    <div className="w-full space-y-6 p-4 rounded-xl shadow-lg">
      {/* Search Bar */}
      <div className="relative">
        <input
          className="w-full pl-5 pr-12 py-3 text-base text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F79952] focus:border-transparent transition-all duration-300 shadow-sm"
          type="text"
          placeholder="Search courses..."
          aria-label="Search courses"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <IoSearchSharp className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl cursor-pointer hover:text-[#F79952] transition-colors duration-300" />
      </div>

      {/* Categories Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Categories
        </h3>
        <div className="flex flex-col gap-3 p-5">
          {courseCategories.map((category) => (
            <label
              key={category.id}
              className={`flex items-center gap-3 cursor-pointer ${
                selectedCategories === category.name
                  ? "text-[#F79952] font-medium"
                  : "text-gray-700 hover:text-[#F79952]"
              }`}
              onClick={() => handleCheckboxChange(category.name)}
            >
              <input
                type="checkbox"
                className="checkbox w-5 h-5 rounded-sm"
                checked={selectedCategories === category.name}
                onChange={() => handleCheckboxChange(category.name)}
              />
              <span className="text-base font-medium">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Price
        </h3>
        <div className="flex flex-col gap-3 p-5">
          {/* Radio Buttons for Predefined Price Ranges */}
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className={`flex items-center gap-3 cursor-pointer ${
                selectedPriceRange === range.value
                  ? "text-[#F79952] font-medium"
                  : "text-gray-700 hover:text-[#F79952]"
              }`}
            >
              <input
                type="checkbox"
                name="priceRange"
                className="checkbox w-5 h-5 rounded-sm"
                checked={selectedPriceRange === range.value}
                onChange={() => onPriceRangeChange(range.value)}
              />
              <span className="text-base font-medium">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Rating
        </h3>
        <div className="flex flex-col gap-3 p-5">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className={`flex items-center gap-3 cursor-pointer ${
                selectedRating === rating
                  ? "text-[#F79952] font-medium"
                  : "text-gray-700 hover:text-[#F79952]"
              }`}
            >
              <input
                type="checkbox"
                name="rating"
                className="checkbox w-5 h-5 rounded-sm"
                checked={selectedRating === rating}
                onChange={() => onRatingChange(rating)}
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-lg ${
                      index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-base font-medium ml-2">
                  {rating}+ Stars
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showMobileFilters ? (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <button
                onClick={resetFilters}
                className="text-sm text-[#3590CF] hover:text-[#2a7cb3] px-3 py-1 rounded hover:bg-teal-50 transition-colors cursor-pointer"
                aria-label="Reset all filters"
              >
                Reset All
              </button>
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-500 hover:text-gray-700 p-1 cursor-pointer"
                aria-label="Close filters"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {filterContent}
            </div>
            <div className="sticky bottom-0 bg-white p-4 border-t">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full bg-[#3590CF] hover:bg-[#2a7cb3] text-white py-3 rounded-lg font-medium transition-colors duration-300 cursor-pointer"
                aria-label="Apply filters"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="lg:hidden flex items-center justify-between mb-6 bg-white rounded-xl shadow-sm py-3 px-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <span className="text-gray-700 text-base font-medium tracking-tight">
              Filter Courses
            </span>
            <button
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-2 text-[#3590CF] hover:text-[#2a7cb3] bg-teal-50 hover:bg-teal-100 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3590CF] focus:ring-offset-2 cursor-pointer"
              aria-label="Open course filters"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v3.586a1 1 0 01-.293.707l-2 2A1 1 0 0110 21v-5.586a1 1 0 00-.293-.707L3.293 8.293A1 1 0 013 7.586V4z"
                />
              </svg>
              <span>Filter</span>
            </button>
          </div>
          <div className="hidden lg:block">{filterContent}</div>
        </>
      )}
    </>
  );
};

export default LeftCategory;