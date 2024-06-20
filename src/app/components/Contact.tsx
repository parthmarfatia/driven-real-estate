import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-full bg-black p-8 flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-24 w-full">
        <div className="w-[24rem]">
          <h2 className="text-white">Speak to an agent today</h2>
        </div>
        <div className="w-[24rem]">
          <p className="text-midgray text-2xl">
            Sign up for our weekly newsletter for market updates!
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="p-2 rounded-lg pl-3 bg-optienal-dark-blue border border-black focus:outline-none text-white placeholder:text-midgray placeholder:opacity-50"
            placeholder="First Name"
          />
          <input
            type="text"
            className="p-2 rounded-lg pl-3 bg-optienal-dark-blue border border-black focus:outline-none text-white placeholder:text-midgray placeholder:opacity-50"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="p-2 rounded-lg pl-3 bg-optienal-dark-blue border border-black focus:outline-none text-white placeholder:text-midgray placeholder:opacity-50"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="p-2 rounded-lg pl-3 bg-optienal-dark-blue border border-black focus:outline-none text-white placeholder:text-midgray placeholder:opacity-50"
            placeholder="Phone Number"
          />
        </div>
        <textarea
          className="p-2 mt-4 h-32 rounded-lg pl-3 bg-optienal-dark-blue border border-black focus:outline-none text-white placeholder:text-midgray placeholder:opacity-50"
          placeholder="Your Message"
        ></textarea>
        <button className="mt-6 rounded bg-elegant-blue py-2 w-full text-white font-bold border border-elegant-blue hover:bg-transparent hover:text-elegant-blue">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
