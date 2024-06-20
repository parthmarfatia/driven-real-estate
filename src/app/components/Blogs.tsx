import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col border border-midgray rounded-2xl">
      <div className="relative w-full h-48">
        <Image
          src={"/feature-1.png"}
          layout={"fill"}
          objectFit="cover"
          alt={"feature image"}
          className="rounded-t-2xl"
        />
      </div>
      <div className="flex-col p-4">
        <span className="text-elegant-blue text-sm">5 mins reading</span>
        <h4 className="mb-2">
          Dubai’s Tallest Residential Buildings: A Sky-High Retreat
        </h4>
        <p className="mb-2 text-sm">
          Dubai is renowned for its amazing skyline and modern architecture that
          draws tourists from all parts of the world.
        </p>
        <button className="mb-4 rounded bg-elegant-blue px-4 py-2 text-white font-bold border border-elegant-blue hover:bg-opacity-0 hover:border hover:border-elegant-blue hover:text-elegant-blue">
          Read More
        </button>
        <div className="flex py-4 border-t-2 border-midgray gap-4">
          <div>
            <Image
              className="rounded-full"
              src={"/profile-img.png"}
              width={40}
              height={40}
              alt="profile"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-midgray text-sm">Written By</span>
            <span className=" text-dark-gray text-base">Ward Mohammad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <section id="blogs" className="p-8 h-full w-full flex flex-col gap-8">
      <div className="w-[40rem]">
        <h2>The latest blogs, podcasts, and real estate insights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((v: number) => (
          <Card key={v} />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <button className="rounded bg-elegant-blue py-2 w-40 text-white font-bold border border-elegant-blue hover:bg-opacity-0 hover:border hover:border-elegant-blue hover:text-elegant-blue">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Blogs;
