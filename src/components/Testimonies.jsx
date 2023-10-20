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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
              >
                <path
                  d="M8 0L4.8 6.4H9.6V16H0V6.4L3.2 0H8ZM20.8 0L17.6 6.4H22.4V16H12.8V6.4L16 0H20.8Z"
                  fill="#3E5E79"
                />
              </svg>
            </div>
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
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
              >
                <path
                  d="M14.4 16H19.2L22.4 9.6V0H12.8V9.6H17.6M1.6 16H6.4L9.6 9.6V0H0V9.6H4.8L1.6 16Z"
                  fill="#3E5E79"
                />
              </svg>
            </div>
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
