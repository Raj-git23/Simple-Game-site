import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { MerchandiseImage } from "../assets/constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const MerchandiseSlides = ({ frontimg, bgimg, alt }) => {
  return (
    <div
      className="relative flex mx-auto rounded-2xl z-40 w-[55rem] h-[35rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }} // Corrected background image syntax
    >
      {/* Foreground Image */}
      <img
        src={frontimg} // Foreground image path
        alt={alt}
        className="absolute inset-0 m-auto w-full h-full object-contain z-20"
      />
    </div>
  );
};

const Merchandise = () => {
  const customArrow = (direction) => (
    <button
      className={`p-3 rounded-full text-black bg-white bg-opacity-60 mx-20 drop-shadow-[4px_9px_11px_rgba(0,0,0,0.5)] hover:bg-opacity-80 z-50 ${
        direction === "left" ? "absolute left-4" : "absolute right-4"
      }`}
    >
      {direction === "left" ? <FaArrowLeft/> : <FaArrowRight />}
    </button>
  );

  return (
    <div className="relative z-20 flex flex-col items-center justify-center mt-96">
      <h1 className="text-[#ea7c32] text-9xl font-erica font-thin mb-12">
        MERCHANDISE
      </h1>
      <div className="slide-container mt-40 w-full">
        <Fade
          easing="ease"
          prevArrow={customArrow("left")}
          nextArrow={customArrow("right")}
        >
          {MerchandiseImage.map((slideImage) => (
            <MerchandiseSlides
              key={slideImage.alt}
              frontimg={slideImage.frontimg}
              bgimg={slideImage.bgimg}
              alt={slideImage.alt}
            />
          ))}
        </Fade>
      </div>
      <div className="absolute inset-0 transform top-[43rem] -skew-y-6 bg-yellow-300 h-[92%] origin-right bg-cover -z-10"></div>

    </div>
  );
};

export default Merchandise;
