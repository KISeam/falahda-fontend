import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCategory, BiMenu, BiX } from "react-icons/bi";
import { LuBookOpenCheck, LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
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
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed lg:hidden top-[90px] left-0 w-[70%] max-w-[300px] z-40 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } bg-white`}
        style={{
          height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
        id="mobile-menu"
      >
        <div className="p-4 flex flex-col h-full">
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
                          ? "bg-[#41bfb8] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/courses">
            <div className="mt-auto mb-6 shadow">
              <div className="flex gap-2 items-center justify-center bg-[#41bfb8] px-4 py-3 rounded-md cursor-pointer transition-all hover:brightness-110">
                <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                <p className="text-white text-[16px] font-semibold">GetCourse</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white border-gray-200 font-poppins sticky top-0 z-50 transition-all duration-500 ease-in-out navbar ${
          isSticky ? "opacity-100 translate-y-0" : "shadow-md"
        }`}
      >
        <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto py-2 text-[16px] flex flex-col md:flex-row justify-between items-center transition-all duration-500 ease-in-out">
          {/* Logo and Category */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <div>
              <Link to="/">
                <h1
                  className="font-bold leading-tight"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #00DDB3",
                    fontSize: "2rem",
                  }}
                >
                  <span className="text-[2rem] relative z-40 outfit">FALAH</span>
                </h1>
              </Link>
            </div>
            <button
              className="lg:hidden text-3xl text-gray-700 focus:outline-none cursor-pointer"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>

          {/* MidHeader Desktop Content */}
            <div className="hidden lg:block lg:w-1/3">
              <div className="relative">
                <input
                  className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63B295] focus:border-transparent transition-all duration-200"
                  type="text"
                  placeholder="Search Our Blog"
                />
                <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer hover:text-[#63B295] transition-colors duration-200" />
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <div className="flex justify-center gap-6">
                <div
                  className="flex items-center gap-2 dropdown dropdown-end cursor-pointer"
                  tabIndex={0}
                >
                  <LuUserRound className="text-2xl text-gray-500" />
                  <div>
                    <p className="text-gray-500 text-xs">
                      Account <br />{" "}
                      <span className="font-extralight text-black">LOGIN</span>
                    </p>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content rounded-box z-10 mt-4 w-52 p-2 shadow-sm text-gray-600 bg-white"
                    >
                      <li>
                        <Link to="/signup">Sign Up</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegHeart className="text-2xl text-gray-500" />
                  <p className="text-gray-500 text-xs">
                    Wishlist <br />{" "}
                    <span className="font-extralight text-black">0-ITEMS</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoBagOutline className="text-2xl text-gray-500" />
                  <p className="text-gray-500 text-xs">
                    Cart <br />{" "}
                    <span className="font-extralight text-black">0-ITEMS</span>
                  </p>
                </div>
              </div>
            </div>
          {/* <div className="hidden md:flex items-center justify-between w-full mx-auto gap-10">
          </div> */}
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 lg:hidden"
          style={{ height: "100vh", width: "100vw" }}
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;