import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-main-night-blue text-white px-10 fixed z-10 p-4 flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center justify-between lg:w-3/5">
        <div className="w-12 h-12">
          <Link to="/">
            <img
              src="https://yourimageshare.com/ib/WU3C3h95Ry.webp"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <ul className="flex justify-between font-semibold font-montserrat w-3/4 ">
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
      </div>
      <ul className="flex text-black gap-4 text-sm sm:text-base lg:justify-evenly">
        <li>
          <Link
            className="bg-white py-2 rounded-lg font-montserrat font-bold text-main-night-blue sm:px-4"
            to="/"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="bg-gray-300 py-2 rounded-lg font-montserrat font-bold text-main-night-blue sm:px-4"
            to="/"
          >
            Sign up
          </Link>
        </li>
        <li>
          <Link
            className="bg-secondary-blue py-2 font-extrabold sm:px-4"
            to="/"
          >
            INSTALL NOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
