import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-full bg-black py-8 px-8 md:px-16 xl:px-24 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 border-y-2 border-midgray py-8">
        <div className="flex flex-col gap-4">
          <h5 className="text-white">Our Properties</h5>
          <div className="flex flex-col gap-2 text-midgray text-sm">
            <Link href="/buy">Buy</Link>
            <Link href="/rent">Rent</Link>
            <Link href="/sell">Sell</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white">For Developers</h5>
          <div className="flex flex-col gap-2 text-midgray text-sm">
            <Link href="/why-driven-properties">Why Driven properties</Link>
            <Link href="/case-studies">Case studies</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white">Services</h5>
          <div className="flex flex-col gap-2 text-midgray text-sm">
            <Link href="/luxury">Luxury</Link>
            <Link href="/relocation-services">Relocation Services</Link>
            <Link href="/property-management">Property management</Link>
            <Link href="/property-valuation">Property Valuation</Link>
            <Link href="/property-brokerage">Property Brokerage</Link>
            <Link href="/commercial-industrial">Commercial & Industrial</Link>
            <Link href="/interior-design-fit-out">
              Interior Design & Fit Out
            </Link>
            <Link href="/real-estate-development">Real Estate Development</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white">Blog, Podcast & Data</h5>
          <div className="flex flex-col gap-2 text-midgray text-sm">
            <Link href="/blog">Blog</Link>
            <Link href="/podcast">Podcast</Link>
            <Link href="/data-market-trends">Data & Market Trends</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <div className="flex flex-col gap-2">
            <h5 className="text-white">Branch Offices</h5>
            <div className="flex gap-4">
              <p className="text-midgray text-sm">
                Jumeirah Village Circle
                <br />
                Office No 4 Chaimaa Premiere
                <br />
                District 15, JVC
                <br />
                Dubai, UAE
                <br />
                Tel: +971 (0) 4 578 6295
                <br />
                Fax: +971 (0) 4 429 6024
              </p>
              <p className="text-midgray text-sm">
                Dubai Creek Harbour
                <br />
                Office No GFR-08
                <br />
                The Creek Residences South Podium
                <br />
                Dubai Creek Harbour, UAE
                <br />
                Tel: +971 (0) 4 257 2772
                <br />
                Fax: +971 (0) 4 429 602
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-white">International Offices</h5>
            <div className="flex gap-8">
              <p className="text-midgray text-sm">
                China
                <br />
                Office No 2005B
                <br />
                Shenzhen ICC Tower
                <br />
                168 Fuhua 3rd Road
                <br />
                Futian CBD, Shenzhen City
                <br />
                Guangdong Province, China
              </p>
              <p className="text-midgray text-sm">
                Saudi Arabia
                <br />
                Office No 14
                <br />
                Home Offices Complex
                <br />
                Al Urubah Street
                <br />
                Riyadh, KSA
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <span className="flex justify-center">
              <span className="text-midgray">Follow Us</span>
              <span className="material-icons text-white cursor-pointer ml-4">
                facebook
              </span>
              <span className="material-icons text-white cursor-pointer ml-4">
                email
              </span>
              <span className="material-icons text-white cursor-pointer ml-4">
                phone
              </span>
            </span>
            <span className="ml-4 flex justify-center gap-2">
              <span className="text-midgray">Call us: </span>800 374836
            </span>
          </div>

          <div className="flex justify-center">
            <Link href="/privacy-policy" className="text-white mr-2 underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="text-white ml-2 underline">
              Terms & Conditions
            </Link>
          </div>

          <div className="text-center">
            <span>© 2023 Driven Properties LLC. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
