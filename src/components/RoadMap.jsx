import React from "react";

const Cards = ({ content, title, src, bgcolor, className }) => {
  return (
    <div
      className={`flex flex-col justify-center text-white px-4 font-josefin pt-4 w-68 ${className}`}
      style={{ backgroundColor: bgcolor }} // Inline style for background color
    >
      <h1 className="text-3xl font-black text-center">{content}</h1>
      <p className="text-xl font-black text-center">{title}</p>
      <img src={src} alt={title} className="mt-4 h-[22rem] w-[64rem]" />
    </div>
  );
};

const RoadMap = () => {
  return (
    <>
      <div className="relative h-auto z-10 bg-yellow-300 py-32">
        {/* Yellow Background Div */}
        <div className="absolute inset-0 top-16 transform origin-left skew-y-12 bg-yellow-300 h-[85%] w-full -z-10"></div>

        {/* Container for text and image */}
        {/* Road Map Heading */}
        <h1 className="text-white text-9xl font-erica font-thin z-20 pl-20 whitespace-nowrap">
          ROAD MAP
        </h1>

        {/* Image and Reflection */}
        <div className="absolute right-20 z-20 w-auto h-auto">
          {/* Original Image */}
          <img
            src="../../image/AllPosts/a6.png"
            className="h-[40rem] w-[40rem] block"
            alt="Dog"
          />

          {/* Reflection */}
          <img
            src="../../image/AllPosts/a6.png"
            className="h-[40rem] w-[40rem] block transform scale-y-[-1] absolute bottom-[-88%] opacity-40 blur-sm"
            alt="Dog Reflection"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent 50%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent 50%)", // Better browser support
            }}
          />
        </div>
      </div>
      <div className="flex flex-col mx-20 w-[35rem] mt-40 text-4xl font-bold relative z-20">
        <p>
          Our journey is just beginning. Explore our roadmap to see the exciting
          milestones and future plans we have to store.
        </p>
        <p className="mt-8 text-[#ea7c32]">
          Join us as we grow and achieve new heights.
        </p>
      </div>

      <div className="relative w-full mt-48">
  {/* Gradient Background Div */}
  <div className="absolute bottom-0 left-0 right-0 z-30 w-full bg-gradient-to-t from-white to-transparent h-2/3"></div>
        {/* Cards Section */}
        <div className="flex relative z-20 flow-row justify-center gap-4 w-11/12 rounded-t-xl mx-10">
          <Cards
            content="Community Building"
            title="and Initial Launch"
            src="../../image/AllPosts/a1.png"
            bgcolor="#dee14c"
            className="rounded-l-3xl"
          />
          <Cards
            content="Merchandise"
            title="Store Launch"
            src="../../image/AllPosts/a2.png"
            bgcolor="#52dacc"
          />
          <Cards
            content="Community Events"
            title="and contents"
            src="../../image/AllPosts/a3.png"
            bgcolor="#ce70f0"
          />
          <Cards
            content="Expansion and New"
            title="Features"
            src="../../image/AllPosts/a4.png"
            bgcolor="#9e3232"
            className="rounded-r-3xl"
          />
        </div>
      </div>

      {/* <div className="relative inset-0 z-20 from-black to-transparent"></div> */}
    </>
  );
};

export default RoadMap;
