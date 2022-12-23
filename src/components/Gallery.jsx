import React from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {url: "/./img/bjj/1.jpg", caption: ''},
  {url: "/./img/bjj/3.jpg", caption: ''},
  {url: "/./img/bjj/4.jpg", caption: ''},
  {url: "/./img/bjj/5.jpg", caption: ''},
  {url: "/./img/bjj/6.jpg", caption: ''},
  {url: "/./img/bjj/7.jpg", caption: ''},
  {url: "/./img/bjj/8.jpg", caption: ''},
  {url: "/./img/bjj/9.jpg", caption: ''},
  {url: "/./img/bjj/10.jpg", caption: ''},
  {url: "/./img/bjj/unnamed.jpg", caption: ''},
  {url: "/./img/bjj/unnamed1.jpg", caption: ''},
  {url: "/./img/bjj/unnamed2.jpg", caption: ''},
  {url: "/./img/bjj/unnamed3.jpg", caption: ''},
  {url: "/./img/bjj/unnamed4.jpg", caption: ''},
  {url: "/./img/bjj/unnamed5.jpg", caption: ''},
  {url: "/./img/bjj/unnamed8.jpg", caption: ''},
  {url: "/./img/bjj/unnamed9.jpg", caption: ''},
  {url: "/./img/bjj/unnamed10.jpg", caption: ''},
  {url: "/./img/bjj/unnamed11.jpg", caption: ''},
  {url: "/./img/bjj/unnamed12.jpg", caption: ''},
  {url: "/./img/bjj/unnamed13.jpg", caption: ''},
  {url: "/./img/bjj/unnamed15.jpg", caption: ''},
  {url: "/./img/bjj/unnamed16.jpg", caption: ''},
];

const Gallery = () => {
  return (
    <div className="bg-[url(/./img/BTT-bg.png)] bg-cover p-8">
      <h1 className="text-5xl md:text-6xl mt-10 mb-[3rem] text-center text-white">BJJ GALERIE</h1>
      <div className="slide-container min-h-[400px] md:min-h-[600px]">
        <Fade>
          {images.map((slideImage, index) => (
            <div className="each-fade min-h-[400px] md:min-h-[600px]" key={index}>
              <div
                className="min-h-[400px] md:min-h-[600px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
    // <Carousel className="h-screen" autoPlay={true} infiniteLoop={true}>
    //     {images.map((single, index) => (
    //         <div key={index} className="h-screen">
    //             <img src={`${single}`} alt={index} className="object-cover"/>
    //         </div>
    //     ))}
    //   {/* <div>
    //     <img src="assets/1.jpeg" />
    //     <p className="legend">Legend 1</p>
    //   </div>
    //   <div>
    //     <img src="assets/2.jpeg" />
    //     <p className="legend">Legend 2</p>
    //   </div>
    //   <div>
    //     <img src="assets/3.jpeg" />
    //     <p className="legend">Legend 3</p>
    //   </div> */}
    // </Carousel>
  );
};

export default Gallery;
