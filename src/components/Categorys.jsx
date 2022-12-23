import React from 'react';
// import bjj from '../img/bjj.jpg';
// import mma from '../img/mma.jpg';
// import grappling from '../img/grappling.jpg';

const Categorys = () => {
    return (
        <section className="p-4 lg:p-8 bg-[#191919] text-gray-100 pt-16">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src='/./img/mma.jpg' alt="" className="h-96 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-slate-900">
                        <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">MMA</h3>
                        <p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="/./img/bjj.jpg" alt="" className="h-96 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                        <span className="text-xs uppercase :text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">BRAZILIAN JIU JITSU</h3>
                        <p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="/./img/grappling.jpg" alt="" className="h-96 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6     bg-gray-900">
                        <span className="text-xs uppercase text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">GRAPPLING</h3>
                        <p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorys