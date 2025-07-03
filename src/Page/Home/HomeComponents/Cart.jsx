import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [webSites, setWebSites] = useState([]);
  const [webSiteCategories, setWebSiteCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    fetch("/Course-Data/website.json")
      .then((res) => res.json())
      .then((data) => {
        setWebSites(data.slice(0, 10));
      });
  }, []);

  useEffect(() => {
    fetch("/Course-Data/websiteCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setWebSiteCategories(data);
      });
  }, []);

  const filteredWebSites =
    selectedCategory === "All"
      ? webSites
      : webSites.filter((webSite) => webSite.category === selectedCategory);

  useEffect(() => {
    setDisplayCount(3);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-100 px-4 py-16 font-poppins">
      {/* Heading Section */}
      <div>
        <h1 className="font-extrabold relative z-40 leading-tight text-center text-[3.5rem] cpr outfit-semibold">
          Find <span className="crd"> Your </span>
        </h1>
        <h1
          className="text-5xl text-center font-bold leading-tight"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px gray",
            fontSize: "40px",
          }}
        >
          <span className="text-[4.5rem] relative z-40 outfit">
            DREAM WEBSITE
          </span>
        </h1>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mt-8 outfit flex-wrap">
        {webSiteCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 text-sm font-semibold transition rounded-md ${
              selectedCategory === cat.name
                ? "bg-[#00DDB3] text-white"
                : " crd border border-gray-300 cursor-pointer bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* webSite Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
        {filteredWebSites.slice(0, displayCount).map((webSite) => (
          <div
            key={webSite.id}
            className="relative w-[400px] transition-all duration-500 ease-in-out hover:rotate-[0.3deg] hover:scale-[1.03] hover:shadow-2xl rounded-2xl group perspective"
          >
            {/* webSite Inner Container */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-5 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-visible">
                <img
                  src={webSite.mainImage}
                  alt="thumbnail"
                  className="absolute top-0 left-0 h-full w-full object-cover rounded-xl transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="mt-5 space-y-2 text-left">
                <h2 className="text-xl font-bold text-[#6A67CE]">
                  {webSite.title}
                </h2>
                <p className="text-sm text-gray-600">{webSite.description}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  {webSite.price} $
                </p>
              </div>

              {/* Button Section */}
              <div className="flex justify-between items-center mt-2">
                <button className="text-xs font-bold px-4 py-2 rounded-md bg-[#f9004d] text-white hover:bg-[#e20044] transition cursor-pointer">
                  Buy Now
                </button>
                <Link
                to={`/web_site/${webSite.id}`}
                  className="text-xs px-4 py-2 rounded-xl text-[#f9004d] hover:underline transition cursor-pointer"
                >
                  View Live →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
