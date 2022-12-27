import React from "react";
import Contact from "../components/Contact";
import Map from "../components/Map";
import { BsPinFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>
          Wenden Sie sich an den Trainer, um weitere Informationen zu erhalten.
        </title>
        <meta
          name="description"
          content="Wenden Sie sich an den Trainer, um weitere Informationen zu erhalten."
        />
        <link rel="canonical" href="/Kontakt" />
      </Helmet>
      <div className="pt-[96px]">
        <div className="bg-[#e0e0e0] dark:bg-[#191919] flex justify-between text-[#252525] dark:text-white text-center text-sm md:text-xl py-2">
          <p className="flex justify-around flex-wrap sliding-text w-screen py-1">
            <span className="flex items-center">
              <span className="mx-1">
                <BsPinFill className="fill-[#FE0000]" />
              </span>
              <span className="mx-1">
                Diefenbachgasse 46, 1150 Wien, Austria
              </span>
            </span>
            <span className="flex items-center">
              <span className="mx-1">
                <FiMail className="text-[#fe0000]" />
              </span>
              <span className="mx-1">bttwien@gmail.com</span>
            </span>
            <span className="flex items-center">
              <span className="mx-1">
                <BsFillTelephoneFill className="fill-[#FE0000]" />
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
    </>
  );
};

export default Kontakt;
