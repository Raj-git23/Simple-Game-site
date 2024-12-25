import React from "react";

const Rectangles = ({content, title}) => {
    return (
      <div className="bg-[#282222eb] text-white w-3/4 py-5 drop-shadow-[6px_20px_13px_rgba(0,0,0,0.5)] rounded-2xl">
        <p className="text-2xl font-black pl-10">{title}</p>
        <p className="text-5xl text-[#f6f280] font-black pl-10">{content}</p>
      </div>
    );
  };

const Tokens = () => {
  return (
    <>
    <div className="h-auto">

      <div className="relative h-auto z-10 py-32">
      <div className="absolute inset-0 transform pt-40 -skew-y-6 bg-yellow-300 h-[92%] origin-right bg-cover -z-10"></div>

        {/* Yellow Background Div */}
        <div className="absolute inset-0 top-[35rem] transform origin-left skew-y-12 bg-yellow-300 h-[85%] w-full -z-10"></div>
        <div className="absolute inset-0 top-[18rem] bg-yellow-300 h-[40rem] w-full -z-10"></div>

        {/* Container for text and image */}
        {/* Road Map Heading */}
        <h1 className="text-white text-9xl font-erica font-thin z-20 pl-20 mt-16 whitespace-nowrap">
          TOKENOMICS
        </h1>

        {/* Image and Reflection */}
        <div className="absolute right-12 z-20 w-auto h-auto">
          {/* Original Image */}
          <img
            src="../../image/AllPosts/a7.png"
            className="h-[40rem] w-[40rem] block"
            alt="Dog"
          />

          {/* Reflection */}
          <img
            src="../../image/AllPosts/a7.png"
            className="h-[40rem] w-[40rem] block transform scale-y-[-1] absolute bottom-[-78%] opacity-40 blur-sm"
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
      <div className="flex flex-col space-y-10 items-center -mt-8 justify-around mx-20 w-[35rem] text-4xl font-bold relative z-20">
        <Rectangles content="LOCKED" title="LIQUIDITY" />
        <Rectangles content="RENOUNCED" title="CONTRACT" />
        <Rectangles content="0%" title="TAXES" />
      </div>
      </div>

    </>
  );
};

export default Tokens;
