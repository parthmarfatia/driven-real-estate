"use client";
import React, { useState } from "react";
import Image from "next/image";

const Features = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <section
      id="features"
      className="w-full h-full bg-black pb-8 pt-24 flex gap-4 items-center"
    >
      <div
        className="w-8 md:w-16 xl:w-24 flex justify-center cursor-pointer"
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <span className="material-icons text-white ml-4">arrow_back_ios</span>
      </div>
      {isToggle ? (
        <div className="flex flex-col gap-8 w-full">
          <div className="w-full md:w-[26rem]">
            <h2 className="text-white">
              Check out the best area guides in Dubai
            </h2>
          </div>
          <div className="w-full md:w-[20rem]">
            <p className="text-white font-normal">
              These popular areas cater to diverse preferences, from luxurious
              waterfront lifestyles to a vibrant urban experience.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-8 w-full">
            <div className="w-[300px] h-[300px] md:ml-20 relative hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-1.png"}
                alt="feature 1 image"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-[500px] h-[300px] md:-mt-40 relative hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-2.png"}
                alt="feature 2 image"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 w-full">
          <div className="w-full md:w-[26rem]">
            <h2 className="text-white">Discover Your Perfect Neighborhood</h2>
          </div>
          <div className="w-full md:w-[20rem]">
            <p className="text-white font-normal">
              Whether you are looking for bustling city life or peaceful
              surroundings, our comprehensive guides help you find the ideal
              place.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-8 w-full">
            <div className="w-[500px] h-[300px] md:ml-20 relative hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-3.png"}
                alt="feature 3 image"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-[500px] h-[300px] md:-mt-40 relative hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-4.png"}
                alt="feature 4 image"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      )}
      <div
        className="ml-auto w-8 md:w-16 xl:w-24 flex justify-center cursor-pointer"
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <span className="material-icons text-white">arrow_forward_ios</span>
      </div>
    </section>
  );
};

export default Features;
