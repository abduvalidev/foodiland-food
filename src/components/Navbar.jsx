import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow py-5 lg:py-10">
      <nav className="w-container flex items-center justify-between gap-x-8">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="hidden lg:flex items-center gap-10 xl:gap-x-[60px] font-medium">
          <Link
            className="text-black transition duration-300 hover:text-primary/75"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-black transition duration-300 hover:text-primary/75"
            to="/recipes"
          >
            Recipes
          </Link>
          <Link
            className="text-black transition duration-300 hover:text-primary/75"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-black transition duration-300 hover:text-primary/75"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-black transition duration-300 hover:text-primary/75"
            to="/about"
          >
            About us
          </Link>
        </div>
        <div className="flex items-center gap-x-5 lg:gap-x-9">
          <div className="hidden md:flex items-center gap-x-7 xl:gap-x-10">
            <a
              href="#"
              className="text-black transition duration-300 hover:text-primary/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={20}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M8.112 3.295h1.811V.14A23.394 23.394 0 0 0 7.283 0c-2.611 0-4.4 1.643-4.4 4.663v2.779H0v3.527h2.882v8.876h3.535V10.97h2.765l.44-3.527H6.415v-2.43c0-1.02.275-1.718 1.696-1.718Z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-black transition duration-300 hover:text-primary/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={18}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M22.962 2.116a9.404 9.404 0 0 1-2.6.712A4.485 4.485 0 0 0 22.348.336a9.012 9.012 0 0 1-2.86 1.091 4.509 4.509 0 0 0-7.802 3.084c0 .358.03.702.105 1.029C8.04 5.357 4.722 3.56 2.493.822a4.54 4.54 0 0 0-.617 2.28c0 1.562.804 2.947 2.003 3.748a4.454 4.454 0 0 1-2.037-.555v.05a4.531 4.531 0 0 0 3.613 4.43 4.5 4.5 0 0 1-1.182.15c-.29 0-.58-.017-.854-.078.584 1.787 2.242 3.1 4.214 3.142a9.063 9.063 0 0 1-5.592 1.924c-.37 0-.725-.017-1.08-.062a12.697 12.697 0 0 0 6.92 2.024c8.3 0 12.837-6.875 12.837-12.834 0-.2-.007-.392-.017-.583a8.999 8.999 0 0 0 2.26-2.342Z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-black transition duration-300 hover:text-primary/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={22}
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.837 0h8.25a6.876 6.876 0 0 1 6.875 6.875v8.25A6.876 6.876 0 0 1 16.087 22h-8.25a6.876 6.876 0 0 1-6.875-6.875v-8.25A6.876 6.876 0 0 1 7.837 0Zm8.25 19.938a4.818 4.818 0 0 0 4.812-4.813v-8.25a4.818 4.818 0 0 0-4.812-4.813h-8.25a4.818 4.818 0 0 0-4.813 4.813v8.25a4.818 4.818 0 0 0 4.813 4.813h8.25Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.462 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm2.062 0a3.442 3.442 0 0 0 3.438 3.438A3.442 3.442 0 0 0 15.399 11a3.441 3.441 0 0 0-3.437-3.438A3.441 3.441 0 0 0 8.524 11Z"
                  clipRule="evenodd"
                />
                <circle cx={17.874} cy={5.088} r={0.733} fill="currentColor" />
              </svg>
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="block lg:hidden text-black focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>

            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18l12-12M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="w-full text-center px-4 pt-4 pb-3 space-y-3 sm:px-3">
          <Link
            className="block text-black transition duration-300 hover:text-primary/75"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-black transition duration-300 hover:text-primary/75"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="block text-black transition duration-300 hover:text-primary/75"
            to="/work"
          >
            Work
          </Link>
          <Link
            className="block text-black transition duration-300 hover:text-primary/75"
            to="/news"
          >
            News
          </Link>
          <Link
            className="block text-black transition duration-300 hover:text-primary/75"
            to="/contact"
          >
            Contact
          </Link>
          <div className="w-full flex md:hidden items-center justify-center gap-x-7 pt-5">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={20}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M8.112 3.295h1.811V.14A23.394 23.394 0 0 0 7.283 0c-2.611 0-4.4 1.643-4.4 4.663v2.779H0v3.527h2.882v8.876h3.535V10.97h2.765l.44-3.527H6.415v-2.43c0-1.02.275-1.718 1.696-1.718Z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={18}
                fill="none"
              >
                <path
                  fill="#000"
                  d="M22.962 2.116a9.404 9.404 0 0 1-2.6.712A4.485 4.485 0 0 0 22.348.336a9.012 9.012 0 0 1-2.86 1.091 4.509 4.509 0 0 0-7.802 3.084c0 .358.03.702.105 1.029C8.04 5.357 4.722 3.56 2.493.822a4.54 4.54 0 0 0-.617 2.28c0 1.562.804 2.947 2.003 3.748a4.454 4.454 0 0 1-2.037-.555v.05a4.531 4.531 0 0 0 3.613 4.43 4.5 4.5 0 0 1-1.182.15c-.29 0-.58-.017-.854-.078.584 1.787 2.242 3.1 4.214 3.142a9.063 9.063 0 0 1-5.592 1.924c-.37 0-.725-.017-1.08-.062a12.697 12.697 0 0 0 6.92 2.024c8.3 0 12.837-6.875 12.837-12.834 0-.2-.007-.392-.017-.583a8.999 8.999 0 0 0 2.26-2.342Z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={22}
                fill="none"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M7.837 0h8.25a6.876 6.876 0 0 1 6.875 6.875v8.25A6.876 6.876 0 0 1 16.087 22h-8.25a6.876 6.876 0 0 1-6.875-6.875v-8.25A6.876 6.876 0 0 1 7.837 0Zm8.25 19.938a4.818 4.818 0 0 0 4.812-4.813v-8.25a4.818 4.818 0 0 0-4.812-4.813h-8.25a4.818 4.818 0 0 0-4.813 4.813v8.25a4.818 4.818 0 0 0 4.813 4.813h8.25Z"
                  clipRule="evenodd"
                />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M6.462 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm2.062 0a3.442 3.442 0 0 0 3.438 3.438A3.442 3.442 0 0 0 15.399 11a3.441 3.441 0 0 0-3.437-3.438A3.441 3.441 0 0 0 8.524 11Z"
                  clipRule="evenodd"
                />
                <circle cx={17.874} cy={5.088} r={0.733} fill="#000" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
