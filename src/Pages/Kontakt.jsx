import React from "react";
import Contact from "../components/Contact";
import Map from "../components/Map";
import { BsPinFill, BsMailbox2, BsFillTelephoneFill } from "react-icons/bs";

const Kontakt = () => {
  return (
    <div>
      <div className="bg-[#191919] flex justify-between text-white text-center text-sm">
        <p className="flex justify-around flex-wrap sliding-text w-screen py-1">
          <span className="flex items-center"><span className="mx-1"><BsPinFill className="fill-[#FE0000]"/></span><span className="mx-1">Diefenbachgasse 46, 1150 Wien, Austria</span></span>
          <span className="flex items-center"><span className="mx-1"><BsMailbox2 className="fill-[#FE0000]"/></span><span className="mx-1">bttwien@gmail.com</span></span>
          <span className="flex items-center"><span className="mx-1"><BsFillTelephoneFill className="fill-[#FE0000]"/></span><span className="mx-1">+43 (0) 6889623179</span></span>
        </p>     
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 bg-[#191919]">
        <Map />
        <Contact />
      </div>
    </div>
  );
};

export default Kontakt;
