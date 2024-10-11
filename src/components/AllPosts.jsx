import React, { useState, useRef } from "react";
import { all, photos, videos } from "../assets/constants";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const AllPosts = () => {
  const [selectedSection, setSelectedSection] = useState("ALL");
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Navigation for switching sections */}
      <div className="flex space-x-8">
        <p
          onClick={() => setSelectedSection("ALL")}
          className={`font-sans text-2xl font-black cursor-pointer z-20 ${
            selectedSection === "ALL" ? "text-[#ea7c32]" : "text-black"
          }`}
        >
          ALL
        </p>
        <p
          onClick={() => setSelectedSection("PHOTOS")}
          className={`font-sans text-2xl font-black cursor-pointer ${
            selectedSection === "PHOTOS" ? "text-[#ea7c32]" : "text-black"
          }`}
        >
          PHOTOS
        </p>
        <p
          onClick={() => setSelectedSection("VIDEOS")}
          className={`font-sans text-2xl font-black cursor-pointer ${
            selectedSection === "VIDEOS" ? "text-[#ea7c32]" : "text-black"
          }`}
        >
          VIDEOS
        </p>
      </div>

      {/* Conditionally Render Sections */}
      <div className="mx-10">
        <div className="flex flex-wrap">
          {selectedSection === "ALL" && (
            <div className="relative mx-32 rounded-2xl">
              {/* Navigation buttons outside of Swiper */}
              <div className="absolute flex items-center -left-28 z-10  bg-black rounded-xl h-12 top-1/2 -translate-y-1/2 shadow-lg shadow-black/50">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="px-2 py-2 text-5xl text-white rounded"
                >
                  <FaArrowLeft className="text-lg font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                </button>
              </div>
              <div className="absolute flex items-center -right-28 z-10 bg-black rounded-xl h-12 top-1/2 -translate-y-1/2 shadow-lg shadow-black/50">
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="px-2 py-2 text-5xl text-white rounded"
                >
                  <FaArrowRight className="text-lg font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                </button>
              </div>

              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                centeredSlides
                loop={false}
                centeredSlidesBounds
                modules={[FreeMode]}
                className="mt-4"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {all?.map((links, index) => (
                  <SwiperSlide
                    key={index} // Ensure a unique key for each slide
                    className="rounded-lg animate-slideright"
                    style={{ width: "auto" }} // Ensure width is auto
                  >
                    {links.type === "video" ? (
                      // If the type is "video", render the video element
                      <video
                        src={links.link}
                        alt={links.alt}
                        className="w-80 bg-gray-500 rounded-xl h-44 object-cover cursor-pointer hover:border-3 hover:border-black"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      // Otherwise, render an image element for "image" type
                      <img
                        src={links.link}
                        alt={links.alt}
                        className="w-80 bg-gray-500 rounded-xl h-44 object-cover cursor-pointer hover:border-3 hover:border-black"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        <div className="flex flex-wrap">
          {selectedSection === "PHOTOS" && (
            <div className="relative mx-32 rounded-2xl">
              {/* Navigation buttons outside of Swiper */}
              <div className="absolute flex items-center -left-28 z-10  bg-black rounded-xl h-12 top-1/2 -translate-y-1/2 shadow-lg shadow-black/50">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="px-2 py-2 text-5xl text-white rounded"
                >
                  <FaArrowLeft className="text-lg font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                </button>
              </div>
              <div className="absolute flex items-center -right-28 z-10 bg-black rounded-xl h-12 top-1/2 -translate-y-1/2 shadow-lg shadow-black/50">
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="px-2 py-2 text-5xl text-white rounded"
                >
                  <FaArrowRight className="text-lg font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                </button>
              </div>

              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                centeredSlides
                loop={false}
                centeredSlidesBounds
                modules={[FreeMode]}
                className="mt-4"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {photos?.map((links, index) => (
                  <SwiperSlide
                    key={index} // Ensure a unique key for each slide
                    className="rounded-lg animate-slideright"
                    style={{ width: "auto" }} // Ensure width is auto
                  >
                    {/* Image element to display the image */}
                    <img
                      src={links.link}
                      alt={links.alt}
                      className="w-80 bg-gray-500 rounded-xl h-44 hover:border-3 cursor-pointer hover:border-black object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        <div className="flex flex-wrap">
          {selectedSection === "VIDEOS" && (
            <div className="relative mx-32 rounded-2xl">
              {/* Navigation buttons outside of Swiper */}
              <div className="absolute flex items-center -left-28 z-10  bg-black rounded-xl h-12 top-1/2 -translate-y-1/2 shadow-lg shadow-black/50">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="px-2 py-2 text-5xl text-white rounded"
                >
                  <FaArrowLeft className="text-lg font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                </button>
              </div>
              <div className="absolute flex items-center -right-28 z-10 bg-black rounded-xl h-12 top-1/2 -translate-y-1/2 shadow-lg shadow-black/50">
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="px-2 py-2 text-5xl text-white rounded"
                >
                  <FaArrowRight className="text-lg font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                </button>
              </div>

              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                centeredSlides
                loop={false}
                centeredSlidesBounds
                modules={[FreeMode]}
                className="mt-4"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {videos?.map((links, index) => (
                  <SwiperSlide
                    key={index} // Ensure a unique key for each slide
                    className="rounded-lg animate-slideright"
                    style={{ width: "auto" }} // Ensure width is auto
                  >
                    {/* Image element to display the image */}
                    <img
                      src={links.link}
                      alt={links.alt}
                      className="w-80 bg-gray-500 rounded-xl h-44 hover:border-3 cursor-pointer hover:border-black object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        {/* {selectedSection === "PHOTOS" && (
          <div>
            <h2 className="text-2xl">Photos</h2>
            <p>This section shows photos only.</p>
          </div>
        )}

        {selectedSection === "VIDEOS" && (
          <div>
            <h2 className="text-2xl">Videos</h2>
            <p>This section shows videos only.</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AllPosts;
