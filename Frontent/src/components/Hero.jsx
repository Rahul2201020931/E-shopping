import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative w-full min-h-[90vh] sm:min-h-[95vh] bg-[#f0efec] overflow-hidden">

      {/* Top tagline */}
      <div className="absolute top-8 sm:top-12 left-4 sm:left-12 z-20 animate-[fadeIn_0.8s_ease-out]">
        <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-700 leading-relaxed">
          TIMELESS STYLE.<br />MADE TO LAST.
        </p>
        <div className="w-8 h-[2px] bg-gray-700 mt-2"></div>
      </div>

      {/* New collection tag */}
      <div className="absolute top-8 sm:top-12 right-4 sm:right-12 z-20 text-right animate-[fadeIn_0.8s_ease-out]">
        <p className="text-xs sm:text-sm font-medium tracking-widest text-gray-700 leading-relaxed">
          NEW<br />COLLECTION<br />2024
        </p>
      </div>

      {/* Giant background brand text - vertically centered */}
      <h1 className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full text-center font-extrabold uppercase leading-none text-gray-900/90
                      text-[22vw] sm:text-[19vw] lg:text-[17vw]
                      tracking-tight select-none z-0
                      animate-[fadeIn_1s_ease-out]">
        Forever
      </h1>

      {/* Model image overlapping the text */}
      <div className="absolute inset-x-0 bottom-[120px] sm:bottom-[140px] top-[12%] flex items-end justify-center z-10 pointer-events-none">
        <img
          src={assets.hero1_img}
          alt="Model wearing the Forever 2024 collection"
          className="h-full max-h-[620px] w-auto object-contain object-bottom
                     drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]
                     animate-[slideUp_0.9s_ease-out]"
        />
      </div>

      {/* Bottom left CTAs - pinned to bottom of section */}
      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-12 z-20 flex items-center gap-4 sm:gap-6 animate-[fadeIn_1.1s_ease-out]">
        <Link
          to="/collection"
          className="group inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-black text-white text-sm tracking-wide
                     hover:bg-gray-800 hover:gap-3 hover:shadow-lg hover:scale-[1.02]
                     transition-all duration-300 ease-out active:scale-97"
        >
          SHOP NOW
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          to="/collection"
          className="relative text-sm font-medium tracking-wide text-gray-800 pb-0.5 transition-colors duration-300 hover:text-gray-500
                     after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:bg-gray-800 after:origin-left after:scale-x-100
                     after:transition-transform after:duration-300 hover:after:scale-x-0"
        >
          EXPLORE NEW IN
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-8 sm:bottom-12 right-12 z-20 flex-col items-center gap-1 text-gray-500 animate-[bounce-subtle_2s_ease-in-out_infinite]">
        <span className="text-[10px] tracking-widest">SCROLL</span>
        <ArrowDown size={14} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>

    </div>
  )
}

export default Hero