import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import { Gem, Shirt, Leaf, UserCheck } from "lucide-react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 pt-8 md:pt-14">

        {/* Left - Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            WE'RE MORE THAN<br />JUST CLOTHES
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md">
            At <b className="text-gray-800">FOREVER</b>, we believe fashion
            is a form of self-expression. Our mission is to create timeless
            pieces that blend comfort, quality, and style — made to be worn,
            loved, and lived in.
          </p>

          <p className="font-serif italic text-xl sm:text-2xl text-gray-700 mt-2">
            Forever Team
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={assets.about_img}
            alt="Forever clothing rack"
            className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-sm"
          />
        </div>

      </div>

      {/* Built on Values */}
      <div className="mt-16 sm:mt-24">

        <p className="text-center text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-800 uppercase mb-12">
          Built On Values
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-10 pb-14 border-b border-gray-200">

          <div className="flex flex-col items-center text-center gap-3 px-2">
            <Gem className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 shrink-0" strokeWidth={1.5} />
            <b className="text-xs sm:text-sm tracking-wide text-gray-800">QUALITY FIRST</b>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We never compromise on quality. Every piece is crafted to last.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 px-2">
            <Shirt className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 shrink-0" strokeWidth={1.5} />
            <b className="text-xs sm:text-sm tracking-wide text-gray-800">TIMELESS DESIGN</b>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Clean, minimal and versatile styles that never go out of trend.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 px-2">
            <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 shrink-0" strokeWidth={1.5} />
            <b className="text-xs sm:text-sm tracking-wide text-gray-800">SUSTAINABLE CHOICE</b>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We care about the planet and make conscious choices for a better future.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 px-2">
            <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 shrink-0" strokeWidth={1.5} />
            <b className="text-xs sm:text-sm tracking-wide text-gray-800">MADE FOR YOU</b>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Designed to fit your life, your vibe and your individuality.
            </p>
          </div>

        </div>

        <p className="text-center text-[10px] sm:text-xs tracking-[0.25em] text-gray-500 uppercase py-8">
          Forever isn't just a brand, it's a lifestyle
        </p>

      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;