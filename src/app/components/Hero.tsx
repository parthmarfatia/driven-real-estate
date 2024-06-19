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
      <div className="flex flex-col justify-between pt-36 pb-8 z-10 relative h-full px-8 bg-black/30">
        <div className="w-2/3">
          <span className="text-white bg-black/30 py-2 px-4 rounded-full">
            Your Property
          </span>
          <h2 className="text-white">
            EXPERTS IN BUYING, RENTING OR SELLING PROPERTIES IN DUBAI
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-white text-2xl">Why Choose Driven?</span>
          <div className="flex justify-between flex-wrap gap-4 box-border">
            <div className="p-4 flex flex-col bg-black/30 text-white rounded-lg border-l-8 border-black flex-1">
              <h3>Among the most trusted in the region</h3>
              <p className="font-light">
                Our agents and staff are rated 4.5 stars on Google and have
                operated in the market for over a decade
              </p>
            </div>
            <div className="p-4 flex flex-col bg-black/30 text-white rounded-lg border-l-8 border-black flex-1">
              <h3>We move fast</h3>
              <p className="font-light">
                If you are buying and need to close quickly, look no further.
                Your dedicated agent and conveyance team can close deals in as
                fast as 24 hours
              </p>
            </div>
            <div className="p-4 flex flex-col bg-black/30 text-white rounded-lg border-l-8 border-black flex-1">
              <h3>We move fast</h3>
              <p className="font-light">
                If you are buying and need to close quickly, look no further.
                Your dedicated agent and conveyance team can close deals in as
                fast as 24 hours
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white text-md">Lets Get Started</span>
          <button className="rounded w-40 bg-blue-500 p-4 text-white font-bold border border-blue-500 hover:bg-opacity-0 hover:border hover:border-blue-500 hover:text-blue-400">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
