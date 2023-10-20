import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="bg-main-cream flex">
      <div className="bg-green-500 absolute w-1/4 flex flex-col gap-10">
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
        <div>
          <h2>INSTALL NOW</h2>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div id="home-intro" className="flex"></div>
    </div>
  );
};

export default Home;
