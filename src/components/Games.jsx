import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GamesImage } from "../assets/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const GamesSlides = ({ bgimg, bgcolor }) => {
  return (
    <div
      className="relative flex justify-center mx-auto rounded-[3rem] z-40 w-[78rem] h-[38rem] bg-cover bg-center border-8 border-white"
      style={{ backgroundImage: `url(${bgimg})` }} // Background image applied directly
    >
      {/* Optional: Alt text can be displayed as an overlay if needed */}
      <button 
        className="absolute bottom-20 flex py-3 px-6 drop-shadow-[4px_9px_11px_rgba(0,0,0,0.5)] rounded-full text-white items-center gap-2 text-2xl font-black font-josefin z-20"
        style={{ backgroundColor: bgcolor }}
      > 
        DISCOVER <FaArrowRight />
      </button>
    </div>
  );
};

const Games = () => {
//   const customArrow = (direction) => {
//     return (
//       direction === "right" && (
//         <button className="py-4 px-2 rounded-lg text-white bg-black bg-opacity-60 mx-20 drop-shadow-[4px_9px_11px_rgba(0,0,0,0.5)] hover:bg-opacity-80 z-50 absolute right-4">
//           <FaArrowRight className="text-2xl" />
//         </button>
//       )
//     );
//   };

  const customArrow = (direction) => (
    <button
      className={`py-4 px-2 rounded-lg text-white bg-[#3a3333] mx-24 drop-shadow-[4px_9px_11px_rgba(0,0,0,0.5)] hover:bg-opacity-80 z-50 absolute ${
        direction === "left" ? "absolute left-4" : "absolute right-4"
      }`}
    >
      {direction === "left" ? <FaArrowLeft  className="text-3xl font-black"/> : <FaArrowRight className="text-3xl font-black" />}
    </button>
  );

  return (
    <>
      <div className="relative z-20 flex flex-col items-center justify-center mt-60">
        {/* Yellow Background Div */}
        <div className="absolute inset-0 transform origin-left skew-y-12 bg-yellow-300 h-[60%] w-full -z-10"></div>
        <div className="absolute inset-0 top-[18rem] bg-yellow-300 h-10 w-full -z-10"></div>
        <h1 className="text-[#ea7c32] text-9xl font-erica font-thin mb-12">
          GAMES
        </h1>
        <div className="slide-container mt-40 w-full">
          <Slide easing="ease" 
            prevArrow={customArrow("left")}
            nextArrow={customArrow("right")}
          >
            {GamesImage.map((slideImage) => (
              <GamesSlides
                key={slideImage.alt}
                frontimg={slideImage.frontimg}
                bgimg={slideImage.bgimg}
                bgcolor={slideImage.bgcolor}
                alt={slideImage.alt}
              />
            ))}
          </Slide>
        </div>
      </div>
      <p className="mt-20 pl-10 text-5xl text-left font-sans font-black">
        <span className="text-[#ea7c32]">GAME</span> PREVIEWS
      </p>
      <div className="flex flex-row items-center gap-5 ml-8 mt-10">
        <img
          src="../../image/Alabay_Games/artifacts 2.png"
          className="h-96 w-96"
        />
        <img
          src="../../image/Alabay_Games/Abilities 2.png"
          className="h-96 w-96"
        />
        <img
          src="../../image/Alabay_Games/image 3 alabay guard 2.png"
          className="h-96 w-96"
        />

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-3 py-6 text-5xl text-white bg-gray-800 rounded-2xl drop-shadow-[4px_9px_11px_rgba(0,0,0,0.5)]"
        >
          <FaArrowRight className="text-4xl font-black textbfont-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
        </button>
      </div>
    </>
  );
};

export default Games;
