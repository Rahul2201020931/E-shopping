import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { assets } from '../assets/assets'

const categories = [
  {
    id: 'cotton-sets',
    title: 'Traditional Cotton Pyjamas',
    subtitle: '100% Breathable & Soft',
    image: assets.p_img1 || assets.hero_img,
    tag: 'Classic Bestseller',
    link: '/collection'
  },
  {
    id: 'satin-luxe',
    title: 'Silky Satin Sleepwear',
    subtitle: 'Fluid Drape & Vibrant Prints',
    image: assets.p_img2 || assets.hero1_img,
    tag: 'Luxury Touch',
    link: '/collection'
  },
  {
    id: 'shortie-sets',
    title: 'Shortie Sets & Camis',
    subtitle: 'Lightweight Warm-Weather Sets',
    image: assets.p_img3 || assets.hero_img,
    tag: 'Spring Essential',
    link: '/collection'
  },
  {
    id: 'robes-kimonos',
    title: 'Robes & Kimonos',
    subtitle: 'Elegant Lounging Layers',
    image: assets.p_img4 || assets.hero1_img,
    tag: 'Lounge Layer',
    link: '/collection'
  },
  {
    id: 'kids-family',
    title: 'Kids & Family Matching',
    subtitle: 'Cosy Sets For All Ages',
    image: assets.p_img5 || assets.hero_img,
    tag: 'Family Favorite',
    link: '/collection'
  },
  {
    id: 'accessories-gifting',
    title: 'Eye Masks & Gifting',
    subtitle: 'Matching Pouches & Scrunchies',
    image: assets.p_img6 || assets.hero1_img,
    tag: 'Gift Ready',
    link: '/collection'
  }
];

const CategoryTiles = () => {
  return (
    <section className="w-full my-12 sm:my-16">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#a8421d] mb-2">
            <Sparkles size={13} className="text-[#e47e56]" />
            <span>Discover The Collections</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-[#787873] mt-2 max-w-lg mx-auto">
            Explore our print-led nightwear, designed with hand-illustrated motifs and conscious fabrics.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative flex flex-col overflow-hidden bg-[#faf7f5] border border-[#ebd3ca] transition-all duration-300 hover:shadow-md hover:border-[#dcb5a7]"
            >
              {/* Image Container with 3:4 aspect ratio */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f4f0eb]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-106"
                />
                
                {/* Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-white/90 backdrop-blur-xs text-[#1d1d1b] text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 shadow-xs">
                    {cat.tag}
                  </span>
                </div>
              </div>

              {/* Text info */}
              <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1d1d1b] tracking-tight group-hover:text-[#e47e56] transition-colors leading-snug line-clamp-1">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#787873] mt-0.5 line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#f4f0eb] flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-[#1d1d1b] group-hover:text-[#e47e56] transition-colors">
                  <span>Explore</span>
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CategoryTiles
