import React from 'react';
// import img from '../img/table.png';

const Schedule = () => {
    return (
        <div className='justify-center content-center bg-[#191919] pb-28'>
            <div className="max-w-4xl mx-auto text-center pb-10" data-aos='fade-right' data-aos-delay='400'>
                <h1 className="text-6xl leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Schauen Sie sich unseren aktualisierten Stundenplan unten an.</h1>
            </div>
            <div className='flex justify-center ' data-aos='fade-right' data-aos-delay='500'>
                <img src="/./img/Table.png" alt='Brazilian Top Team Austria' className='lg:h-[700px] content-center object-fit' />
            </div>
        </div>
    )
}

export default Schedule;