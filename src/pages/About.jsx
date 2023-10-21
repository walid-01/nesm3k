import React from "react";

const About = () => {
  return (
    <section className="bg-main-cream flex flex-col justify-center items-center pt-32 py-20 px-8 lg:px-10 gap-16">
      {/*main Title */}
      <div className="flex flex-col m-auto">
        <div className="flex flex-col  font-montserrat text-main-night-blue text-center m-auto gap-4 z-20">
          <h1 className="text-4xl font-extrabold max-w-[93ch] z-20">
            We Are
            <span className="text-[40px] underline text-secondary-blue">
              Nsm3ek نسمعك
            </span>
            : Your Path to Mental Wellness
          </h1>
          <p className="text-lg font-normal leading-6 text-center m-auto max-w-[78ch]">
            At NSM3EK, we understand that the path to mental wellness is unique
            for each individual. That's why we've created a space where you can
            embark on your journey to better mental health with confidence,
            privacy, and the support you deserve.
          </p>
        </div>
        <img
          src="https://yourimageshare.com/ib/vHz2dMqG7c.webp"
          alt=""
          className="-mt-20  z-10  "
        />
      </div>

      {/*Out THings section  */}
      <div className="flex flex-wrap justify-center items-center gap-20">
        {/* Journey Div */}
        <div className="flex flex-col gap-y-10 font-lato text-main-night-blue">
          <div className="flex gap-7 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="104"
              viewBox="0 0 54 104"
              fill="none"
            >
              <path
                d="M22 99C22 101.761 24.2386 104 27 104C29.7614 104 32 101.761 32 99H22ZM27 53.6667C41.7276 53.6667 53.6667 41.7276 53.6667 27C53.6667 12.2724 41.7276 0.333336 27 0.333336C12.2724 0.333336 0.333334 12.2724 0.333334 27C0.333334 41.7276 12.2724 53.6667 27 53.6667ZM32 99L32 27H22L22 99H32Z"
                fill="#3E5E79"
              />
            </svg>
            <h2 className="text-start text-4xl font-extrabold capitalize">
              Our Journey
            </h2>
          </div>

          <div className="flex gap-7">
            <svg
              className="w-14"
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="273"
              viewBox="0 0 10 273"
              fill="none"
            >
              <path
                d="M5 268L5 5.00002"
                stroke="#3E5E79"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>

            <p className="text-start text-xl leading-6 font-medium max-w-[468px] pt-4">
              <span className="font-extrabold">Nsm3ek</span> story began with a
              shared passion and a profound belief: that mental health support
              should be as accessible as the air we breathe. We recognized that
              there were barriers preventing people from seeking help they need.
              Stigma, inconvenience, and a lack of resources stood in the way of
              countless individuals who needed support. That's when we decided
              to embark on this journey—to break down those barriers and make
              mental health care a fundamental part of everyone's well-being.
            </p>
          </div>
        </div>

        {/* Commitment Div */}
        <div className="flex flex-col gap-y-10 font-lato text-main-night-blue">
          <div className="flex gap-7 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="104"
              viewBox="0 0 54 104"
              fill="none"
            >
              <path
                d="M22 99C22 101.761 24.2386 104 27 104C29.7614 104 32 101.761 32 99H22ZM27 53.6667C41.7276 53.6667 53.6667 41.7276 53.6667 27C53.6667 12.2724 41.7276 0.333336 27 0.333336C12.2724 0.333336 0.333334 12.2724 0.333334 27C0.333334 41.7276 12.2724 53.6667 27 53.6667ZM32 99L32 27H22L22 99H32Z"
                fill="#3E5E79"
              />
            </svg>
            <h2 className="text-start text-4xl font-extrabold capitalize">
              Our Commitment
            </h2>
          </div>

          <div className="flex gap-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="273"
              viewBox="0 0 10 273"
              fill="none"
            >
              <path
                d="M5 268L5 5.00002"
                stroke="#3E5E79"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>

            <p className="text-start text-xl leading-6 font-medium max-w-[468px] pt-4">
              From the very beginning, our commitment has been unwavering. We
              prioritize your well-being, your privacy, and your journey towards
              mental wellness above all else.{" "}
              <span className="font-extrabold">Nsm3ek</span> is more than just
              an app; it's a lifeline, a source of strength, and a community
              that cares deeply about your mental and social health.
            </p>
          </div>
        </div>
      </div>

      {/* Be with Us */}
      <div className="flex flex-col items-center justify-center w-full pt-20 gap-y-32">
        <h2 className="text-4xl text-main-night-blue font-extrabold font-lato capitalize text-center">
          How To Be With Us
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-20">
          {/*Left side */}
          <div className="flex flex-col gap-y-12 font-lato text-main-night-blue">
            <div className="flex gap-7 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="104"
                viewBox="0 0 54 104"
                fill="none"
              >
                <path
                  d="M22 99C22 101.761 24.2386 104 27 104C29.7614 104 32 101.761 32 99H22ZM27 53.6667C41.7276 53.6667 53.6667 41.7276 53.6667 27C53.6667 12.2724 41.7276 0.333336 27 0.333336C12.2724 0.333336 0.333334 12.2724 0.333334 27C0.333334 41.7276 12.2724 53.6667 27 53.6667ZM32 99L32 27H22L22 99H32Z"
                  fill="#3E5E79"
                />
              </svg>
              <h2 className="text-start text-4xl font-extrabold capitalize max-w-sm">
                Service provider Professionals/institutions
              </h2>
            </div>

            <div className="flex gap-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="322"
                viewBox="0 0 11 322"
                fill="none"
              >
                <path
                  d="M5.25 317L5.25 5.49897"
                  stroke="#3E5E79"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
              <div className="text-start text-xl leading-6 font-medium max-w-[486px] pt-4 capitalize">
                <p className=" ">
                  "We kindly request you to send a file containing the following
                  data through the link below to our email:
                </p>
                <ol className="list-decimal list-outside ml-6">
                  <li>Specialist or Establishment.</li>
                  <li>
                    Applicant Information: ID card, phone number, email, nature,
                    and address of the workplace.
                  </li>
                  <li>
                    Qualifications: Certificates and licenses in the field.
                  </li>
                  <li>Experience: Number of years worked, achievements.</li>
                  <li>
                    Specialization and Preferences: For example, trauma therapy
                    or cognitive-behavioral therapy.
                  </li>
                  <li>Availability: Days and times when you are available."</li>
                </ol>
              </div>
            </div>
            <div className="m-auto mt-2">
              <button className="w-[300px] h-[70px] font-almarai bg-[#D3D3D3] text-center  text-xl leading-7 font-extrabold text-black rounded-xl">
                Download Template
              </button>
            </div>
          </div>

          {/*Right Side  */}
          <div className="flex flex-col gap-y-12 font-lato text-main-night-blue">
            <div className="flex gap-7 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="104"
                viewBox="0 0 54 104"
                fill="none"
              >
                <path
                  d="M22 99C22 101.761 24.2386 104 27 104C29.7614 104 32 101.761 32 99H22ZM27 53.6667C41.7276 53.6667 53.6667 41.7276 53.6667 27C53.6667 12.2724 41.7276 0.333336 27 0.333336C12.2724 0.333336 0.333334 12.2724 0.333334 27C0.333334 41.7276 12.2724 53.6667 27 53.6667ZM32 99L32 27H22L22 99H32Z"
                  fill="#3E5E79"
                />
              </svg>
              <h2 className="text-start text-4xl font-extrabold capitalize max-w-sm">
                Institution Seeking Service
              </h2>
            </div>

            <div className="flex gap-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="322"
                viewBox="0 0 11 322"
                fill="none"
              >
                <path
                  d="M5.25 317L5.25 5.49897"
                  stroke="#3E5E79"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
              <div className="text-start text-xl leading-6 font-medium max-w-[486px] pt-4 capitalize">
                <p>
                  "We kindly request you to send a file containing the following
                  data through the link below to our email:
                </p>
                <ol className="list-decimal list-outside ml-6">
                  <li>Name of the institution and its nature and location.</li>
                  <li>
                    Number of employees (those to be included in
                    psychological/social assistance).
                  </li>
                  <li>Type of assistance required (or unspecified).</li>
                  <li>
                    Method of assistance (face-to-face or electronically).
                  </li>
                  <li>Desired timing.</li>
                  <li>Privacy protection document for clients."</li>
                </ol>
              </div>
            </div>
            <div className="m-auto mt-2">
              <button className="w-[300px] font-almarai h-[70px] bg-[#D3D3D3] text-center text-xl leading-7 font-extrabold text-black rounded-xl">
                Download Template
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Disclaimer */}
      <div className="flex flex-nowrap gap-7 justify-center items-center max-w-6xl my-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M31.6667 18.3333H8.33333C6.49238 18.3333 5 19.8257 5 21.6667V33.3333C5 35.1743 6.49238 36.6667 8.33333 36.6667H31.6667C33.5076 36.6667 35 35.1743 35 33.3333V21.6667C35 19.8257 33.5076 18.3333 31.6667 18.3333Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6666 18.3333V11.6667C11.6666 9.45654 12.5446 7.33692 14.1074 5.77412C15.6702 4.21132 17.7898 3.33334 20 3.33334C22.2101 3.33334 24.3297 4.21132 25.8925 5.77412C27.4553 7.33692 28.3333 9.45654 28.3333 11.6667V18.3333"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-xs text-main-night-blue leading-6">
          "We understand the importance of protecting your privacy, and we
          assure you that all the information you provide will remain
          confidential and will not be shared with any third party without your
          explicit consent. The required information is essential for us to
          ensure the best possible service and support for our partners. We
          value your trust and look forward to working with you."
        </p>
      </div>
    </section>
  );
};

export default About;
