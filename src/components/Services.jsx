import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <h1 className="text-main-night-blue text-5xl font-bold">Our Services</h1>
      <div className="flex justify-evenly">
        <div className="bg-main-night-blue flex flex-col items-center justify-center gap-10 w-1/4 p-10 rounded-lg">
          <div className="w-1/3">
            <img src="https://yourimageshare.com/ib/lHq3dEccGP.webp" alt="" />
          </div>
          <div className="bg-zinc-300 flex flex-col items-center justify-center rounded-lg p-6">
            <h2 className="font-bold font-montserrat text-2xl text-center w-44 mb-5">
              Online consultation
            </h2>
            <p className="text-center font-montserrat text-lg">
              Virtual one-on-one sessions with qualified mental health
              professionals through chat, providing convenient psychological and
              social support.
            </p>
          </div>
        </div>
        <div className="bg-main-night-blue flex flex-col items-center justify-center gap-10 w-1/4 p-10 rounded-lg">
          <div className="w-1/3">
            <img src="https://yourimageshare.com/ib/fhYFZn8zKq.webp" alt="" />
          </div>
          <div className="bg-zinc-300 flex flex-col items-center justify-center rounded-lg p-6">
            <h2 className="font-bold font-montserrat text-2xl text-center w-44 mb-5">
              appointement reservation{" "}
            </h2>
            <p className="text-center font-montserrat text-lg">
              In-person meetings with experienced therapists at a location near
              you, offering traditional counseling and support for those who
              prefer in-person interactions.
            </p>
          </div>
        </div>
        <div className="bg-main-night-blue flex flex-col items-center justify-center gap-10 w-1/4 p-10 rounded-lg h-full ">
          <div className="w-1/3">
            <img src="https://yourimageshare.com/ib/BDQJuv5n8G.webp" alt="" />
          </div>
          <div className="bg-zinc-300 flex flex-col items-center justify-center rounded-lg p-6">
            <h2 className="font-bold font-montserrat text-2xl text-center w-44 mb-5">
              Self-help resources
            </h2>
            <p className="text-center font-montserrat text-lg">
              A library of informative videos covering a wide range of mental
              health topics, designed to raise awareness and provide self-help
              tools for users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
