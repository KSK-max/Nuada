import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-center bg-white px-8 py-4 font-montserrat text-primary-dark">
      <div className="relative flex w-full max-w-6xl items-center justify-between">
        <HashLink to="/">
          <img src="/img/logo-big.png" alt="logo" className="max-w-[200px]" />
        </HashLink>
        {/* Desktop view */}
        <ul className="hidden gap-4 md:flex  md:gap-8">
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/">Home</HashLink>
          </li>
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/#solutionSection">Solutions</HashLink>
          </li>
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/resources">Resources</HashLink>
          </li>
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/#aboutSection">About us</HashLink>
          </li>
        </ul>
        {/* Mobile view */}
        <button
          className="flex flex-col items-center gap-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="h-[1px] w-8 bg-black"></div>
          <div className="h-[1px] w-6 bg-black"></div>
          <div className="h-[1px] w-8 bg-black"></div>
        </button>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } absolute -left-8 top-[100%] z-40 flex w-screen flex-col items-end gap-8 border-t-[1px] border-secondary-gray bg-white px-8 py-4 uppercase md:hidden md:flex-row`}
        >
          <li className=" transition-colors hover:text-primary-turquoise">
            <HashLink to="/">Home</HashLink>
          </li>
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/#solutionSection">Solutions</HashLink>
          </li>
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/resources">Resources</HashLink>
          </li>
          <li className="transition-colors hover:text-primary-turquoise">
            <HashLink to="/#aboutSection">About us</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
