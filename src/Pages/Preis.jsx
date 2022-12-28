import React, { useState } from "react";
import Map from "../components/Map";
import Contact from "../components/Contact";
import { BsPinFill, BsMailbox2, BsFillTelephoneFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const Preis = () => {
  const [timespan, setTimespan] = useState(true);

  return (
    <>
      <Helmet>
        <title>Ein Training kostenlos.
        </title>
        <meta
          name="description"
          content="Ein Training kostenlos."
        />
        <link rel="canonical" href="/Preis" />
      </Helmet>
      <div className="pt-[96px]">
        <section className="py-12 sm:py-16 lg:py-20 bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)]">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="w-full text-center sm:text-left"
            >
              <h1 className="text-3xl font-bold text-[#252525] dark:text-[#e0e0e0] sm:text-4xl xl:text-5xl text-center w-full">
                Kommen Sie und versuchen Sie mit uns zu trainieren <br /> (1 Tag
                gratis)
              </h1>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="900"
              className="block sm:inline-flex px-5 py-4 w-[400px] rounded-lg border border-black items-center justify-between mt-12"
            >
              <span className="text-sm font-bold tracking-widest text-[#252525] dark:text-[#e0e0e0] uppercase font-pj">
                6 Monate
              </span>

              <button
                type="button"
                onClick={() => setTimespan(!timespan)}
                className="relative inline-flex flex-shrink-0 w-20 h-4 transition-colors duration-200 ease-in-out bg-[#bababa] rounded-lg cursor-pointer focus:outline-none"
                role="switch"
              >
                <span
                  aria-hidden="true"
                  className={`inline-block w-10 h-4 transition duration-200 ease-in-out ${
                    timespan ? "translate-x-10" : "translate-x-0"
                  } dark:bg-[#252525] bg-[#252525] rounded shadow pointer-events-none`}
                ></span>
              </button>

              <span className="text-sm font-bold tracking-widest text-[#252525] dark:text-[#e0e0e0] uppercase font-pj">
                12 Monate
              </span>
            </div>

            <div className="grid grid-cols-1 px-12 mt-8 text-center sm:text-left sm:px-0 gap-x-12 gap-y-16 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4">
              <div data-aos="fade-right" data-aos-delay="900">
                <h3 className="text-xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                  Kinder bis 14. J.
                </h3>
                <p className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  {timespan ? "550€" : "330€"} Auf einmal
                </p>
                <div className="flex items-end justify-center mt-6 sm:justify-start">
                  <p className="text-5xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                    {timespan ? "50€" : "60€"}
                  </p>
                  <p className="text-lg font-medium text-gray-400 font-pj">
                    /mo
                  </p>
                </div>
                <div className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  <p>* {timespan ? "Bei 12" : "Bei 6"} Monate bindung</p>
                </div>

                <svg
                  className="w-auto h-4 mx-auto mt-8 text-gray-300 sm:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  />
                </svg>

                <ul className="mt-6 space-y-3 text-base font-medium text-[#252525] dark:text-[#e0e0e0]">
                <li className="flex items-center text-[#FF0000]/75 dark:text-[#FF0000]/50">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    70% Rabatt
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Brazilian Jiu-Jitsu
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Grappling
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    MMA
                  </li>
                </ul>

                <div className="relative inline-flex mt-10 group">
                  <div
                    className="absolute duration-1000 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                    style={{
                      background:
                        "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #FF6644 73.33%, #EBFF70 99.34%)",
                    }}
                  ></div>
                </div>
              </div>

              <div data-aos="fade-right" data-aos-delay="600">
                <h3 className="text-xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                  SchülerInnen bis 25. J.
                </h3>
                <p className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  {timespan ? "770€" : "450€"} Auf einmal
                </p>
                <div className="flex items-end justify-center mt-6 sm:justify-start">
                  <p className="text-5xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                    {timespan ? "70€" : "80€"}
                  </p>
                  <p className="text-lg font-medium text-gray-400 font-pj">
                    /mo
                  </p>
                </div>
                <div className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  <p>* {timespan ? "Bei 12" : "Bei 6"} Monate bindung</p>
                </div>

                <svg
                  className="w-auto h-4 mx-auto mt-8 text-gray-300 sm:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  />
                </svg>

                <ul className="mt-6 space-y-3 text-base font-medium text-[#252525] dark:text-[#e0e0e0]">
                  <li className="flex items-center text-[#FF0000]/75 dark:text-[#FF0000]/50">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    60% Rabatt
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Brazilian Jiu-Jitsu
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Grappling
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    MMA
                  </li>
                </ul>
              </div>

              <div data-aos="fade-left" data-aos-delay="600">
                <h3 className="text-xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                  Erwachsene
                </h3>
                <p className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  {timespan ? "940€" : "540€"} Auf einmal
                </p>
                <div className="flex items-end justify-center mt-6 sm:justify-start">
                  <p className="text-5xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                    {timespan ? "85€" : "95€"}
                  </p>
                  <p className="text-lg font-medium text-gray-400 font-pj">
                    /mo
                  </p>
                </div>
                <div className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  <p>* {timespan ? "Bei 12" : "Bei 6"} Monate bindung</p>
                </div>

                <svg
                  className="w-auto h-4 mx-auto mt-8 text-gray-300 sm:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  />
                </svg>

                <ul className="mt-6 space-y-3 text-base font-medium text-[#252525] dark:text-[#e0e0e0]">
                  <li className="flex items-center text-[#FF0000]/75 dark:text-[#FF0000]/50">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    50% Rabatt
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Brazilian Jiu-Jitsu
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Grappling
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    MMA
                  </li>
                </ul>
              </div>

              <div data-aos="fade-left" data-aos-delay="900">
                <h3 className="text-xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                  10er Block
                </h3>
                <p className="mt-3 text-sm font-normal text-[#FF0000]/75 dark:text-[#FF0000]/50 font-pj">
                  {timespan ? "1800€" : "900€"} Auf einmal
                </p>
                <div className="flex items-end justify-center mt-6 sm:justify-start">
                  <p className="text-5xl font-bold text-[#252525] dark:text-[#e0e0e0] font-pj">
                    150€
                  </p>
                  <p className="text-lg font-medium text-gray-400 font-pj">
                    /mo
                  </p>
                </div>
                <div className="mt-3 text-sm font-normal text-transparent font-pj">
                  <p>* {timespan ? "Bei 12" : "Bei 6"} Monate bindung</p>
                </div>

                <svg
                  className="w-auto h-4 mx-auto mt-8 text-gray-300 sm:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  />
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  />
                </svg>

                <ul className="mt-6 space-y-3 text-base font-medium text-[#252525] dark:text-[#e0e0e0]">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Brazilian Jiu-Jitsu
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Grappling
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    MMA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="bg-[#e0e0e0] dark:bg-[#191919] flex justify-between text-[#252525] dark:text-white text-center text-sm md:text-xl py-2">
            <p className="flex justify-around flex-wrap sliding-text w-screen py-1">
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
                  <BsMailbox2 className="text-[#FE0000] dark:text-[#FE0000]" />
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

export default Preis;
