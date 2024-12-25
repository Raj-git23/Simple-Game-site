import React from "react";
import AllPosts from "./AllPosts";
import Vision from "./Vision";
import RoadMap from "./RoadMap";
import Tokens from "./Tokens";
import Merchandise from "./Merchandise";
import Games from "./Games";
import SocialMedia from "./SocialMedia";

function Home() {
  return (
    <>
      <div className="bg-white relative top-20 w-11/12 rounded-t-xl h-[39rem] overflow-auto">
        {/* Content Container */}
        <div className="relative h-auto min-[1700px]:h-full flex flex-col lg:flex-row justify-between md:items-center md:text-right z-10">
          {/* Skewed Yellow Background */}
          <div className="absolute inset-0 transform skew-y-6 bg-yellow-300 h-[92%] origin-right bg-cover -z-10"></div>
          {/* Image Container with Reflection */}
          <div className="flex flex-col mt-24 relative w-[25rem] h-[22rem] min-[530px]:w-[30rem] min-[530px]:h-[30rem] min-[610px]:w-[35rem] lg:w-[200rem]">
            {/* Original Image */}
            <img
              src="../src/assets/image/dog.png"
              className="h-3/4 w-3/4 min-[450px]:h-full min-[450px]:w-full min-[450px]:h-full min-[450px]:w-full absolute"
              alt="Dog"
            />

            {/* Reflection of the Dog */}
            <img
              src="../src/assets/image/dog.png"
              className="h-3/4 w-3/4 min-[450px]:h-full min-[450px]:w-full transform -z-10 scale-y-[-1] absolute bottom-[-25%] min-[450px]:bottom-[-72%] opacity-40 blur-sm"
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
          <div className="min-lg:mt-24 px-3 min-[500px]:px-6 md:px-16 min-[1100px]:pr-6 lg:pr-10 h-auto xl:pr-16">
            <p className="text-[#ea7c32] max-sm:text-6xl max-[450px]:text-4xl text-7xl lg:max-[1160px]:text-5xl font-sans font-black">
              History Of
            </p>
            <p className="lg:max-[1160px]:text-8xl max-[450px]:text-6xl max-sm:text-8xl text-9xl my-4 font-erica text-white font-light">
              ALABAY
            </p>
            <p className="font-bold font-sans lg:max-[1160px]:text-[30px] max-[450px]:text-[24px] max-sm:text-[28px] text-[35px] leading-7 sm:leading-8 max-[500px]:pt-4">
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

export default Home;
