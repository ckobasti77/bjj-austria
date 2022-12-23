import React from 'react';
// import mestre from '../img/mestre.png';

function Mestre() {
    return (
        <section class="lg:pt-10 bg-[url(/./img/BTT-bg-light.png)] bg-cover bg-no-repeat 2xl:py-16 2xl:bg-white sm:pt-16 md:pt-0">
            <div class="px-4 mx-auto lg:rounded-md bg-[#191919] max-w-7xl sm:px-6 lg:px-8">
                <div class="2xl:pl-24">
                    <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                        <div class="text-center md:py-16 xl:py-24 md:text-left">
                            <h1 class="text-6xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl lg:leading-tight" data-aos='fade-right' data-aos-delay='400'>Fernando Paulon </h1>
                            <h2 class="max-w-2xl font-bold mx-auto mt-4 text-2xl text-[#ccc] pb-3" data-aos='fade-right' data-aos-delay='500'>CHEFTRAINER</h2>
                            <blockquote>
                                <p class="text-xl font-semibold leading-relaxed text-white" data-aos='fade-right' data-aos-delay='600'>Fernando Paulon ist ein Schwarzgurt im 5. Grad im Brazilian Jiu-Jitsu unter der Ausbildung des legendären Mixed Martial Artists Murilo Bustamante.
                                    Im Alter von 16 Jahren schrieb sich Fernando Paulon an der Carlson Gracie School ein und trainierte im Anschluss im Brazilian Top Team,
                                    welches vom ehemaligen UFC Mittelgewicht Champion Murilo Bustamante gegründet und geleitet wurde.
                                    Paulon ist somit eines der längsten und erfahrensten Mitglieder des Brazilian Top Teams.</p>
                            </blockquote>
                        </div>

                        <div class="relative" data-aos='fade-down' data-aos-delay='400'>
                            <img class="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20 transition duration-500 hover:scale-105" src="/./img/mestre.png" alt="Fernando Paulon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Mestre;