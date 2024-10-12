import React from "react";
import AllPosts from "./AllPosts";
import Vision from "./Vision";
import RoadMap from "./RoadMap";
import Tokens from "./Tokens";
import Merchandise from "./Merchandise";
import Games from "./Games";
import SocialMedia from "./SocialMedia";

function Intro() {
  return (
    <>
      <div className="bg-white relative top-28 w-11/12 rounded-t-3xl h-[39rem] overflow-auto">
      {/* Content Container */}
        <div className="relative h-auto p-6 flex justify-between text-right z-10">
          {/* Skewed Yellow Background */}
          <div className="absolute inset-0 transform skew-y-6 bg-yellow-300 h-[92%] origin-right bg-cover -z-10"></div>

          {/* Image Container with Reflection */}
          <div className="flex flex-col mt-24 relative w-[200rem] h-[35rem]">
            {/* Original Image */}
            <img
              src="../src/assets/image/dog.png"
              className="h-full w-full absolute bottom-0"
              alt="Dog"
            />

            {/* Reflection of the Dog */}
            <img
              src="../src/assets/image/dog.png"
              className="h-full w-full transform -z-10 scale-y-[-1] absolute bottom-[-72%] opacity-40 blur-sm"
              alt="Dog Reflection"
              style={{
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 1), transparent 50%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 1), transparent 50%)",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="mt-24 pr-16">
            <p className="text-[#ea7c32] text-7xl font-sans font-black">
              History Of
            </p>
            <p className="text-9xl my-4 font-erica text-white font-light">
              ALABAY
            </p>
            <p className="font-bold font-sans text-[35px] leading-8 pt-4">
              The Central Asian Shepherd Dog, also known as Alabay, has been a
              guardian of livestock and property for centuries. Originating from
              Central Asia, these dogs are renowned for their courage, strength,
              and loyalty.
            </p>
          </div>
        </div>

        {/* Additional Sections */}
        <AllPosts />
        <Vision />
        <RoadMap />
        <Tokens />
        <Merchandise />
        <Games />
        <SocialMedia />
      </div>
    </>
  );
}

export default Intro;
