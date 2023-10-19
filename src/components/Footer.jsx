import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-main-night-blue text-white flex items-center justify-center flex-col"
    >
      <div className="px-20 py-10">
        <h1 className="text-3xl font-medium">Nsm3ek - نسمعك</h1>
        <div className="flex">
          <div className="basis-1/4">
            <p className="leading-[18px] w-auto">
              At NSM3EK, we're dedicated to transform mental health care while
              keeping your privacy first, and always. Our mission is to provide
              accessible and effective support for all individuals and
              institutions. Whether you're seeking online consultations,
              face-to-face appointments, or valuable mental health resources,
              NSM3EK is your trusted companion. Join us where Your mental
              well-being matters.
            </p>
          </div>
          <div className="flex justify-evenly basis-3/4">
            <div>
              <h4 className="font-semibold mb-4">Quick links</h4>
              <ul>
                <li>app on play store</li>
                <li>app on play ios</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul>
                <li>Privacy policy</li>
                <li>About</li>
                <li>F.A.Q</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <ul>
                <li>Facebook</li>
                <li>X</li>
                <li>Linkedin</li>
                <li>Tiktok</li>
              </ul>
            </div>
            <div className="max-w-sm">
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="pb-8">
                Kindly subscribe to our newsletter to get latest deals on our
                services and videos.
              </p>
              <form action="subscribe">
                <input type="email" name="email" id="" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
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
