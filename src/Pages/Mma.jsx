import React from "react";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet-async";

const images = [
  { url: "/./img/mma/1.jpg", caption: "" },
  { url: "/./img/mma/3.jpg", caption: "" },
  { url: "/./img/mma/4.jpg", caption: "" },
  { url: "/./img/mma/5.jpg", caption: "" },
  { url: "/./img/mma/6.jpg", caption: "" },
  { url: "/./img/mma/7.jpg", caption: "" },
  { url: "/./img/mma/8.jpg", caption: "" },
  { url: "/./img/mma/9.jpg", caption: "" },
  { url: "/./img/mma/11.jpg", caption: "" },
  { url: "/./img/mma/12.jpg", caption: "" },
  { url: "/./img/mma/13.jpg", caption: "" },
  { url: "/./img/mma/14.jpg", caption: "" },
  { url: "/./img/mma/15.jpg", caption: "" },
  { url: "/./img/mma/16.jpg", caption: "" },
  { url: "/./img/mma/17.jpg", caption: "" },
  { url: "/./img/mma/18.jpg", caption: "" },
];

const Mma = () => {
  return (
    <>
      <Helmet>
        <title>
        Train Mixed Martial Arts with the Brazilian Top Team.
        </title>
        <meta
          name="description"
          content="Train Mixed Martial Arts with the Brazilian Top Team."
        />
        <link rel="canonical" href="/MMA" />
      </Helmet>
      <div>
        <div className="flex items-center justify-center bg-[url(/./img/mma-belt-small.png)] md:bg-[url(/./img/mma-belt-phone.png)] lg:bg-[url(/./img/mma-belt.png)] bg-no-repeat bg-cover md:bg-cover min-h-[200px] my-auto">
          <h1
            data-aos="fade-down"
            data-aos-delay="700"
            className="text-[3.5rem] md:text-[5rem] text-center font-normal text-white"
          >
            MIXED MARTIAL ARTS
          </h1>
        </div>
        <div className="bg-[url(/./img/BTT-bg.png)] bg-fill">
          <div className="flex flex-col-reverse lg:flex-row gap-y-8 min-h-[700px] w-full mx-auto">
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="overflow-hidden h-full w-full lg:w-3/6 flex flex-col justify-center"
            >
              <img
                src="/./img/mma/17.jpg"
                alt="1"
                className="h-[700px] hover:scale-120 object-cover w-full"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="text-white md:text-justify p-4 w-full lg:w-3/6"
            >
              <h2 className="text-5xl xl:text-6xl mt-16 mb-[3rem] text-center">
                WAS IST MMA?
              </h2>
              <p className="text-lg md:text-xl px-8 lg:px-16 xl:px-24 2xl:px-32">
                Mixed Martial Arts (MMA), manchmal auch als Cage Fighting, No
                Holds Barred (NHB) und Ultimate Fighting bezeichnet und
                ursprünglich als Vale Tudo bezeichnet, ist ein
                Vollkontakt-Kampfsport, der auf Schlagen, Grappling und
                Bodenkampf basiert und Techniken beinhaltet aus verschiedenen
                Kampfsportarten aus der ganzen Welt. Die erste dokumentierte
                Verwendung des Begriffs Mixed Martial Arts erfolgte 1993 in
                einer Rezension von UFC 1 durch den Fernsehkritiker Howard
                Rosenberg. Die Frage, wer den Begriff tatsächlich geprägt hat,
                ist umstritten.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-8 min-h-[700px] w-full mx-auto">
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="text-white p-4 w-full lg:w-3/6 flex flex-col justify-center"
            >
              <h2 className="text-5xl xl:text-6xl mt-10 mb-[3rem] text-center">
                BJJ IN MMA
              </h2>
              <ul className="list-disc text-lg md:text-xl px-8 lg:px-16 xl:px-24 2xl:px-32">
                <li className="pt-4">
                  Jiu-Jitsu baut Ihre Abwehrfähigkeiten auf
                </li>
                <p className="md:text-lg pl-4 pt-2">
                  Wenn Sie Vertrauen in Ihre defensiven Fähigkeiten haben, ist
                  es viel einfacher, ein Risiko einzugehen und anzugreifen, da
                  Sie wissen, dass Sie die Fähigkeiten haben, um herauszukommen,
                  wenn Sie in einer Unterwerfung oder einer schlechten Position
                  landen.
                </p>
                <li className="pt-4">
                  Jiu-Jitsu hilft Ihnen, die Distanz zu kontrollieren
                </li>
                <p className="md:text-lg pl-4 pt-2">
                  Es ist von unschätzbarem Wert zu wissen, wie man die Frames
                  und die Nähe eines Gegners aufschlüsselt.
                </p>
                <li className="pt-4">
                  Jiu-Jitsu ermöglicht es Ihnen, den Kampf zu beenden
                </li>
                <p className="md:text-lg pl-4 pt-2">
                  Eine großartige Verteidigung zu haben, zu wissen, wie man die
                  Distanz kontrolliert und Kämpfe beenden kann, sind drei
                  wichtige Gründe, warum Jiu-Jitsu eine wesentliche Fähigkeit
                  für gemischte Kampfkünste ist.
                </p>
              </ul>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="overflow-hidden w-full lg:w-3/6"
            >
              <img
                src="/./img/mma/18.jpg"
                alt="1"
                className="h-[700px] lg:h-[900px] hover:scale-120 object-cover w-full"
              />
            </div>
          </div>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Mma;
