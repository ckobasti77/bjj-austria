import React from "react";
import Gallery from "../components/Gallery";

const images = [
    { url: "/./img/BTT/1.jpeg", caption: "" },
    { url: "/./img/BTT/2.jpg", caption: "" },
    { url: "/./img/BTT/3.jpg", caption: "" },
    { url: "/./img/BTT/4.jpg", caption: "" },
    { url: "/./img/BTT/5.jpg", caption: "" },
    { url: "/./img/BTT/6.jpg", caption: "" },
    { url: "/./img/BTT/7.jpg", caption: "" },
  ];

const BTT = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[url(/./img/BTT/btt-belt-small.png)] md:bg-[url(/./img/BTT/btt-belt-phone.png)] lg:bg-[url(/./img/BTT/btt-belt.png)] bg-no-repeat bg-cover md:bg-cover min-h-[200px] my-auto">
        <h1 className="text-[3.5rem] md:text-[5rem] text-center font-normal text-white">
          BRAZILIAN TOP TEAM
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center px-8 lg:px-32 py-8 text-justify bg-[url(/./img/BTT-bg.png)] bg-no-repeat bg-cover text-white text-2xl">
        <h2 className="text-5xl md:text-6xl mt-4 mb-[3rem] text-center">
          ÜBER
        </h2>
        <p>
          Das Brazilian Top Team (BTT) ist eine Akademie, die sich auf Brazilian
          Jiu Jitsu und Mixed Martial Arts spezialisiert hat. Es wurde im April
          2000 von Murilo Bustamante, Ricardo Libório, Mário Sperry und Luis
          Roberto Duarte, ehemaligen Mitgliedern der Carlson Gracie Academy,
          gegründet, um neue Trainingstechniken für Brazilian Jiu Jitsu,
          Submission Grappling und Mixed Martial Arts zu entwickeln und zu
          schaffen.
        </p>
      </div>
      <div className="flex justify-between px-8 lg:px-32 bg-[#191919] py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-y-8 gap-x-16 min-h-[700px] w-full mx-auto">
          <div className="overflow-hidden h-full w-full lg:w-3/6">
            <img
              src="/./img/BTT/murilo.jpg"
              alt="1"
              className="h-[700px] object-cover w-full"
            />
          </div>
          <div className="text-white md:text-justify my-auto w-full lg:w-3/6">
            <h2 className="text-5xl md:text-6xl mt-4 mb-[3rem] text-center">
              Murilo Bustamante
            </h2>
            <p className="text-lg md:text-2xl">
              Murilo Bustamante (* 30. Juli 1966 in Rio de Janeiro) ist ein
              pensionierter brasilianischer Mixed Martial Artist und ehemaliger
              UFC-Champion im Mittelgewicht. Er ist einer der Gründer des
              brasilianischen Top-Teams und ist der aktuelle Anführer. Er ist
              nicht nur der zweite UFC-Champion im Mittelgewicht, sondern hat
              auch bei PRIDE gekämpft und es bis zum Pride Shockwave 2005-Finale
              geschafft und auch in Yarennoka gekämpft.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-16 lg:gap-x-64 px-8 lg:px-32 bg-[url(/./img/BTT-bg.png)] bg-no-repeat bg-cover w-screen py-8">
        <div className="w-5/12 flex flex-col">
          <h3 className="text-center text-white text-2xl lg:text-5xl mb-4">
            Ricardo Libório
          </h3>
          <img src="/./img/BTT/Ricardo.jpg" alt="ricardo" className="" />
        </div>
        <div className="w-5/12 flex flex-col">
          <h3 className="text-center text-white text-2xl lg:text-5xl mb-4">
            Mário Sperry
          </h3>
          <img src="/./img/BTT/mario.jpg" alt="mario" className="m-0" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8 lg:px-32 py-8 text-justify bg-[url(/./img/BTT-bg.png)] bg-no-repeat bg-cover text-white text-2xl">
        <h2 className="text-5xl md:text-6xl mt-4 mb-[3rem] text-center">
          BTT Geschichte
        </h2>
        <p>
          Das Brazilian Top Team hat seinen Ursprung bei Carlson Gracie und
          seiner Akademie. Gracie war ein Innovator im brasilianischen
          Jiu-Jitsu, er und seine Schüler hatten viele Techniken und Strategien
          im BJJ erfunden und verfeinert und in einem sehr aggressiven und
          körperlichen Stil gekämpft und bei Turnieren viel Erfolg erzielt.{" "}
          <br />
          <br />
          Seine Akademie war auch ein Pionier der gemischten Kampfkünste, eine
          der ersten Akademien, die ein spezialisiertes MMA-Programm ins Leben
          rief, und viele seiner Schüler reisten an, um BJJ bei vielen
          MMA-Veranstaltungen auf der ganzen Welt zu vertreten. Es gab jedoch
          Streitigkeiten zwischen Gracie und seinen Schülern, die dazu führten,
          dass sich viele von seiner Vormundschaft lösten und ihre eigenen
          Akademien gründeten. Murilo Bustamante, Ricardo Libório, Mário Sperry
          und Luis Roberto Duarte gründeten im Jahr 2000 das Brazilian Top Team
          mit dem Ziel, ein erstklassiges brasilianisches
          Jiu-Jitsu-Fitnessstudio zu schaffen und in der aufstrebenden Sportart
          Mixed Martial Arts zu trainieren.
        </p>
      </div>
      <Gallery images={images} />
    </div>
  );
};

export default BTT;
