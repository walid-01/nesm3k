import React from "react";
import "../styles/Home.css";

const HomeIntro = () => {
  return (
    <>
      <div className="absolute w-1/4 flex flex-col gap-10 top-1/4 left-[15%]">
        <h1 className="text-5xl font-extrabold">
          <span className="font-montserrat">Nsm3k</span>{" "}
          <span className="font-almarai">نسمعك</span>
        </h1>
        <div>
          <h1 className="text-right text-4xl font-bold font-almarai">
            .الخصوصية أوّلا، ودائما
          </h1>
          <p className="font-almarai text-center text-xl">
            مرحبا بك مع نسمعك، رفيقك في الحصول على المساعدة النفسية الاجتماعية
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-montserrat font-bold text-2xl text-center">
            INSTALL NOW
          </h2>
          <div className="w-1/2 cursor-pointer">
            <img src="https://yourimageshare.com/ib/BfHO4uT8CY.webp" alt="" />
          </div>
          <div className="w-1/2 cursor-pointer">
            <img src="https://yourimageshare.com/ib/2qcPj52GYk.webp" alt="" />
          </div>
        </div>
      </div>
      <div id="home-intro" className="flex"></div>
    </>
  );
};

export default HomeIntro;
