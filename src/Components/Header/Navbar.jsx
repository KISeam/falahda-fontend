import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCategory, BiMenu, BiX } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Build Your Website" },
    { to: "/events", label: "Course" },
    { to: "/our-team", label: "Components" },
    { to: "/about", label: "About" },
    // { to: "/contact", label: "Contact" },

    // { to: "/certification", label: "Certification" }
  ];

  return (
    <>
      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 left-0 w-[70%]  shadow-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{
          height: "calc(100vh - 80px)",
          marginTop: "68px", // Height of your navbar
        }}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-all duration-300 text-lg poppins ${
                        isActive
                          ? "bg-[#41bfb8] text-white poppins"
                          : "text-gray-700 hover:bg-gray-100 poppins"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* GetCourse Button */}
          <Link to="/courses">
            <div className="mt-auto mb-6">
              <div className="flex gap-2 items-center justify-center bg-[#41bfb8] px-4 py-3 rounded-md cursor-pointer transition-all hover:brightness-110">
                <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                <p className="text-white text-[16px] font-semibold">
                  GetCourse
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={` border-gray-200 font-poppins sticky top-0 z-50 
          transition-all duration-500 ease-in-out
          ${isSticky ? "shadow-md opacity-100 translate-y-0" : "shadow-md"}
        `}
      >
        <div className="w-full  px-4 sm:w-11/12 sm:px-0 lg:w-10/12 2xl:w-9/12 mx-auto py-4 text-[16px] flex flex-col md:flex-row justify-between items-center transition-all duration-500 ease-in-out">
          {/* Logo and Category */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <div className="flex gap-8">
              <Link
                to="/"
                className="md:border-r border-gray-400 flex gap-8 pr-8 2xl:pr-12"
              >
                {/* <img className="w-32 lg:w-44" src={logo} alt="Logo" /> */}
                <h1
                  className="font-bold leading-tight"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #00DDB3",
                    fontSize: "2rem",
                  }}
                >
                  <span className="text-[2rem]  relative z-40 outfit  ">
                    FALAH
                  </span>
                </h1>
              </Link>
              <div className="hidden md:flex items-center gap-2 dark:text-black/70">
                <BiCategory className="text-3xl text-white" />
                <p className="text-[18px] text-white">Category</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-3xl text-whitennnn focus:outline-none cursor-pointer"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex lg:gap-4 2xl:gap-8 font-poppins">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative pb-1 transition-all duration-300 
                    hover:text-[#41bfb8] text-[16px] poppins text-white
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

          {/* GetCourse Button - Desktop */}
          <Link to="/courses">
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

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10  backdrop-blur-sm z-30 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
