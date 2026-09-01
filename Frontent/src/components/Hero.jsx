import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RefreshCw, ShieldCheck, Lock, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <div className="w-full space-y-4 my-2 sm:my-4">
      
      {/* ========================================================
          1. MAIN EDITORIAL HERO (Giant Typography + Center Model)
          ======================================================== */}
      <section className="relative w-full min-h-[460px] sm:min-h-[580px] lg:min-h-[660px] bg-[#faf7f5] border border-[#ebd3ca] overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none">
        
        {/* Giant Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <span className="text-[26vw] sm:text-[23vw] font-normal tracking-[-0.04em] text-[#ebd3ca] opacity-70 leading-none font-serif-boutique italic uppercase transform scale-y-105 select-none">
            NIBS
          </span>
        </div>

        {/* Center Walking Model Overlapping the Giant Typography */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none z-10">
          <img
            src={assets.hero1_img}
            alt="Their Nibs boutique collection"
            className="h-[88%] sm:h-[92%] lg:h-[96%] w-auto object-contain drop-shadow-2xl translate-y-1"
          />
        </div>

        {/* Top Row: Corner Tagline */}
        <div className="relative z-20 flex items-start justify-between">
          <div className="text-[12px] sm:text-[14px] font-medium tracking-[0.12em] text-[#1d1d1b] uppercase leading-tight font-sans">
            <p className="text-[#7d3c24] font-semibold">BRITISH BOUTIQUE</p>
            <p>PRINTS CRAFTED</p>
            <p>TO BRIGHTEN UP EVERY DAY</p>
            <div className="w-10 h-[2px] bg-[#7d3c24] mt-2" />
          </div>
        </div>

        {/* Bottom Row: Action Buttons (Left) & Seasonal Badge (Right) */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-40 sm:pt-0">
          
          {/* Left Buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/collection"
              className="bg-[#f2c1ae] hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] px-7 sm:px-9 py-3 sm:py-3.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 shadow-sm active:scale-95 font-sans"
            >
              SHOP COLLECTION
            </Link>

            <Link
              to="/collection?filter=new"
              className="text-xs font-semibold tracking-[0.1em] text-[#1d1d1b] uppercase pb-1 border-b-2 border-[#1d1d1b] hover:text-[#7d3c24] hover:border-[#7d3c24] transition-all font-sans"
            >
              EXPLORE NEW IN
            </Link>
          </div>

          {/* Right Season Info */}
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#787873] uppercase">NEW SEASON</p>
            <p className="text-lg font-normal text-[#1d1d1b] font-serif-boutique italic">Spring • Boutique</p>
            <div className="w-8 h-[2px] bg-[#7d3c24] ml-auto mt-1" />
          </div>

        </div>
      </section>


      {/* ========================================================
          2. QUICK-CATEGORY STRIP (MEN / WOMEN / KIDS)
          ======================================================== */}
      <section className="w-full bg-[#1d1d1b] text-white py-6 px-4 sm:px-8 lg:px-12 border border-[#ebd3ca]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          {/* MEN */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
            <div className="w-16 h-20 sm:w-18 sm:h-22 bg-[#2a2a28] overflow-hidden shrink-0 border border-[#ebd3ca]/20">
              <img
                src={assets.men}
                alt="Men's collection"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold tracking-[0.14em] uppercase font-sans">MEN</h3>
              <p className="text-[11px] text-neutral-400 font-light">Super soft lounge & sleepwear.</p>
              <Link
                to="/collection?category=Men"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#f2c1ae] hover:text-[#e47e56] pt-1 group"
              >
                <span>SHOP MEN</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* WOMEN */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
            <div className="w-16 h-20 sm:w-18 sm:h-22 bg-[#2a2a28] overflow-hidden shrink-0 border border-[#ebd3ca]/20">
              <img
                src={assets.women}
                alt="Women's collection"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold tracking-[0.14em] uppercase font-sans">WOMEN</h3>
              <p className="text-[11px] text-neutral-400 font-light">Signature hand-painted prints.</p>
              <Link
                to="/collection?category=Women"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#f2c1ae] hover:text-[#e47e56] pt-1 group"
              >
                <span>SHOP WOMEN</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* KIDS */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
            <div className="w-16 h-20 sm:w-18 sm:h-22 bg-[#2a2a28] overflow-hidden shrink-0 border border-[#ebd3ca]/20">
              <img
                src={assets.kid}
                alt="Kids collection"
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold tracking-[0.14em] uppercase font-sans">KIDS</h3>
              <p className="text-[11px] text-neutral-400 font-light">Playful prints in ultra-soft cotton.</p>
              <Link
                to="/collection?category=Kids"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#f2c1ae] hover:text-[#e47e56] pt-1 group"
              >
                <span>SHOP KIDS</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          3. "NEW SEASON / NEW VIBES" SPLIT EDITORIAL BANNER
          ======================================================== */}
      <section className="w-full bg-[#fbf6f4] border border-[#ebd3ca] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px] sm:min-h-[420px] items-center">
          
          {/* Left Text */}
          <div className="md:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-3 sm:space-y-4">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#7d3c24] uppercase">
              NEW IN ARRIVALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1d1d1b] leading-tight font-serif-boutique">
              Fresh Prints <br />
              <span className="italic text-[#7d3c24]">& Cosy Comfort</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#787873] font-normal max-w-sm pt-1 leading-relaxed">
              Designed in London with hand-painted patterns on sustainably sourced, super soft fabrics made to make every day special.
            </p>
            <div className="pt-3">
              <Link
                to="/collection?filter=new"
                className="inline-block bg-[#f2c1ae] hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] px-7 py-3 text-xs font-semibold tracking-[0.1em] uppercase transition-all shadow-sm active:scale-95"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>

          {/* Right Editorial Model Shot */}
          <div className="md:col-span-7 h-[300px] sm:h-[400px] md:h-full relative overflow-hidden bg-[#faf7f5]">
            <img
              src={assets.men}
              alt="Their Nibs new season pyjamas"
              className="w-full h-full object-cover object-top hover:scale-102 transition-all duration-700"
            />
          </div>

        </div>
      </section>


      {/* ========================================================
          4. VALUE PROPOSITION BAR (4 ICONS)
          ======================================================== */}
      <section className="w-full bg-[#faf7f5] border border-[#ebd3ca] py-6 px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#f2c1ae]/40 text-[#7d3c24]">
              <Truck size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#1d1d1b] uppercase">FREE UK DELIVERY</p>
              <p className="text-[11px] text-[#787873]">On orders over £50</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#f2c1ae]/40 text-[#7d3c24]">
              <RefreshCw size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#1d1d1b] uppercase">EASY RETURNS</p>
              <p className="text-[11px] text-[#787873]">Hassle-free 30 day returns</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#f2c1ae]/40 text-[#7d3c24]">
              <ShieldCheck size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#1d1d1b] uppercase">SUSTAINABLY MADE</p>
              <p className="text-[11px] text-[#787873]">Eco-conscious fabrics</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#f2c1ae]/40 text-[#7d3c24]">
              <Lock size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#1d1d1b] uppercase">SECURE CHECKOUT</p>
              <p className="text-[11px] text-[#787873]">100% encrypted & secure</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Hero


