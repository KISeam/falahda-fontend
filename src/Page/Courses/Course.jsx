import React, { useEffect, useRef, useState } from "react";
import LeftCategory from "./Courses Components/Left Section/LeftCategory";
import RightCoursesDetalis from "./Courses Components/Right Section/RightCoursesDetalis";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../../Components/Shared/SectionHeading";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
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
      setSearchQuery(decodeURIComponent(searchParam));
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
        console.log(
          "Unique ratings:",
          [...new Set(normalizedData.map((course) => course.totalRating))]
        );
        console.log(
          "Unique prices:",
          [...new Set(normalizedData.map((course) => course.price))]
        );
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

  return (
    <>
      <div className="bg-[#ecfcfb] py-12">
        <div className="mb-24 mt-4">
          <SectionHeading
            title={"Discover Your Next Skill"}
            description={
              "Unlock a variety of practical and in-demand courses tailored to your career goals. Whether you're starting fresh or aiming higher, our learning paths are made to guide you every step of the way. Each course is crafted by industry experts to ensure you gain real-world skills that make a difference."
            }
          ></SectionHeading>
        </div>
        <div className="lg:w-9/11 mx-auto px-4 lg:px-0">
          <div>
            {initialLoading ? (
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#F79952]"></div>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[20%] lg:sticky lg:top-24 lg:self-start">
                  <LeftCategory
                    courseCategories={courseCategories}
                    selectedCategories={selectedCategories}
                    handleCheckboxChange={handleCheckboxChange}
                    searchQuery={searchQuery}
                    onSearch={handleSearch}
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
                  />
                </div>
                <div
                  className="w-full lg:w-3/4"
                  ref={detailsRef}
                  style={{ transform: getTransformValue() }}
                >
                  <RightCoursesDetalis
                    filteredCourses={displayedcourses}
                    selectedRating={selectedRating}
                    onRatingChange={handleRatingChange}
                  />
                  {selectedCategories === "All" &&
                    searchQuery === "" &&
                    selectedRating === null &&
                    selectedPriceRange === "all" &&
                    minPrice === null &&
                    maxPrice === null &&
                    allCourses.length > courses.length && (
                      <div className="flex justify-center my-3">
                        <button
                          onClick={loadMorecourses}
                          disabled={loadMoreLoading}
                          className={`px-6 py-2 cursor-pointer ${
                            loadMoreLoading
                              ? "bg-[#F79952] cursor-not-allowed"
                              : "bg-[#f2a56a] hover:bg-[#F79952]"
                          } text-white rounded-lg transition duration-300`}
                        >
                          {loadMoreLoading ? "Loading..." : "Load More"}
                        </button>
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;