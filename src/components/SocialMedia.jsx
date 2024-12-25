import React from 'react'

const SocialMedia = () => {
  return (
    <>
    <div className="h-auto z-10 py-40">
        {/* Yellow Background Div */}
        {/* Container for text and image */}
        {/* Road Map Heading */}
        <h1 className="text-[#ea7c32] text-9xl font-erica pl-20 font-thin w-full">
          SOCIAL MEDIA LINKS
        </h1>

        {/* Image and Reflection */}
        <div className="absolute right-20 mt-10 z-20 w-auto h-auto">
          {/* Original Image */}
          <img
            src="../../image/AllPosts/a8.png"
            className="h-[40rem] w-[40rem] block"
            alt="Dog"
          />

          {/* Reflection */}
          <img
            src="../../image/AllPosts/a8.png"
            className="h-[10rem] w-[40rem] block transform scale-y-[-1] absolute bottom-[-20%] opacity-40 blur-sm"
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
      <div className="flex flex-col mx-20 w-[35rem] mt-10 text-4xl font-bold relative">
  {/* Main Image */}
  <img src="../../image/AllPosts/i1.png" alt="i1" className="relative z-10" />

  {/* Icons (Positioned above the main image) */}
  <div className="absolute top-28 left-20 flex flex-col z-20">
    <img src="../src/assets/image/Alabay_Assets/twitter.png" alt="Twitter" className="w-16 h-16 bg-black p-2 rounded-full object-contain" />
    <h1 className="relative -top-12 hover:underline left-20 text-white font-josefin font-black">Twitter Link</h1>
    <img src="../src/assets/image/Alabay_Assets/telegram.png" alt="Telegram" className="w-16 h-16 bg-black p-2 rounded-full object-contain" />
    <h1 className="relative -top-12 hover:underline left-20 text-white font-josefin font-black">Twitter Link</h1>

  </div>
</div>

      </>
  )
}

export default SocialMedia
