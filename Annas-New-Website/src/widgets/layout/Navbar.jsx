import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex w-full items-center justify-center bg-white px-2 py-4 font-montserrat text-primary-dark">
      <div className="relative flex w-full max-w-6xl items-center justify-between">
        <Link to="/home">
          <img src="/img/logo-big.png" alt="logo" className="max-w-[200px]" />
        </Link>
        {/* Desktop view */}
        <ul className="hidden gap-4 md:flex  md:gap-8">
          <li className="transition-colors hover:text-primary-turquoise">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-primary-turquoise">
            <a href="/home#solutionSection">Solutions</a>
          </li>
          <li className="hover:text-primary-turquoise">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="hover:text-primary-turquoise">
            <a href="/home#aboutSection">About us</a>
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
          } absolute -left-2 top-[100%] z-40 flex w-screen flex-col items-end gap-8 border-t-[1px] border-secondary-gray bg-white px-2 py-4 uppercase md:hidden md:flex-row`}
        >
          <li className="transition-colors hover:text-primary-turquoise">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-primary-turquoise">
            <a href="/home#solutionSection" onClick={() => setOpen(false)}>
              Solutions
            </a>
          </li>
          <li className="hover:text-primary-turquoise">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="hover:text-primary-turquoise">
            <a href="/home#aboutSection" onClick={() => setOpen(false)}>
              About us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
