import React from "react";

const Testimonies = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <h1 className="text-main-night-blue text-5xl font-bold">Testimonies</h1>
      <div className="flex justify-evenly gap-10">
        <div className="bg-testimony-gray flex flex-col gap-8 justify-center rounded-lg w-[30%] px-8 py-10">
          <div className="flex items-center justify-between">
            <h2>1 Jan. 2024 </h2>
            <h2>STARS</h2>
          </div>
          <div>
            <p className="text-7xl h-14 text-blue-950">&#x275D;</p>
            <p className="font-montserrat px-8">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-7xl text-right text-blue-950">&#x275E;</p>
          </div>
          <div className="flex items-center h-14 gap-8">
            <div className="w-1/5">
              <img src="https://yourimageshare.com/ib/BDQJuv5n8G.webp" alt="" />
            </div>
            <p>Zaid29</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
