import React from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = ({ images, noCaption }) => {
  return (
    <div className="bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] bg-fill p-8">
      <h1 data-aos='fade-left' data-aos-delay='700' className="text-5xl md:text-6xl mt-10 mb-[3rem] text-center text-[#252525] dark:text-[#e0e0e0]">{noCaption === 'nocaption' ? '' : 'GALERIE'}</h1>
      <div data-aos='fade-right' data-aos-delay='700' className="slide-container min-h-[400px] md:min-h-[600px]">
        <Fade>
          {images.map((slideImage, index) => (
            <div className="each-fade min-h-[400px] md:min-h-[600px]" key={index}>
              <div
                className="min-h-[600px] md:min-h-[800px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Gallery;
