import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import SuccesHistory from "./HomeComponents/SuccesHistory";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Cart from "./HomeComponents/Cart";
import Section from "./HomeComponents/Section";

const Home = () => {

  return (
    <div className="">
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
