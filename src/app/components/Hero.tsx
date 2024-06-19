import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/hero-video.mp4"
        title="Background video"
      >
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col justify-evenly z-10 relative h-full px-8">
        <div className="w-2/3">
          <span className="text-white bg-black/50 py-2 px-4 rounded-full">
            Your Property
          </span>
          <h2 className="text-white">
            EXPERTS IN BUYING, RENTING OR SELLING PROPERTIES IN DUBAI
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
