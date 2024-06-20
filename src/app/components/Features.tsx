import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-full bg-black p-8 flex gap-4 items-center"
    >
      <div>
        <span className="material-icons text-white">arrow_back_ios</span>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="w-[26rem]">
          <h2 className="text-white">
            Check out the best area guides in Dubai
          </h2>
        </div>
        <div className="w-[20rem]">
          <p className="text-white font-normal">
            These popular areas cater to diverse preferences, from luxurious
            waterfront lifestyles to a vibrant urban experience.
          </p>
        </div>
        <div className="flex gap-8 w-full">
          <div className="ml-20">
            <Image
              src={"/feature-1.png"}
              alt="feature 1 image"
              width={300}
              height={300}
            />
          </div>
          <div className="-mt-40">
            <Image
              src={"/feature-2.png"}
              alt="feature 2 image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <span className="material-icons text-white">arrow_forward_ios</span>
      </div>
    </section>
  );
};

export default Features;
