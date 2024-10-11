import React from "react";

const Vision = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center z-20">
      <h1 className="text-[#ea7c32] text-9xl font-erica font-thin">
        {" "}
        PROJECT VISION
      </h1>
      <div className="flex mt-20 justify-center relative h-auto z-10">
      <div className="absolute inset-0 mt-52 transform -skew-y-6 bg-yellow-300 h-[92%] origin-right bg-cover -z-10"></div>
        {/* Original Image */}
        <img
          src="../src/assets/image/AllPosts/a5.png"
          alt="dog"
          className="h-5/6 w-5/6"
        />
        <div className="absolute top-full h-6 -mt-10 w-8/12 bg-black opacity-50 blur-md"></div>

        {/* Reflection */}
        <img
          src="../src/assets/image/AllPosts/a5.png"
          alt="dog reflection"
          className="h-4/6 w-5/6 -mt-16 absolute top-full scale-y-[-1] opacity-40"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1), transparent 50%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 50%)", // Better browser support
          }}
        />
      </div>
      <p className="font-bold font-sans text-[30px] text-center mx-32 leading-8 mt-16 z-10">
        Our mission is to honor the heritage of the Alabay by creating a vibrant loyal, and pwerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
      </p>
    </div>
  );
};

export default Vision;