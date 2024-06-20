"use client";
import React, { useState } from "react";
import Image from "next/image";

const Features = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <section
      id="features"
      className="w-full h-full bg-black py-8 flex gap-4 items-center"
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
            <div className="md:ml-20">
              <Image
                src={"/feature-1.png"}
                alt="feature 1 image"
                width={333}
                height={333}
                className="rounded-lg"
              />
            </div>
            <div className="md:-mt-40">
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
      ) : (
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
            <div className="md:ml-20">
              <Image
                src={"/feature-3.png"}
                alt="feature 3 image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:-mt-40">
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
