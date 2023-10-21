import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-main-night-blue text-white flex items-center justify-center flex-col"
    >
      <div className="px-20 py-10">
        <h1 className="text-3xl font-medium">Nsm3ek - نسمعك</h1>
        <div className="flex flex-col lg:justify-between lg:flex-row gap-5 lg:gap-10">
          <p className="leading-[18px] text-justify lg:w-2/6">
            At NSM3EK, we're dedicated to transform mental health care while
            keeping your privacy first, and always. Our mission is to provide
            accessible and effective support for all individuals and
            institutions. Whether you're seeking online consultations,
            face-to-face appointments, or valuable mental health resources,
            NSM3EK is your trusted companion. Join us where Your mental
            well-being matters.
          </p>
          <div>
            <h4 className="font-semibold mb-2 lg:mb-4">Quick links</h4>
            <ul>
              <li className="cursor-pointer">app on play store</li>
              <li className="cursor-pointer">app on play ios</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 lg:mb-4">Company</h4>
            <ul>
              <li className="cursor-pointer">Privacy policy</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">F.A.Q</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 lg:mb-4">Social Media</h4>
            <ul>
              <li className="cursor-pointer">Facebook</li>
              <li className="cursor-pointer">X</li>
              <li className="cursor-pointer">Linkedin</li>
              <li className="cursor-pointer">Tiktok</li>
            </ul>
          </div>
          <div className="max-w-sm">
            <h4 className="font-semibold mb-2 lg:mb-4">Newsletter</h4>
            <p className="pb-8">
              Kindly subscribe to our newsletter to get latest deals on our
              services and videos.
            </p>
            <form className="bg-white p-2 rounded-md flex gap-4">
              <input
                type="email"
                name="email"
                id=""
                className="w-4/5"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-main-night-blue text-white rounded-md px-4 py-3"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] border-gray-400 w-full flex justify-center items-center h-32">
        <h3>Nsm3ek</h3>
      </div>
    </div>
  );
};

export default Footer;
