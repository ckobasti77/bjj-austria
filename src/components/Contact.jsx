import React from 'react'

const Contact = ({ bg }) => {
    return (
        <section class={bg === 'bg' ? "bg-[url(/./img/BTT-bg.png)]" : "bg-[#191919]"} >
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" >
                <h2 class="mb-8 lg:mb-16 text-4xl tracking-tight font-extrabold text-center text-white" data-aos='fade-down' data-aos-delay='600'>KONTAKTIEREN SIE UNS</h2>
                <form action="https://formsubmit.co/bttwien@gmail.com" method="POST" class="space-y-8 flex flex-col">
                    <div data-aos='fade-left' data-aos-delay='700'>
                        <label for="email" class="block mb-2 text-sm font-medium text-white">E-MAIL</label>
                        <input type="email" name="E-mail:" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div data-aos='fade-left' data-aos-delay='800'>
                        <label for="subject" class="block mb-2 text-sm font-medium text-white">TELEFONNUMMER</label>
                        <input type="number" name="Telefonnumer:" id="subject" class="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black  dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2" data-aos='fade-left' data-aos-delay='900'>
                        <label for="message" class="block mb-2 text-sm font-medium text-white">NACHRICHT</label>
                        <textarea id="message" name="Nachricht:" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Leave a comment..." required></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 min-w-[175px] text-sm mx-auto font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 " data-aos='fade-left' data-aos-delay='1000'>Nachricht senden</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;