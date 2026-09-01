import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Feather, Sparkles } from 'lucide-react'
import { assets } from '../assets/assets'

const BrandStory = () => {
  return (
    <section className="w-full bg-[#fbf6f4] py-16 sm:py-20 my-12 border-y border-[#ebd3ca]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Left: Layered Story Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-[#ebd3ca] bg-white shadow-md">
                <img
                  src={assets.about_img || assets.hero1_img}
                  alt="Crafting hand-illustrated prints at London design studio"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Story Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white border border-[#ebd3ca] p-4 sm:p-5 shadow-lg max-w-[240px] text-left">
                <p className="text-[10px] font-semibold tracking-widest text-[#7d3c24] uppercase flex items-center gap-1 mb-1 font-sans">
                  <Feather size={12} /> Studio Heritage
                </p>
                <p className="text-xs font-normal text-[#787873]">
                  Creating original hand-painted prints and apparel in London since 2003.
                </p>
              </div>

            </div>
          </div>

          {/* Narrative Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#7d3c24] mb-3">
              <Sparkles size={13} className="text-[#e47e56]" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1d1d1b] font-serif-boutique leading-[1.1] tracking-tight mb-5">
              Print-Led Design, <br />
              <span className="italic text-[#7d3c24]">Made with Heart in London.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#787873] leading-relaxed mb-4">
              At Their Nibs, we believe that everyday style and lazy weekend mornings should feel wonderful. Every single pattern starts its journey in our London studio as a hand-drawn artwork, inspired by British florals, vintage botanicals, and modern silhouettes.
            </p>

            <p className="text-sm text-[#787873] leading-relaxed mb-8">
              We practice slow, thoughtful fashion—crafting enduring pieces from 100% natural cotton, airy gauze, and silky recycled fabrics. Designed with comfortable fits and timeless charm that you'll reach for day after day.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#ebd3ca] mb-8">
              <div>
                <p className="text-2xl sm:text-3xl font-normal text-[#1d1d1b] font-serif-boutique italic">20+ Years</p>
                <p className="text-xs text-[#787873] uppercase tracking-wider font-medium mt-1">London Design Legacy</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-normal text-[#1d1d1b] font-serif-boutique italic">100% Unique</p>
                <p className="text-xs text-[#787873] uppercase tracking-wider font-medium mt-1">Hand-Painted Artwork</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#f2c1ae] hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] px-7 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default BrandStory

