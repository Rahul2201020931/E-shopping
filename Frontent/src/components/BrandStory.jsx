import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Feather, Sparkles } from 'lucide-react'
import { assets } from '../assets/assets'

const BrandStory = () => {
  return (
    <section className="w-full bg-neutral-50 py-16 sm:py-20 my-12 border-y border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Left: Layered Story Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-neutral-200 bg-white shadow-md">
                <img
                  src={assets.about_img || assets.hero1_img}
                  alt="Crafting hand-illustrated prints at London design studio"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Story Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white border border-neutral-200 p-4 sm:p-5 shadow-lg max-w-[240px] text-left">
                <p className="text-[10px] font-bold tracking-widest text-[#111111] uppercase flex items-center gap-1 mb-1">
                  <Feather size={12} /> Studio Heritage
                </p>
                <p className="text-xs font-normal text-neutral-600">
                  Creating original hand-painted prints and apparel in London since 2003.
                </p>
              </div>

            </div>
          </div>

          {/* Narrative Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 mb-3">
              <Sparkles size={13} className="text-[#111111]" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-sans leading-[1.1] tracking-tight uppercase mb-5">
              Print-Led Design, <br />
              <span className="font-light text-neutral-500">Made with Heart in London.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
              At Their Nibs, we believe that everyday style and lazy weekend mornings should feel wonderful. Every single pattern starts its journey in our London studio as a hand-drawn artwork, inspired by British florals, vintage botanicals, and modern silhouettes.
            </p>

            <p className="text-sm text-neutral-500 leading-relaxed mb-8">
              We practice slow, thoughtful fashion—crafting enduring pieces from 100% natural cotton, airy gauze, and silky recycled fabrics. Designed with comfortable fits and timeless charm that you'll reach for day after day.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-200 mb-8">
              <div>
                <p className="text-2xl sm:text-3xl font-sans text-[#111111] font-bold">20+ Years</p>
                <p className="text-xs text-neutral-500 mt-0.5">Of British boutique heritage</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-sans text-[#111111] font-bold">100% Unique</p>
                <p className="text-xs text-neutral-500 mt-0.5">Bespoke in-house illustrations</p>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors shadow-xs"
              >
                Read Our Story
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default BrandStory

