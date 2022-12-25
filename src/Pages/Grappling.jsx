import React from "react";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet-async";

const images = [
  { url: "/./img/grappling/1.jpg", caption: "" },
  { url: "/./img/grappling/2.jpg", caption: "" },
  { url: "/./img/grappling/3.jpg", caption: "" },
  { url: "/./img/grappling/4.jpg", caption: "" },
  { url: "/./img/grappling/5.jpg", caption: "" },
  { url: "/./img/grappling/6.jpg", caption: "" },
];

const Grappling = () => {
  return (
    <>
      <Helmet>
        <title>
        Trainiere das Grappling mit dem brasilianischen Top-Team.
        </title>
        <meta
          name="description"
          content="Trainiere das Grappling mit dem brasilianischen Top-Team."
        />
        <link rel="canonical" href="/Grappling" />
      </Helmet>
      <div>
        <div className="flex items-center justify-center bg-[url(/./img/bjj-belt-small.png)] md:bg-[url(/./img/bjj-belt-phone.png)] lg:bg-[url(/./img/bjj-belt.png)] bg-no-repeat bg-cover md:bg-cover min-h-[200px] my-auto">
          <h1
            data-aos="fade-down"
            data-aos-delay="700"
            className="text-[3.5rem] md:text-[5rem] text-center font-normal text-white"
          >
            GRAPPLING
          </h1>
        </div>
        <div className="bg-[url(/./img/BTT-bg.png)] bg-fill">
          <div className="flex flex-col-reverse lg:flex-row gap-y-8 min-h-[700px] w-full mx-auto">
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="overflow-hidden h-full w-full lg:w-3/6"
            >
              <img
                src="/./img/grappling/2.jpg"
                alt="1"
                className="h-[700px] hover:scale-120 object-cover w-full"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="text-white md:text-justify p-4 w-full lg:w-3/6"
            >
              <h2 className="text-5xl md:text-6xl mt-16 mb-[3rem] text-center">
                WAS IST GRAPPLING?
              </h2>
              <p className="text-lg md:text-xl px-8 md:px-24">
                Grappling, im Nahkampf, beschreibt Sportarten, die darin
                bestehen, den Gegner zu greifen oder zu ergreifen. Grappling
                wird aus nächster Nähe verwendet, um einen körperlichen Vorteil
                gegenüber einem Gegner zu erlangen, entweder durch Auferlegen
                einer Position oder durch Verursachen von Verletzungen.
                Grappling ist ein weit gefasster Begriff, der viele Disziplinen
                umfasst. Diese verschiedenen Kampfkünste können sowohl als
                Kampfsport als auch zur Selbstverteidigung ausgeübt werden.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-8 min-h-[700px] w-full mx-auto">
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="text-white md:text-justify p-4 w-full flex items-center lg:w-3/6"
            >
              <p className="text-lg md:text-xl px-8 md:px-24">
                Grappling beinhaltet meistens kein Schlagen oder den Einsatz von
                Waffen. Einige Kampfstile oder Kampfkünste, die besonders für
                ihre Grappling-Techniken bekannt sind, lehren jedoch Taktiken,
                die Schläge und Waffen beinhalten, entweder neben dem Grappling
                oder in Kombination damit. Grappling erschien in den 1950er
                Jahren. Grappling-Techniken können grob in Clinch-Kämpfe
                unterteilt werden; Takedowns und Würfe; Submission Holds und
                Pinning oder Kontrolltechniken; und Sweeps, Umkehrungen, Umsätze
                und Fluchten.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="overflow-hidden w-full lg:w-3/6"
            >
              <img
                src="/./img/grappling/1.jpg"
                alt="1"
                className="h-[700px] hover:scale-120 object-cover w-full"
              />
            </div>
          </div>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Grappling;
