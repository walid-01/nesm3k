import React from "react";
import "../styles/Home.css";

const HomeIntro = () => {
  return (
    <div className="w-full gap-10 flex items-center justify-center lg:flex-row flex-col-reverse lg:gap-0">
      <div className="w-4/6 flex flex-col gap-4 text-center lg:w-1/3 lg:gap-10">
        <h1 className="text-5xl font-extrabold md:text-left ">
          <span className="font-montserrat">Nsm3k</span>{" "}
          <span className="font-almarai">نسمعك</span>
        </h1>
        <h1 className="text-4xl font-bold font-almarai md:text-right">
          الخصوصية أوّلا، ودائما
        </h1>
        <p className="font-almarai text-center text-xl md:text-right">
          مرحبا بك مع نسمعك، رفيقك في الحصول على المساعدة النفسية الاجتماعية
        </p>
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
    </div>
  );
};

export default HomeIntro;
