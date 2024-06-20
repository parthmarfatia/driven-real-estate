import React from "react";

const NewsLetter = () => {
  return (
    <section
      id="newsletter"
      className="newsletter py-16 h-full w-full flex flex-col items-center gap-8 bg-offwhite"
    >
      <div className="w-[55rem] text-center">
        <h2>Get the Real Estate Insights Newsletter in Your Inbox Monthly</h2>
      </div>
      <div className="flex gap-6">
        <input
          type="text"
          placeholder="Email Address"
          className="pl-8 w-96 font-bold rounded border border-midgray placeholder:text-midgray"
        />
        <button className="rounded bg-elegant-blue py-4 px-8 text-white font-bold border border-elegant-blue hover:bg-opacity-0 hover:border hover:border-elegant-blue hover:text-elegant-blue">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
