import React, { useState } from "react";
// components
import Header from "../components/Header";
import Bjj from "../components/Bjj";
import Mestre from "../components/Mestre";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Schedule from "../components/Schedule";
import Nav from "../components/Nav";
import Footer from "../components/Footer"

const Home = () => {
  const [homeNav, setHomeNav] = useState(true)

  return (
    <div className="overflow-x-hidden">
      <Nav home={homeNav}/>
      <Header />
      <Mestre />
      <Bjj />
      <Schedule />
      <div className="grid grid-cols-1 xl:grid-cols-2 bg-[#191919]">
        <Map />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
