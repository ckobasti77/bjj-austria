import React from "react";
import firstpic from "/./img/mestre.jpg";
import secondpic from "/./img/bjj/3.jpg";
import thirdpic from "/./img/bjj/unnamed10.jpg";
import Gallery from "./Gallery";

const images = [
  { url: "/./img/bjj/1.jpg", caption: "" },
  { url: "/./img/bjj/3.jpg", caption: "" },
  { url: "/./img/bjj/unnamed10.jpg", caption: "" },
];

const Header = () => {
  return (
    <div className="mt-[96px]">
      <Gallery images={images} noCaption={'nocaption'}/>
    </div>
  );
};

export default Header;
