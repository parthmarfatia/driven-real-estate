"use client";
import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Features = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <section
      id="features"
      className="relative w-full h-full bg-black pb-8 pt-24 flex items-center overflow-hidden"
    >
      <div
        className="absolute left-0 w-8 md:w-16 xl:w-24 flex justify-center cursor-pointer z-10"
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <span className="material-icons text-white ml-4">arrow_back_ios</span>
      </div>

      <div
        className={twMerge(
          "flex w-full transition-transform duration-700 ease-in-out",
          isToggle ? "transform translate-x-[-100%]" : "transform translate-x-0"
        )}
      >
        <div className="min-w-full flex flex-col gap-8 px-8 md:px-16 xl:px-24">
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
          <div className="flex flex-col items-center lg:h-[333px] md:flex-row gap-8 w-full">
            <div className="md:ml-20 hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-1.png"}
                alt="feature 1 image"
                width={333}
                height={333}
                className="rounded-lg"
              />
            </div>
            <div className="md:-mt-40 hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-2.png"}
                alt="feature 2 image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="min-w-full flex flex-col gap-8 px-8 md:px-16 xl:px-24">
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
          <div className="flex flex-col lg:h-[333px] items-center md:flex-row gap-8 w-full">
            <div className="md:ml-20 hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-3.png"}
                alt="feature 3 image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:-mt-40 hover:scale-105 transition-transform duration-300">
              <Image
                src={"/feature-4.png"}
                alt="feature 4 image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute right-0 w-8 md:w-16 xl:w-24 flex justify-center cursor-pointer z-10"
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <span className="material-icons text-white">arrow_forward_ios</span>
      </div>
    </section>
  );
};

export default Features;
