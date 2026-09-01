import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, Truck, RefreshCw, ShieldCheck, Lock } from 'lucide-react'

const Hero = () => {
  return (
    <div className="w-full space-y-3 sm:space-y-4 my-2 sm:my-4">
      
      {/* ========================================================
          1. MAIN EDITORIAL HERO (Giant Typography + Center Model)
          ======================================================== */}
      <section className="relative w-full min-h-[460px] sm:min-h-[580px] lg:min-h-[660px] bg-[#f0eeeb] overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none">
        
        {/* Giant Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <span className="text-[26vw] sm:text-[23vw] font-black tracking-[-0.04em] text-[#1a1a1a] opacity-90 leading-none font-sans uppercase transform scale-y-105 select-none">
            GAZU
          </span>
        </div>

        {/* Center Walking Model Overlapping the Giant Typography */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none z-10">
          <img
            src={assets.hero1_img}
            alt="Fashion model"
            className="h-[88%] sm:h-[92%] lg:h-[96%] w-auto object-contain drop-shadow-2xl translate-y-1"
          />
        </div>

        {/* Top Row: Corner Tagline */}
        <div className="relative z-20 flex items-start justify-between">
          <div className="text-[11px] sm:text-[13px] font-bold tracking-[0.18em] text-[#1a1a1a] uppercase leading-tight font-sans">
            <p>FASHION</p>
            <p>THAT MOVES</p>
            <p>WITH YOU.</p>
            <div className="w-8 h-[2px] bg-[#1a1a1a] mt-1.5" />
          </div>
        </div>

        {/* Bottom Row: Action Buttons (Left) & Seasonal Badge (Right) */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-40 sm:pt-0">
          
          {/* Left Buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/collection"
              className="bg-[#111111] hover:bg-[#333333] text-white px-7 sm:px-9 py-3 sm:py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-md active:scale-95"
            >
              SHOP NOW
            </Link>

            <Link
              to="/collection?filter=new"
              className="text-xs font-bold tracking-[0.14em] text-[#111111] uppercase pb-1 border-b-2 border-[#111111] hover:text-[#555555] hover:border-[#555555] transition-all"
            >
              EXPLORE NEW IN
            </Link>
          </div>

          {/* Right Season Info */}
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">NEW</p>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">COLLECTION</p>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">2026</p>
            <div className="w-8 h-[2px] bg-[#1a1a1a] ml-auto mt-1" />
          </div>

        </div>
      </section>


      {/* ========================================================
          2. DARK QUICK-CATEGORY STRIP (MEN / WOMEN / KIDS)
          ======================================================== */}
      <section className="w-full bg-[#111111] text-white py-6 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          {/* MEN */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
            <div className="w-16 h-20 sm:w-18 sm:h-22 bg-[#222222] overflow-hidden shrink-0">
              <img
                src={assets.men}
                alt="Men's collection"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-[0.16em] uppercase">MEN</h3>
              <p className="text-[11px] text-neutral-400 font-light">Elevated everyday essentials.</p>
              <Link
                to="/collection?category=Men"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-neutral-300 hover:text-white pt-1 group"
              >
                <span>SHOP MEN</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* WOMEN */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
            <div className="w-16 h-20 sm:w-18 sm:h-22 bg-[#222222] overflow-hidden shrink-0">
              <img
                src={assets.women}
                alt="Women's collection"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-[0.16em] uppercase">WOMEN</h3>
              <p className="text-[11px] text-neutral-400 font-light">Effortless style for every you.</p>
              <Link
                to="/collection?category=Women"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-neutral-300 hover:text-white pt-1 group"
              >
                <span>SHOP WOMEN</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* KIDS */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
            <div className="w-16 h-20 sm:w-18 sm:h-22 bg-[#222222] overflow-hidden shrink-0">
              <img
                src={assets.kid}
                alt="Kids collection"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-[0.16em] uppercase">KIDS</h3>
              <p className="text-[11px] text-neutral-400 font-light">Comfort meets cool everyday.</p>
              <Link
                to="/collection?category=Kids"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-neutral-300 hover:text-white pt-1 group"
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
      <section className="w-full bg-[#e8e6e3] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px] sm:min-h-[420px] items-center">
          
          {/* Left Text */}
          <div className="md:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-3 sm:space-y-4">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-600 uppercase">
              NEW SEASON
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111111] leading-none uppercase font-sans">
              NEW <br />VIBES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal max-w-sm pt-1">
              Discover everything new and now. Handcrafted silhouettes made for everyday movement.
            </p>
            <div className="pt-3">
              <Link
                to="/collection?filter=new"
                className="inline-block bg-[#111111] hover:bg-[#333333] text-white px-7 py-3 text-xs font-bold tracking-[0.14em] uppercase transition-all shadow-sm active:scale-95"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>

          {/* Right Editorial Model Shot */}
          <div className="md:col-span-7 h-[300px] sm:h-[400px] md:h-full relative overflow-hidden bg-[#d9d7d4]">
            <img
              src={assets.men}
              alt="New season fashion look"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </section>


      {/* ========================================================
          4. VALUE PROPOSITION BAR (4 ICONS)
          ======================================================== */}
      <section className="w-full bg-[#fafafa] border-y border-[#e5e5e5] py-6 px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-neutral-100 text-[#111111]">
              <Truck size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider text-[#111111] uppercase">FAST DELIVERY</p>
              <p className="text-[11px] text-neutral-500">Quick & safe delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-neutral-100 text-[#111111]">
              <RefreshCw size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider text-[#111111] uppercase">EASY RETURNS</p>
              <p className="text-[11px] text-neutral-500">Within 15 days</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-neutral-100 text-[#111111]">
              <ShieldCheck size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider text-[#111111] uppercase">QUALITY ASSURED</p>
              <p className="text-[11px] text-neutral-500">Best fashion, best quality</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-neutral-100 text-[#111111]">
              <Lock size={18} strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider text-[#111111] uppercase">SECURE PAYMENT</p>
              <p className="text-[11px] text-neutral-500">100% secure checkout</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Hero


