import {
  FaTruck,
  FaStar,
  FaGift,
  FaFire,
  FaRegLightbulb,
  FaHeart,
} from "react-icons/fa";
import { PiNewspaperClippingBold } from "react-icons/pi";

const HomeCategory = () => {
  // Titles and Icons mapped professionally
  const categories = [
    {
      icon: <FaTruck className="cpr text-6xl" />,
      title: "Fast Delivery",
      description: "Get your orders delivered within 24 hours.",
    },
    {
      icon: <FaStar className="cpr text-6xl" />,
      title: "Top Rated",
      description: "Trusted by thousands of happy customers.",
    },
    {
      icon: <PiNewspaperClippingBold className="cpr text-6xl" />,
      title: "New Arrival",
      description: "Explore our latest product collection.",
    },
    {
      icon: <FaFire className="cpr text-6xl" />,
      title: "Best Seller",
      description: "Top-selling items loved by everyone.",
    },
    {
      icon: <FaGift className="cpr text-6xl" />,
      title: "Limited Offer",
      description: "Grab exclusive deals before they're gone.",
    },
    {
      icon: <FaHeart className="cpr text-6xl" />,
      title: "Customer Favorite",
      description: "Highly recommended by our users.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {category.icon}
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
              {category.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
