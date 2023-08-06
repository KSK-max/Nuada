import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex w-full justify-between text-white">
      <div>
        <img src="" alt="logo" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/solutions">Solutions</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
