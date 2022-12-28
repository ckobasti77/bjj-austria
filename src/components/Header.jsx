import React from "react";
import firstpic from "/./img/mestre.jpg";
import secondpic from "/./img/bjj/3.jpg";
import thirdpic from "/./img/bjj/unnamed10.jpg";
import Gallery from "./Gallery";

const images = [
  // '/./img/mestre.jpg',
  // '/./img/bjj/3.jpg',
  // '/./img/bjj/unnamed10.jpg'
  { url: "/./img/mestre.jpg", caption: "" },
  { url: "/./img/bjj/3.jpg", caption: "" },
  { url: "/./img/bjj/unnamed10.jpg", caption: "" },
];

const Header = () => {
  return (
    // <div id="indicators-carousel" className="z-[99999] mt-[96px] relative h-[67vh] lg:h-[87vh] py-[1vh] bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] bg-cover bg-no-repeat" data-carousel="slide">
    //     <div className="relative min-h-[65vh] lg:min-h-[85vh] py-[1vh] overflow-hidden rounded-lg md:h-96">
    //          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
    //              <img src={firstpic} className="absolute block object-fit h-full rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Brazilian Top Team Austria Trainer" />
    //          </div>
    //          <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src={secondpic} className="absolute block object-fit h-full rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Brazilian Jiu Jitsu" />
    //          </div>
    //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                <img src={thirdpic} className="absolute block object-fit h-full rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Brazilian Jiu Jitsu" />
    //         </div>
    //     </div>
    //     <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    //         <button type="button" className="w-3 h-3 rounded-full bg-[#252525]/75 hover:bg-[#000] dark:bg-[#e0e0e0]/75 dark:hover:bg-[#fff]" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //         <button type="button" className="w-3 h-3 rounded-full bg-[#252525]/75 hover:bg-[#000] dark:bg-[#e0e0e0]/75 dark:hover:bg-[#fff]" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //         <button type="button" className="w-3 h-3 rounded-full bg-[#252525]/75 hover:bg-[#000] dark:bg-[#e0e0e0]/75 dark:hover:bg-[#fff]" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //     </div>
    //     <button type="button" className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //         <span className="z-[9999999] inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#252525] dark:bg-white/30 group-hover:bg-[#000] dark:group-hover:bg-[#fff] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    //             <span className="sr-only">Previous</span>
    //         </span>
    //     </button>
    //     <button type="button" className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //         <span className="z-[9999999] inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#252525] dark:bg-white/30 group-hover:bg-[#000] dark:group-hover:bg-[#fff] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    //             <span className="sr-only">Next</span>
    //         </span>
    //     </button>
    // </div>
    <div className="mt-[96px]">
      <Gallery images={images} noCaption={'nocaption'}/>
    </div>
  );
};

export default Header;
