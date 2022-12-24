import React from "react";
import Gallery from "../components/Gallery";

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

const Bjj = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[url(/./img/bjj-belt-small.png)] md:bg-[url(/./img/bjj-belt-phone.png)] lg:bg-[url(/./img/bjj-belt.png)] bg-no-repeat bg-cover md:bg-cover min-h-[200px] my-auto">
        <h1 className="text-[3.5rem] md:text-[5rem] text-center font-normal text-white">
          BRAZILIAN JIU JITSU
        </h1>
      </div>
      <div className="bg-[url(/./img/BTT-bg.png)] bg-cover">
        <div className="flex flex-col-reverse lg:flex-row gap-y-8 min-h-[500px] w-full mx-auto">
          <div className="overflow-hidden h-full w-full lg:w-3/6">
            <img
              src="/./img/bjj/unnamed6.jpg"
              alt="1"
              className="h-full hover:scale-120 object-cover w-full"
            />
          </div>
          <div className="text-white md:text-justify p-4 w-full lg:w-3/6">
            <h2 className="text-5xl md:text-6xl mt-16 mb-[3rem] text-center">
              WAS IST BJJ?
            </h2>
            <p className="text-lg md:text-2xl px-8 md:px-24">
              Brasilianisches Jiu-Jitsu ist eine Kampfkunst und ein Kampfsport
              zur Selbstverteidigung, der auf Grappling, Bodenkampf (ne-waza)
              und Submission Holds basiert. BJJ konzentriert sich auf die
              Fähigkeit, einen Gegner zu Boden zu bringen, seinen Gegner zu
              kontrollieren, eine dominante Position zu erlangen und eine Reihe
              von Techniken anzuwenden, um ihn durch Joint Locks oder Chokeholds
              zur Unterwerfung zu zwingen.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-8 min-h-[500px] w-full mx-auto">
          <div className="text-white md:text-justify p-4 w-full lg:w-3/6">
            <h2 className="text-5xl md:text-6xl mt-10 mb-[3rem] text-center">
              KINDER BJJ
            </h2>
            <p className="text-lg md:text-2xl px-8 md:px-24">
              Ein Kampf beim Brazilian Jiu-Jitsu beginnt mit einer tiefen
              Verbeugung vor dem Gegner - Respekt und Fairness werden beim
              Brazilian Jiu-Jitsu besonders großgeschrieben. Den Gegner fair zu
              behandeln, nicht unsportlich zu agieren und stets moralisch zu
              handeln - all dies sind Grundregeln, die Kinder bereits ab 5
              Jahren beim BJJ erlernen können. In dieser jungen Lebensphase
              helfen solche Erfahrungen sogar dabei, die Hürden des Lebens
              besser zu meistern. Brazilian Jiu-Jitsu schult z.B. den Umgang mit
              anderen Kindern und lehrt bei Konflikten auf Gewalt zu verzichten.
            </p>
          </div>
          <div className="overflow-hidden w-full lg:w-3/6">
            <img
              src="/./img/bjj/unnamed8.jpg"
              alt="1"
              className="h-full hover:scale-120 object-cover w-full"
            />
          </div>
        </div>
      </div>
      <Gallery images={images}/>
    </div>
  );
};

export default Bjj;
