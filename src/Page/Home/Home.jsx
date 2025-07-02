import React, { useEffect } from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import SuccesHistory from "./HomeComponents/SuccesHistory";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Cart from "./HomeComponents/Cart";
import Section from "./HomeComponents/Section";

const Home = () => {
useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Hero></Hero>
      <HomeCategory />
      <Cart></Cart>
      <Section></Section>
      <WhatWeProvide />
      <SuccesHistory />



      

    </div>
  );
};

export default Home;
