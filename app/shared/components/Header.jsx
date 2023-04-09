import Button from "./Button";
import { useState } from "react";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header flex flex-wrap justify-between py-4 px-4 md:px-8 bg-white">
      <img className="h-6 w-32 my-2" src="../../images/logo.svg" alt="logo" />
      <button
        className="block md:hidden flex items-center text-gray-600 hover:text-slate-600 focus:outline-none"
        onClick={toggleNav}
      >
        <img src="../../images/icon-hamburger.svg" />
      </button>
      <nav className={`${
        isNavOpen ? "flex" : "hidden"
      } md:flex flex-wrap justify-center space-x-4 md:space-x-0 md:justify-end md:flex-1`}>
        {[
          ['Home', '/'],
          ['About', '/about'],
          ['Contact', '/contact'],
          ['Blog', '/blog'],
          ['Careers', '/careers'],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="block py-2 px-4 text-zinc-400 font-medium hover:text-slate-600"
            onClick={() => setIsNavOpen(false)}
          >
            {title}
          </a>
        ))}
      </nav>
      <Button className="sm:hidden" />
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white opacity-95 z-50 ${
          isNavOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <button
            className="block md:hidden flex items-center text-gray-600 hover:text-slate-600 focus:outline-none"
            onClick={toggleNav}
          >
            <img src="../../images/icon-close.svg" />
          </button>
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Contact', '/contact'],
            ['Blog', '/blog'],
            ['Careers', '/careers'],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              className="block py-2 px-4 text-zinc-400 font-medium hover:text-slate-600"
              onClick={() => setIsNavOpen(false)}
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}