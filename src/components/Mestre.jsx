import React from 'react';
// import mestre from '../img/mestre.png';

function Mestre() {
    return (
        <section className="pt-10 bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)]  bg-cover bg-no-repeat 2xl:py-16 sm:pt-16 md:pt-0">
            <div className="mx-auto lg:rounded-3xl bg-[#E5E5E5]/75 background-blur-sm backdrop-blur-sm dark:bg-[#252525]/75 max-w-7xl sm:px-6 lg:p-8 relative overflow-hidden">
                <img src="/./img/logo.jpg" alt="logo" className='hidden md:visible absolute w-[200px] top-[-75px] xl:left-[-75px] right-[-75px] xl:rotate-[-30deg] rotate-[30deg]' />
                <div className="2xl:pl-24">
                    <div className="flex flex-col xl:flex-row gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                        <div className="mx-8 xl:mx-0 text-center xl:w-7/12 md:py-16 xl:py-24 md:text-left">
                            <h1 className="leading-tight font-bold text-[#252525] dark:text-white text-4xl lg:text-5xl xl:text-6xl lg:leading-tight text-center xl:text-left" data-aos='fade-right' data-aos-delay='400'>Fernando Paulon </h1>
                            <h2 className="max-w-2xl font-bold mt-4 text-2xl text-[#4d4d4d] dark:text-[#ccc] pb-3 text-center xl:text-left" data-aos='fade-right' data-aos-delay='500'>CHEFTRAINER</h2>
                            <blockquote>
                                <p className="text-xl font-semibold leading-relaxed text-[#252525] dark:text-white text-center xl:text-left" data-aos='fade-right' data-aos-delay='600'>Fernando Paulon ist ein Schwarzgurt im 5. Grad im Brazilian Jiu-Jitsu unter der Ausbildung des legendären Mixed Martial Artists Murilo Bustamante.
                                    Im Alter von 16 Jahren schrieb sich Fernando Paulon an der Carlson Gracie School ein und trainierte im Anschluss im Brazilian Top Team,
                                    welches vom ehemaligen UFC Mittelgewicht Champion Murilo Bustamante gegründet und geleitet wurde.
                                    Paulon ist somit eines der längsten und erfahrensten Mitglieder des Brazilian Top Teams.</p>
                            </blockquote>
                        </div>

                        <img src="/./img/mestre.jpg" className='mx-8 xl:mx-0 xl:w-5/12 rounded-xl hover:scale-[1.03] transition' alt="cheftrainer" />

                        {/* <div className="relative" data-aos='fade-down' data-aos-delay='400'>
                            <img className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20 transition duration-500 hover:scale-105" src="/./img/mestre.jpg" alt="Fernando Paulon" />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Mestre;