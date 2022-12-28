import React from "react";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet-async";

const images = [
  { url: "/./img/BTT/1.jpeg", caption: "" },
  { url: "/./img/BTT/2.jpg", caption: "" },
  { url: "/./img/BTT/3.jpg", caption: "" },
  { url: "/./img/BTT/4.jpg", caption: "" },
  { url: "/./img/BTT/5.jpg", caption: "" },
  { url: "/./img/BTT/6.jpg", caption: "" },
  { url: "/./img/BTT/7.jpg", caption: "" },
  { url: "/./img/BTT/mario.jpg", caption: "" },
  { url: "/./img/BTT/Ricardo.jpg", caption: "" },
];

const BTT = () => {
  return (
    <>
      <Helmet>
        <title>Das beste Jiu-Jitsu-Team Österreichs.</title>
        <meta name="description" content="Das beste Jiu-Jitsu-Team Österreichs." />
        <link rel="canonical" href="/BTT" />
      </Helmet>
      <div className="pt-[96px]">
        <div className="flex items-center justify-center bg-[url(/./img/BTT/btt-belt-small.png)] md:bg-[url(/./img/BTT/btt-belt-phone.png)] lg:bg-[url(/./img/BTT/btt-belt.png)] bg-no-repeat bg-cover min-h-[200px] my-auto">
          <h1
            data-aos="fade-down"
            data-aos-delay="700"
            className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-center font-normal text-white"
          >
            BRAZILIAN TOP TEAM
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-8 text-justify bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] bg-no-repeat bg-fill text-white text-2xl">
          <h2
            data-aos="fade-left"
            data-aos-delay="1000"
            className="text-5xl md:text-6xl mt-4 mb-[3rem] text-center text-[#252525] dark:text-[#e0e0e0]"
          >
            ÜBER
          </h2>
          <p data-aos="fade-right" data-aos-delay="1000" className="text-[#252525] dark:text-[#e0e0e0] text-center xl:text-left mx-0 xl:mx-64">
            Das Brazilian Top Team (BTT) ist eine Akademie, die sich auf
            Brazilian Jiu Jitsu und Mixed Martial Arts spezialisiert hat. Es
            wurde im April 2000 von Murilo Bustamante, Ricardo Libório, Mário
            Sperry und Luis Roberto Duarte, ehemaligen Mitgliedern der Carlson
            Gracie Academy, gegründet, um neue Trainingstechniken für Brazilian
            Jiu Jitsu, Submission Grappling und Mixed Martial Arts zu entwickeln
            und zu schaffen.
          </p>
        </div>
        <div className="flex justify-between px-8 bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] bg-fill py-8">
          <div className="flex flex-col-reverse lg:flex-row gap-y-8 gap-x-16 min-h-[700px] w-full mx-auto">
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="overflow-hidden h-full w-full lg:w-5/12"
            >
              <img
                src="/./img/BTT/murilo.jpg"
                alt="1"
                className="h-[700px] murilo object-cover w-full"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="text-white md:text-justify my-auto w-full lg:w-7/12"
            >
              <h2 className="text-5xl md:text-6xl mt-4 mb-[3rem] text-center text-[#252525] dark:text-[#e0e0e0]">
                Murilo Bustamante
              </h2>
              <p className="text-lg md:text-2xl text-[#252525] dark:text-[#e0e0e0]">
                Murilo Bustamante (* 30. Juli 1966 in Rio de Janeiro) ist ein
                pensionierter brasilianischer Mixed Martial Artist und
                ehemaliger UFC-Champion im Mittelgewicht. Er ist einer der
                Gründer des brasilianischen Top-Teams und ist der aktuelle
                Anführer. Er ist nicht nur der zweite UFC-Champion im
                Mittelgewicht, sondern hat auch bei PRIDE gekämpft und es bis
                zum Pride Shockwave 2005-Finale geschafft und auch in Yarennoka
                gekämpft.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-8 bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] bg-fill py-8">
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-y-8 gap-x-16 min-h-[700px] w-full mx-auto">
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="overflow-hidden h-full w-full lg:w-5/12"
            >
              <img
                src="/./img/bjj/1.jpg"
                alt="1"
                className="h-[825px] lg:h-[1000px] murilo object-cover w-full"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="text-white md:text-justify my-auto w-full lg:w-7/12"
            >
              <h2 className="text-5xl md:text-6xl mb-[3rem] text-center text-[#252525] dark:text-[#e0e0e0]">
                Fernando Paulon
              </h2>
              <p className="text-lg md:text-2xl text-[#252525] dark:text-[#e0e0e0]">
                Fernando Paulon ist ein Schwarzgurt im 5. Grad im Brazilian
                Jiu-Jitsu unter der Ausbildung des legendären Mixed Martial
                Artists Murilo Bustamante. Im Alter von 16 Jahren schrieb sich
                Fernando Paulon an der Carlson Gracie School ein und trainierte
                im Anschluss im Brazilian Top Team, welches vom ehemaligen UFC
                Mittelgewicht Champion Murilo Bustamante gegründet und geleitet
                wurde. Paulon ist somit eines der längsten und erfahrensten
                Mitglieder des Brazilian Top Teams. Im Laufe seines Lebens
                trainierte Fernando Paulon mit den besten Kämpfern der Welt,
                darunter Rodrigo Minotauro, Vitor Belfort oder Ricardo Arona und
                entwickelte sich und seine Jiu-Jitsu Technik hervorragend
                weiter. Durch die zahlreiche Teilnahme an weltweiten namhaften
                Wettkämpfen im Jiu-Jitsu, Grappling und MMA konnte sich Paulon
                immer wieder beweisen. Nicht zuletzt trainierte er die besten
                Kämpfer Österreichs wie Nandor Guelmino, den ersten
                österreichischen UFC Kämpfer oder Aleksander Rakic, ein Top 10
                UFC Kämpfer. 2013 erhielt Fernando Paulon die Auszeichnung des
                Top Trainer des Jahres in Österreich.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-8 text-justify bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] bg-fill text-white text-2xl">
          <h2
            data-aos="fade-left"
            data-aos-delay="1000"
            className="text-5xl md:text-6xl mt-4 mb-[3rem] text-center text-[#252525] dark:text-[#e0e0e0]"
          >
            BTT Geschichte
          </h2>
          <p data-aos="fade-right" data-aos-delay="1000" className="text-[#252525] dark:text-[#e0e0e0] text-center xl:text-left mx-0 xl:mx-64">
            Das Brazilian Top Team hat seinen Ursprung bei Carlson Gracie und
            seiner Akademie. Gracie war ein Innovator im brasilianischen
            Jiu-Jitsu, er und seine Schüler hatten viele Techniken und
            Strategien im BJJ erfunden und verfeinert und in einem sehr
            aggressiven und körperlichen Stil gekämpft und bei Turnieren viel
            Erfolg erzielt.
            <br />
            <br />
            Seine Akademie war auch ein Pionier der gemischten Kampfkünste, eine
            der ersten Akademien, die ein spezialisiertes MMA-Programm ins Leben
            rief, und viele seiner Schüler reisten an, um BJJ bei vielen
            MMA-Veranstaltungen auf der ganzen Welt zu vertreten. Es gab jedoch
            Streitigkeiten zwischen Gracie und seinen Schülern, die dazu
            führten, dass sich viele von seiner Vormundschaft lösten und ihre
            eigenen Akademien gründeten. Murilo Bustamante, Ricardo Libório,
            Mário Sperry und Luis Roberto Duarte gründeten im Jahr 2000 das
            Brazilian Top Team mit dem Ziel, ein erstklassiges brasilianisches
            Jiu-Jitsu-Fitnessstudio zu schaffen und in der aufstrebenden
            Sportart Mixed Martial Arts zu trainieren.
          </p>
        </div>
        <Gallery images={images} />
      </div>
    </>
  );
};

export default BTT;
