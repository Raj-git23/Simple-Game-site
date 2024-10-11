import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GamesImage } from "../assets/constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const GamesSlides = ({ bgimg, alt }) => {
  return (
    <div
      className="relative flex mx-auto rounded-[3rem] z-40 w-[78rem] h-[38rem] bg-cover bg-center border-8 border-white"
      style={{ backgroundImage: `url(${bgimg})` }} // Background image applied directly
    >
      {/* Optional: Alt text can be displayed as an overlay if needed */}
      <p className="absolute bottom-4 left-4 text-white text-xl z-50"></p>
    </div>
  );
};

const Games = () => {
  const customArrow = (direction) => {
    return (
      direction === "right" && (
        <button className="py-4 px-2 rounded-lg text-white bg-black bg-opacity-60 mx-20 drop-shadow-[4px_9px_11px_rgba(0,0,0,0.5)] hover:bg-opacity-80 z-50 absolute right-4">
          <FaArrowRight className="text-2xl" />
        </button>
      )
    );
  };

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
        <Slide easing="ease" nextArrow={customArrow("right")}>
          {GamesImage.map((slideImage) => (
            <GamesSlides
              key={slideImage.alt}
              frontimg={slideImage.frontimg}
              bgimg={slideImage.bgimg}
              alt={slideImage.alt}
            />
          ))}
        </Slide>
      </div>

    </div>
    <p className="mt-20 pl-20 text-4xl text-left font-sans font-black"><span className="text-[#ea7c32]">GAME</span> PREVIEWS</p>
</>
  );
};

export default Games;
