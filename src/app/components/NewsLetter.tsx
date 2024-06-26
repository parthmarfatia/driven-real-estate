import React from "react";

const NewsLetter = () => {
  return (
    <section
      id="newsletter"
      className="newsletter pb-16 pt-24 px-8 md:px-16 xl:px-24 h-full w-full flex flex-col items-center gap-8 bg-offwhite"
    >
      <div className="w-full lg:w-[55rem] text-center">
        <h2>Get the Real Estate Insights Newsletter in Your Inbox Monthly</h2>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:flex-row gap-6">
        <input
          type="text"
          placeholder="Email Address"
          className="pl-8 py-4 w-full md:w-96 font-bold rounded border border-midgray placeholder:text-midgray"
        />
        <button className="rounded bg-elegant-blue py-4 px-8 text-white font-bold border border-elegant-blue hover:scale-105 transition-transform duration-300 hover:bg-elegant-blue/80">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
