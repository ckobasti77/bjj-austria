import React, { useState } from "react";
// components
import Header from "../components/Header";
import Bjj from "../components/Bjj";
import Mestre from "../components/Mestre";
import Map from "../components/Map";
import Contact from "../components/Contact";
import Schedule from "../components/Schedule";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { BsPinFill, BsMailbox2, BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Home = ({ open, setOpen, scrollToTop }) => {
  const [homeNav, setHomeNav] = useState(true);

  return (
    <>
      <Helmet>
        <title>Hol dir jetzt dein kostenloses Training!</title>
        <meta
          name="description"
          content="Hol dir jetzt dein kostenloses Training!"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="overflow-x-hidden">
        <Header />
        <Mestre />
        <Bjj scrollToTop={scrollToTop}/>
        <Schedule />
        <div>
          <div className="bg-[#e0e0e0] dark:bg-[#191919] flex justify-between text-[#252525] dark:text-white text-center text-sm md:text-xl py-2">
            <p className="flex flex-wrap justify-around sliding-text w-screen py-1">
              <span className="flex items-center">
                <span className="mx-1">
                  <BsPinFill className="fill-[#FE0000] dark:fill-[#FE0000]" />
                </span>
                <span className="mx-1">
                  Diefenbachgasse 46, 1150 Wien, Austria
                </span>
              </span>
              <span className="flex items-center">
                <span className="mx-1">
                  <FiMail className="text-[#FE0000] dark:text-[#FE0000]" />
                </span>
                <span className="mx-1">bttwien@gmail.com</span>
              </span>
              <span className="flex items-center">
                <span className="mx-1">
                  <BsFillTelephoneFill className="fill-[#FE0000] dark:fill-[#FE0000]" />
                </span>
                <span className="mx-1">+43 (0) 6889623179</span>
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 bg-[#e0e0e0] dark:bg-[#191919]">
            <Map />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
