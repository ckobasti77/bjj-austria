import React from "react";
// import Nav from "../components/Nav";

const Grappling = () => {
  return (
    <div className="bg-[#191919]">
      {/* <Nav /> */}
      <section className="relative bg-[url('./img/bjj_wallpaper.jpg')] bg-cover bg-center bg-no-repeat h-[600px]">
        <div className="absolute inset-0 sm:bg-transparent"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white text-center">GRAPPLING</h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              Grappling, im Nahkampf, beschreibt Sportarten, die darin bestehen,
              den Gegner zu greifen oder zu ergreifen. Grappling wird aus
              nächster Nähe verwendet, um einen körperlichen Vorteil gegenüber
              einem Gegner zu erlangen, entweder durch Auferlegen einer Position
              oder durch Verursachen von Verletzungen. Grappling ist ein weit
              gefasster Begriff, der viele Disziplinen umfasst. Diese
              verschiedenen Kampfkünste können sowohl als Kampfsport als auch
              zur Selbstverteidigung ausgeübt werden. Grappling-Wettbewerbe
              beinhalten oft Takedowns und Bodenkontrolle und können enden, wenn
              ein Teilnehmer eine Niederlage eingesteht, auch bekannt als
              Submission oder Tap Out.
              
              Grappling beinhaltet meistens kein
              Schlagen oder den Einsatz von Waffen. Einige Kampfstile oder
              Kampfkünste, die besonders für ihre Grappling-Techniken bekannt
              sind, lehren jedoch Taktiken, die Schläge und Waffen beinhalten,
              entweder neben dem Grappling oder in Kombination damit.

              Grappling erschien in den 1950er Jahren.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grappling;
