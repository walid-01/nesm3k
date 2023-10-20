import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-main-night-blue text-white flex items-center justify-between px-10">
      <div className="h-16 w-16">
        <Link to="/">
          <img src="https://yourimageshare.com/ib/WU3C3h95Ry.webp" alt="" />
        </Link>
      </div>
      <ul className="flex justify-between basis-2/5 font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex justify-between text-black gap-4">
        <li>
          <Link className="bg-white py-2 px-4 rounded-lg" to="/">
            Login
          </Link>
        </li>
        <li>
          <Link className="bg-gray-300 py-2 px-4 rounded-lg" to="/">
            Sign up
          </Link>
        </li>
        <li>
          <Link className="bg-secondary-blue py-2 px-4 font-extrabold" to="/">
            INSTALL NOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
