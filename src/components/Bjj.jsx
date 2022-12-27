import React from 'react'
import { Link } from 'react-router-dom';

const Bjj = ({ scrollToTop }) => {
    
    return (
        <section className="py-10 bg-[url(/./img/BTT-bg-light.png)] dark:bg-[url(/./img/BTT-bg.png)] lg:py-24" >
            <div className="mx-auto xl:px-24 2xl:px-48 w-full" data-aos='fade-left' data-aos-delay='300'>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="leading-tight dark:text-white text-[#252525]  text-4xl lg:text-5xl xl:text-6xl lg:leading-tight">Klassen entworfen</h1>
                    <h2 className="max-w-7xl font-bold mx-auto mt-4 text-7xl dark:text-white text-[#252525]">FÜR SIE</h2>
                </div>

                <div className="grid home-buttons grid-cols-1 gap-12 mt-8 lg:grid-cols-2 m-4 lg:mx-16 md:mx-40 md:mt-16 lg:gap-x-12">
                    <Link onClick={() => scrollToTop()} to='/MMA' className='group relative z-[99999999] transition duration-500 hover:scale-105' data-aos='fade-left' data-aos-delay='400' >
                        <a href=""><img src="/./img/MMA.png" alt="mma" className='w-full md:h-96 rounded-md' /></a>
                        <span className="group-hover:scale-[1.3] transition duration-[500ms] absolute bottom-6 left-0 right-0 text-xl text-white">Click to see more</span>
                    </Link>

                    <Link onClick={() => scrollToTop()} to='/BJJ' className='group relative z-[9999999] transition duration-500 hover:scale-105' data-aos='fade-left' data-aos-delay='500'>
                        <a href=""><img src="/./img/bjj.jpg" alt="bjj" className=' w-full md:h-96 rounded-md' /></a>
                        <span className="group-hover:scale-[1.3] transition duration-[500ms] absolute bottom-6 left-0 right-0 text-xl text-white " >Click to see more</span>
                    </Link>

                    <Link onClick={() => scrollToTop()} to='/Grappling' className='group relative z-[9999999] transition duration-500 hover:scale-105' data-aos='fade-left' data-aos-delay='600' >
                        <a href=""><img src="/./img/Grappling.png" alt="grappling" className='w-full md:h-96 rounded-md'/></a>
                        <span className="group-hover:scale-[1.3] transition duration-[500ms] absolute bottom-6 left-0 right-0 text-xl text-white ">Click to see more</span>
                    </Link>

                    <Link onClick={() => scrollToTop()} to='/BJJ' className='group relative z-[9999999] transition duration-500 hover:scale-105' data-aos='fade-left' data-aos-delay='700' >
                        <a href=""><img src="/./img/Kinder.png" alt="kinder" className='w-full md:h-96 rounded-md' /></a>
                        <span className="group-hover:scale-[1.3] transition duration-[500ms] absolute bottom-6 left-0 right-0 text-xl text-white ">Click to see more</span>
                    </Link>
                </div>
            </div>
        </section>


    )
}

export default Bjj;