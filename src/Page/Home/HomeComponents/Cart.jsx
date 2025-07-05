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
        // Add fastDelivery property to some items
        const updatedData = data.slice(0, 10).map((site, index) => ({
          ...site,
          fastDelivery: index % 3 === 0 // Every 3rd item has fast delivery
        }));
        setWebSites(updatedData);
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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen px-4 py-12 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Find Your <span className="text-[#00DDB3]">Dream Website</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Premium website templates with lightning-fast delivery options
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {webSiteCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center cursor-pointer ${
                selectedCategory === cat.name
                  ? "bg-[#00DDB3] text-white shadow-lg shadow-[#00DDB3]/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#00DDB3] hover:text-[#00DDB3]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Website Cards - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWebSites.slice(0, displayCount).map((webSite) => (
            <div
              key={webSite.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              
              {/* Image with Hover Effect */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={webSite.mainImage}
                  alt="website thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Link to={`/web_site/${webSite.id}`}>
                    <h2 className="text-xl font-bold text-gray-900 hover:text-[#00DDB3] transition-colors">
                      {webSite.title}
                    </h2>
                  </Link>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {webSite.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {webSite.description}
                </p>
                
                <div className="flex justify-between items-center mt-5">
                  <span className="text-lg font-bold text-gray-900">
                    {webSite.price} $
                  </span>
                  <div className="flex gap-3">
                    <Link
                      to={`/web_site/${webSite.id}`}
                      className="text-sm px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      Preview
                    </Link>
                    <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-[#00DDB3] to-[#00B8DB] text-white hover:opacity-90 transition-opacity shadow-md">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < filteredWebSites.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setDisplayCount(displayCount + 3)}
              className="px-8 py-3 bg-white text-[#00DDB3] font-medium rounded-full border-2 border-[#00DDB3] hover:bg-[#00DDB3] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Load More Templates
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;