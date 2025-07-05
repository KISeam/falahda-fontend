import React, { useEffect, useRef, useState } from "react";
import LeftCategory from "./Courses Components/Left Section/LeftCategory";
import RightCoursesDetalis from "./Courses Components/Right Section/RightCoursesDetalis";
import { useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState(""); // Separate state for input field
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const coursesPerPage = 10;
  const detailsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize states from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    const ratingParam = searchParams.get("rating");
    const priceRangeParam = searchParams.get("priceRange");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");

    if (categoryParam) {
      setSelectedCategories(decodeURIComponent(categoryParam));
    }
    if (searchParam) {
      const decodedSearch = decodeURIComponent(searchParam);
      setSearchQuery(decodedSearch);
      setSearchInput(decodedSearch);
    } else {
      setSearchQuery("");
      setSearchInput("");
    }
    if (ratingParam) {
      setSelectedRating(Number(ratingParam));
    }
    if (priceRangeParam) {
      setSelectedPriceRange(decodeURIComponent(priceRangeParam));
    }
    if (minPriceParam) {
      setMinPrice(Number(minPriceParam));
    }
    if (maxPriceParam) {
      setMaxPrice(Number(maxPriceParam));
    }
  }, [searchParams]);

  useEffect(() => {
    fetch("/Course-Data/website.json")
      .then((res) => res.json())
      .then((data) => {
        const normalizedData = data.map((course) => ({
          ...course,
          totalRating: Number(course.totalRating) || 0,
          price: Number(course.price) || 0,
        }));
        setAllCourses(normalizedData);
        setCourses(normalizedData.slice(0, coursesPerPage));
        setInitialLoading(false);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  useEffect(() => {
    fetch("/Course-Data/websiteCategory.json")
      .then((res) => res.json())
      .then((data) => setCourseCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories(categoryName);
    const params = new URLSearchParams();
    params.set("category", encodeURIComponent(categoryName));
    if (searchQuery) {
      params.set("search", encodeURIComponent(searchQuery));
    }
    if (selectedRating) {
      params.set("rating", selectedRating);
    }
    if (selectedPriceRange) {
      params.set("priceRange", encodeURIComponent(selectedPriceRange));
    }
    if (minPrice !== null) {
      params.set("minPrice", minPrice);
    }
    if (maxPrice !== null) {
      params.set("maxPrice", maxPrice);
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (selectedCategories !== "All") {
      params.set("category", encodeURIComponent(selectedCategories));
    }
    if (query) {
      params.set("search", encodeURIComponent(query));
    }
    if (selectedRating) {
      params.set("rating", selectedRating);
    }
    if (selectedPriceRange) {
      params.set("priceRange", encodeURIComponent(selectedPriceRange));
    }
    if (minPrice !== null) {
      params.set("minPrice", minPrice);
    }
    if (maxPrice !== null) {
      params.set("maxPrice", maxPrice);
    }
    setSearchParams(params);
  };

  const handleRatingChange = (rating) => {
    const newRating = rating === selectedRating ? null : rating;
    setSelectedRating(newRating);
    const params = new URLSearchParams();
    if (selectedCategories !== "All") {
      params.set("category", encodeURIComponent(selectedCategories));
    }
    if (searchQuery) {
      params.set("search", encodeURIComponent(searchQuery));
    }
    if (newRating) {
      params.set("rating", newRating);
    }
    if (selectedPriceRange) {
      params.set("priceRange", encodeURIComponent(selectedPriceRange));
    }
    if (minPrice !== null) {
      params.set("minPrice", minPrice);
    }
    if (maxPrice !== null) {
      params.set("maxPrice", maxPrice);
    }
    setSearchParams(params);
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    setMinPrice(null);
    setMaxPrice(null);
    const params = new URLSearchParams();
    if (selectedCategories !== "All") {
      params.set("category", encodeURIComponent(selectedCategories));
    }
    if (searchQuery) {
      params.set("search", encodeURIComponent(searchQuery));
    }
    if (selectedRating) {
      params.set("rating", selectedRating);
    }
    if (range) {
      params.set("priceRange", encodeURIComponent(range));
    }
    setSearchParams(params);
  };

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
    setSelectedPriceRange(null);
    const params = new URLSearchParams();
    if (selectedCategories !== "All") {
      params.set("category", encodeURIComponent(selectedCategories));
    }
    if (searchQuery) {
      params.set("search", encodeURIComponent(searchQuery));
    }
    if (selectedRating) {
      params.set("rating", selectedRating);
    }
    if (value !== null) {
      params.set("minPrice", value);
    }
    if (maxPrice !== null) {
      params.set("maxPrice", maxPrice);
    }
    setSearchParams(params);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
    setSelectedPriceRange(null);
    const params = new URLSearchParams();
    if (selectedCategories !== "All") {
      params.set("category", encodeURIComponent(selectedCategories));
    }
    if (searchQuery) {
      params.set("search", encodeURIComponent(searchQuery));
    }
    if (selectedRating) {
      params.set("rating", selectedRating);
    }
    if (minPrice !== null) {
      params.set("minPrice", minPrice);
    }
    if (value !== null) {
      params.set("maxPrice", value);
    }
    setSearchParams(params);
  };

  const resetFilters = () => {
    setSelectedCategories("All");
    setSearchQuery("");
    setSearchInput("");
    setSelectedRating(null);
    setSelectedPriceRange("all");
    setMinPrice(null);
    setMaxPrice(null);
    setSearchParams({});
  };

  const filteredcourses = allCourses.filter((course) => {
    const categoryMatch =
      selectedCategories === "All" || course.category === selectedCategories;

    const searchMatch =
      searchQuery === "" ||
      (course.title &&
        course.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (course.specialization &&
        course.specialization.toLowerCase().includes(searchQuery.toLowerCase()));

    const ratingMatch =
      selectedRating === null || course.totalRating >= selectedRating;

    let priceMatch = true;
    if (selectedPriceRange || minPrice !== null || maxPrice !== null) {
      const coursePrice = Number(course.price) || 0;
      if (selectedPriceRange) {
        if (selectedPriceRange === "free") {
          priceMatch = coursePrice === 0;
        } else if (selectedPriceRange === "0-50") {
          priceMatch = coursePrice > 0 && coursePrice <= 50;
        } else if (selectedPriceRange === "50-100") {
          priceMatch = coursePrice > 50 && coursePrice <= 100;
        } else if (selectedPriceRange === "100+") {
          priceMatch = coursePrice > 100;
        }
      } else {
        if (minPrice !== null && maxPrice !== null) {
          priceMatch = coursePrice >= minPrice && coursePrice <= maxPrice;
        } else if (minPrice !== null) {
          priceMatch = coursePrice >= minPrice;
        } else if (maxPrice !== null) {
          priceMatch = coursePrice <= maxPrice;
        }
      }
    }

    return categoryMatch && searchMatch && ratingMatch && priceMatch;
  });

  const displayedcourses =
    selectedCategories === "All" &&
    searchQuery === "" &&
    selectedRating === null &&
    selectedPriceRange === "all" &&
    minPrice === null &&
    maxPrice === null
      ? courses
      : filteredcourses;

  const loadMorecourses = () => {
    setLoadMoreLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const nextcourses = allCourses.slice(0, nextPage * coursesPerPage);
      setCourses(nextcourses);
      setCurrentPage(nextPage);
      setLoadMoreLoading(false);
    }, 500);
  };

  const getTransformValue = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      const maxScroll = 300;
      const scrollProgress = Math.min(scrollY, maxScroll) / maxScroll;
      return `translateY(${-scrollProgress * 0}px)`;
    }
    return "none";
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <div className="bg-[#f5fbf1]">
      {/* Professional Search Header */}
      <div className="pt-10 pb-8 relative">
        <div className="px-4">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden max-w-6xl mx-auto relative">
              <input
                type="text"
                className="w-full py-4 pl-6 pr-12 text-gray-800 placeholder-gray-500 focus:outline-none"
                placeholder="Search courses by title, category, or specialization..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#F79952] hover:bg-[#e08a48] text-white rounded-full p-3 transition-colors duration-300"
                aria-label="Search courses"
              >
                <IoSearchSharp className="text-xl" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Section */}
            <div className="w-full lg:w-[25%] lg:sticky lg:top-24 lg:self-start">
              <LeftCategory
                courseCategories={courseCategories}
                selectedCategories={selectedCategories}
                handleCheckboxChange={handleCheckboxChange}
                selectedRating={selectedRating}
                onRatingChange={handleRatingChange}
                showMobileFilters={showMobileFilters}
                setShowMobileFilters={setShowMobileFilters}
                resetFilters={resetFilters}
                selectedPriceRange={selectedPriceRange}
                onPriceRangeChange={handlePriceRangeChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
                searchQuery={searchQuery}
                onSearch={handleSearch}
              />
            </div>
            
            {/* Courses Section */}
            <div className="w-full lg:w-[75%]">
              {initialLoading ? (
                <div className="flex justify-center items-center h-screen">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2c5e2a]"></div>
                </div>
              ) : (
                <>
                  {/* Results Header */}
                  {searchQuery && (
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-gray-800">
                        Search results for: <span className="text-[#2c5e2a]">"{searchQuery}"</span>
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {displayedcourses.length} courses found
                      </p>
                    </div>
                  )}
                  
                  {/* Courses List */}
                  <div ref={detailsRef}>
                    <RightCoursesDetalis
                      filteredCourses={displayedcourses}
                      selectedRating={selectedRating}
                      onRatingChange={handleRatingChange}
                    />
                  </div>
                  
                  {/* Load More Button */}
                  {selectedCategories === "All" &&
                    searchQuery === "" &&
                    selectedRating === null &&
                    selectedPriceRange === "all" &&
                    minPrice === null &&
                    maxPrice === null &&
                    allCourses.length > courses.length && (
                      <div className="flex justify-center my-8">
                        <button
                          onClick={loadMorecourses}
                          disabled={loadMoreLoading}
                          className={`px-8 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                            loadMoreLoading
                              ? "bg-[#2c5e2a] cursor-not-allowed"
                              : "bg-[#2c5e2a] hover:bg-[#1a3c18] transform hover:-translate-y-1"
                          } text-white shadow-lg hover:shadow-xl flex items-center`}
                        >
                          {loadMoreLoading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Loading...
                            </>
                          ) : (
                            "Load More Courses"
                          )}
                        </button>
                      </div>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;