import React from "react";
// import Logo from "../img/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ home }) => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "BJJ", link: "/BJJ" },
    { name: "MMA", link: "/Mma" },
    { name: "GRAPPLING", link: "/Grappling" },
    { name: "BTT", link: "/BTT" },
    { name: "PREIS", link: "/Preis" },
    { name: "KONTAKT", link: "/Kontakt" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0 h-full">
      <div className={`xl:flex items-center justify-between py-2 xl:px-10 px-7 ${home ? 'bg-transparent' : 'bg-[#191919]'}`}>
        <div className="cursor-pointer flex items-center">
          <Link to="/" className="mr-1">
            <img
              src="/./img/logo.jpg"
              alt="Logo Brazilian Top Team Austria"
              className="max-w-46 h-20 object-fill"
              id="logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl xl:text-5xl absolute right-10 top-6 cursor-pointer xl:hidden my-2.5 h-[30px]"
        >
          <ion-icon
            name={open ? "close" : "menu"}
            className="text-white"
          ></ion-icon>
        </div>

        <ul
          className={`xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static xl:z-auto z-[-1] left-0 w-full xl:w-auto translate-all duration-500 ease-in  ${
            open
              ? "opacity-100 bg-[#201E1F] h-full flex flex-col w-full z-20 fixed overlay  "
              : "hidden"
          }`}
        >
          {Links.map((Link) => (
            <li
              key={Links.name}
              className=" xl:ml-8 xl:text-2xl text-sm xl:my-0 my-7 flex items-center justify-center place-between py-1 font-bold "
            >
              <a
                href={Link.link}
                className="text-[#ccc] hover:text-white duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <li className="xl:ml-8 xl:text-2xl text-sm xl:my-0 my-7 flex items-center justify-center place-between py-1 font-bold ">
            <a
              href="https://www.facebook.com/bttaustria"
              rel="noreferrer"
              target="_blank"
              className="text-[#ccc] transition hover:text-white"
            >
              <span class="sr-only">Facebook</span>
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className="xl:ml-8 xl:text-2xl text-sm xl:my-0 my-7 flex items-center justify-center place-between py-1 font-bold ">
            <a
              href="https://www.instagram.com/bttaustria/"
              rel="noreferrer"
              target="_blank"
              className="text-[#ccc] transition hover:text-white"
            >
              <span class="sr-only">Instagram</span>
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
