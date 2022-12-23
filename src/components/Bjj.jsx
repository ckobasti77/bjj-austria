import React from 'react'
// import bjj from '../img/bjj.jpg';
// import mma from '../img/MMA.png';
// import grappling from '../img/Grappling.png';
// import kinder from '../img/Kinder.png';


const Bjj = () => {
    return (
        <section className="py-10 bg-[#191919] lg:py-24" >
            <div className="px-4 mx-auto lg:px-8 w-full" data-aos='fade-left' data-aos-delay='400'>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Klassen entworfen</h1>
                    <h2 className="max-w-7xl font-bold mx-auto mt-4 text-7xl text-white">FÜR SIE</h2>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 m-4 md:m-32 md:mt-16 lg:gap-x-12">
                    <div className='transition duration-500 hover:scale-105'>
                        <a href=""><img src="/./img/MMA.png" alt="mma" className='w-full md:h-96 rounded-md' data-aos='fade-left' data-aos-delay='600' /></a>
                    </div>

                    <div className='transition duration-500 hover:scale-105'>
                        <a href="/Bjj"><img src="/./img/bjj.jpg" alt="bjj" className=' w-full md:h-96 rounded-md' data-aos='fade-left' data-aos-delay='500' /></a>
                    </div>

                    <div className='transition duration-500 hover:scale-105'>
                        <a href=""><img src="/./img/Grappling.png" alt="grappling" className='w-full md:h-96 rounded-md' data-aos='fade-left' data-aos-delay='400' /></a>
                    </div>

                    <div className='transition duration-500 hover:scale-105'>
                        <a href=""><img src="/./img/Kinder.png" alt="kinder" className='w-full md:h-96 rounded-md' data-aos='fade-left' data-aos-delay='300' /></a>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Bjj;