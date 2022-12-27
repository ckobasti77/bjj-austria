import React from 'react';
// import img from '../img/table.png';

const Schedule = () => {
    return (
        <div className='justify-center content-center dark:bg-[url(/./img/BTT-bg.png)] bg-[url(/./img/BTT-bg-light.png)] pb-14'>
            <div className="max-w-4xl mx-auto text-center pb-10" data-aos='fade-right' data-aos-delay='400'>
                <h1 className=" leading-tight text-[#252525] dark:text-[#e0e0e0] text-4xl lg:text-5xl xl:text-6xl lg:leading-tight">Schauen Sie sich unseren aktualisierten Stundenplan unten an.</h1>
            </div>
            <div className='flex justify-center ' data-aos='fade-right' data-aos-delay='500'>
                <img src="/./img/Table.png" alt='Brazilian Top Team Austria' className='lg:h-[700px] content-center object-fit' />
            </div>
        </div>
    )
}

export default Schedule;