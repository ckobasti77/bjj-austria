import React from 'react'
// import Nav from '../components/Nav';

const BTT = () => {
    return (
        <div className=' bg-[#191919]'>
            {/* <Nav /> */}
            <section className="relative bg-[url('./img/bjj_wallpaper.jpg')] bg-cover bg-center bg-no-repeat h-[600px]" >
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8" >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            BRAZILIAN JIU JITSU
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            Brazilian Jiu Jitsu (BJJ) ist ein Kampfsport und die brasilianische Weiterentwicklung des “Kōdōkan Judo” bzw. “Jiu Jitsu”, die sich auf den Bodenkampf und Würfe spezialisiert hat. Man gewinnt einen Kampf durch Punkte oder durch Aufgabe des Gegners mittels Hebel- oder Würgetechniken.
                        </p>

                    </div>
                </div>
            </section>
        </div >
    )
}

export default BTT