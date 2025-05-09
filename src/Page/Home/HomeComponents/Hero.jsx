import React, { useState, useEffect } from "react";
import omgg from "../../../assets/img/heroimg.png"
import bg from "../../../assets/img/falah/sakib.jpg"
const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Layer data
  const layers = [
    {
      src: "https://muffingroup.com/betheme/assets/images/bebuilder-topbar.svg",
      style: "top-[10%] left-[5%] w-40",
      speed: 1.0,
      floatClass: "float-slow",
    },
    {
      src: "https://muffingroup.com/betheme/assets/images/bebuilder-content-stores.webp",
      style: "top-[20%] right-[10%] w-48",
      speed: 1.6,
      floatClass: "float-medium",
    },
    {
      src: `${omgg}`,
      style: "bottom-[15%] left-[10%] w-36 rounded-2xl ",
      speed: 2.3,
      floatClass: "float-fast",
    },
    {
      src: "https://muffingroup.com/betheme/assets/images/bebuilder-items-woo.svg",
      style: "bottom-[10%] right-[5%] w-44",
      speed: 1.3,
      floatClass: "float-slowest",
    },
  ];

  return (
    <div
      className="relative bg-[#ECF0F3] overflow-hidden -mt-[78px] "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        height: "95vh",
        width: "100%",
      }}
    >

      {/* All images with floating animation and 3D effect */}
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`absolute z-0  hidden md:block pointer-events-none transition-transform duration-[600ms] ease-out ${layer.style}`}
          style={{
            transform: `translate(${offset.x * layer.speed}px, ${offset.y * layer.speed
              }px) rotateX(${offset.y * 0.5}deg) rotateY(${offset.x * 0.5}deg)`,
          }}
        >
          <img
            src={layer.src}
            alt={`layer-${index}`}
            className={`${layer.floatClass
              } transition-all duration-[1000ms] ease-out rounded-md`}
            style={{
              transform: "perspective(800px) translateZ(30px)",
            }}
          />
        </div>
      ))}

      {/* Hero Text Content */}
      <div className="flex justify-center h-[90vh] items-center relative z-10 ">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="outfit-semibold md:text-xl  mb-2 text-gray-50">
            Explore, Learn & Grow your Business
          </p>
          <h1
            className="font-bold leading-tight"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px white",
              fontSize: "3rem",
            }}
          >
            <span className="text-[4rem]  sm:text-[5rem] relative z-40 outfit ">
              WEBSITE &
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl   mb-6 font-extrabold text-white">
            <span className="cpr">SOFTWARE</span> DEVELOPMENT
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="btn hover:scale-105 transition">Buy Website</button>
            <button className="btn hover:scale-105 transition">Learn Programming</button>
            <button className="btn hover:scale-105 transition">Use Components</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
