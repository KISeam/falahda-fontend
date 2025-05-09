import React, { useState } from "react";

const cardData = [
  {
    id: 1,
    image: "/w-1.jpg",
    title: "Best Buy",
    description: "Perfect for travel & daily use. Made with durable materials and modern design.",
    price: "৳1,250.00",
    liveLink: "#",
    category: "E-commerce Website",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    title: "Best Buy",
    description: "Perfect for travel & daily use. Made with durable materials and modern design.",
    price: "৳1,250.00",
    liveLink: "#",
    category: "Portfolio Website",
  },
  {
    id: 3,
    image: "/w-2.png",
    title: "Best Buy",
    description: "Perfect for travel & daily use. Made with durable materials and modern design.",
    price: "৳1,250.00",
    liveLink: "#",
    category: "Blog Website",
  },
];

const categories = [
  { id: 1, name: "E-commerce Website" },
  { id: 2, name: "Portfolio Website" },
  { id: 3, name: "Blog Website" },
  { id: 4, name: "Learning Management" },
  { id: 5, name: "Business Website" },
  { id: 6, name: "News & Magazine" },
];

const Cart = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards = selectedCategory === "All"
    ? cardData
    : cardData.filter(card => card.category === selectedCategory);

  return (
    <div className="bg-gray-100 px-4 my-12 py-16 font-poppins">
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
          <span className="text-[4.5rem] relative z-40 outfit">DREAM WEBSITE</span>
        </h1>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mt-8 outfit flex-wrap">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
            selectedCategory === "All"
              ? "bg-[#00DDB3] text-white rounded-md"
              : "bg-white text-[#00DDB3] border rounded-md border-[#00DDB3]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
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

      {/* Card Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="relative w-[400px] transition-all duration-500 ease-in-out hover:rotate-[0.3deg] hover:scale-[1.03] hover:shadow-2xl rounded-2xl group perspective"
          >
            {/* Card Inner Container */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-5 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-visible">
                <img
                  src={card.image}
                  alt="thumbnail"
                  className="absolute top-0 left-0 h-full w-full object-cover rounded-xl transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="mt-5 space-y-2 text-left">
                <h2 className="text-xl font-bold text-[#6A67CE]">{card.title}</h2>
                <p className="text-sm text-gray-600">{card.description}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">{card.price}</p>
              </div>

              {/* Button Section */}
              <div className="flex justify-between items-center mt-2">
                <button className="text-xs font-bold px-4 py-2 rounded-md bg-[#f9004d] text-white hover:bg-[#e20044] transition">
                  Buy Now
                </button>
                <a
                  href={card.liveLink}
                  className="text-xs px-4 py-2 rounded-xl text-[#f9004d] hover:underline transition"
                >
                  View Live →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
