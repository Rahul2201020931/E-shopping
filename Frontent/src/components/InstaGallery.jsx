import React from 'react'
import { Heart } from 'lucide-react'
import { assets } from '../assets/assets'

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const galleryImages = [
  { img: assets.p_img7 || assets.hero_img, user: '@charlotte_lounges', likes: '1.2k' },
  { img: assets.p_img8 || assets.hero1_img, user: '@sophia_sleeps', likes: '840' },
  { img: assets.p_img9 || assets.hero_img, user: '@emma_homestyle', likes: '2.1k' },
  { img: assets.p_img10 || assets.hero1_img, user: '@lucy_in_the_cotswolds', likes: '950' },
  { img: assets.p_img11 || assets.hero_img, user: '@olivia_london', likes: '1.5k' },
  { img: assets.p_img12 || assets.hero1_img, user: '@hannah_mornings', likes: '760' }
];

const InstaGallery = () => {
  return (
    <section className="w-full my-12 sm:my-16">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#a8421d] mb-1">
            <InstagramIcon size={14} className="text-[#e47e56]" />
            <span>Join The Community</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight">
            #TheirNibsAtHome
          </h2>
          <p className="text-xs sm:text-sm text-[#787873] mt-1">
            Tag @theirnibs on Instagram to be featured in our cozy lounge gallery.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden bg-[#faf7f5] border border-[#ebd3ca]"
            >
              <img
                src={item.img}
                alt="Customer wearing Their Nibs nightwear"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1d1d1b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                <InstagramIcon size={20} className="mb-1.5" />
                <p className="text-[11px] font-semibold tracking-wider">{item.user}</p>
                <div className="flex items-center gap-1 text-[10px] text-white/80 mt-1">
                  <Heart size={10} fill="currentColor" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default InstaGallery

