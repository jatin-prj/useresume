/* eslint-disable no-unused-vars */

// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";
import HeroImage4 from "../../../Assests/Img/HeroImage4.jpg";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    initTE({ Carousel });
  }, []);
  return (
    <>
      <div className="w-full ">
        <div className="fixed w-full h-[33rem]">
          <div
            id="carouselExampleCaptions"
            className="relative h-full w-full"
            data-te-carousel-init
            data-te-ride="carousel"
          >
            <div
              className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>

            
            <div className="relative w-full h-full object-cover overflow-hidden after:clear-both after:block after:content-['']">
              
              <div
                className="relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active
                data-te-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={HeroImage4}
                  className="block w-full h-full object-cover"
                  alt="..."
                />
                <div className="absolute bottom-[12rem] 2xl:left-[70rem] xl:left-[45rem] lg:left-[33rem] sm:left-[30rem] sm:w-[19rem] md:w-auto  py-5 text-center ">
                  <h5 className="text-xl text-gray-700 font-bold">
                    Designing is the Silent Ambassdor of Your Brand
                  </h5>
                </div>
              </div>

             
            </div>

            
          </div>
        </div>

        <div className="text-center relative top-[33rem] xl:text-[3.5rem] text-cyan-700 w-autom sm:text-[2rem] ">
          <p
            className={`hero-heading `}
            data-split="Build Your Resume and Customize it"
          >
            Build Your Resume and Customize it
          </p>
        </div>
      </div>
    </>
  );
}
