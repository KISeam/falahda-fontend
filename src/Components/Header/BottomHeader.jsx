import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import { LuBookOpenCheck } from "react-icons/lu";

const BottomHeader = () => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/Course-Data/websiteCategory.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(
            data.map(
              (product) => product.name || product.productDisplayCategory
            )
          ),
        ];
        setCategories(uniqueCategories.filter(Boolean));
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/web_site", label: "Build Your Website" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div>
        <div className="bg-white border-y border-gray-200 hidden lg:block">
          <div className="flex justify-between items-center w-11/12 lg:w-9/12 mx-auto py-2.5">
            <div className="flex items-center ">
              <div className="relative" ref={dropdownRef}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-[#41bfb8] hover:brightness-110 border-none text-white px-4 py-6 rounded-md transition duration-300 cursor-pointer flex gap-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
                >
                  <GrAppsRounded className="font-bold text-xl" />
                  <p>All Categories</p>
                  <MdOutlineKeyboardArrowDown className="font-bold text-xl" />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu absolute rounded-box z-10 w-52 p-2 shadow-sm text-gray-600 bg-white"
                  >
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          to={`/web_site?category=${encodeURIComponent(
                            category
                          )}`}
                          className="cursor-pointer"
                          onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="navbar-center hidden lg:flex lg:justify-between">
              {/* Navigation Links - Desktop */}
              <div className="hidden lg:flex lg:gap-4 2xl:gap-8 font-poppins">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `relative pb-1 transition-all duration-300 
                                  hover:text-[#41bfb8] text-[16px] poppins
                                  ${
                                    isActive
                                      ? "text-[#00DDB3] after:scale-x-100"
                                      : "text-black after:scale-x-0"
                                  } 
                                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                                  after:w-full after:h-[2px] after:bg-[#00DDB3] after:transition-transform 
                                  after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <Link to="/web_site">
                {" "}
                <div className="hidden lg:block">
                  <div className="flex gap-2 text-xl items-center bg-[#41bfb8] px-4 py-2 rounded-md cursor-pointer transition-all hover:brightness-110">
                    <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                    <p className="text-white">Get Website</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
