import React, { useState } from 'react'
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Eleanor P.',
    location: 'Cotswolds, UK',
    product: 'Vintage Peacock Long Pyjama Set',
    rating: 5,
    quote: '“The softest pyjamas I have ever owned. The print is gorgeous and vibrant even after dozens of washes. I loved my first pair so much I immediately bought another as a gift for my sister.”'
  },
  {
    name: 'Charlotte M.',
    location: 'London, UK',
    product: 'Luxe Satin Shortie Pyjama Set',
    rating: 5,
    quote: '“Utter perfection! The fit is flattering, the fabric feels like pure silk without being fussy, and the deep pockets are such a thoughtful touch. 10/10 recommendation.”'
  },
  {
    name: 'Sophia R.',
    location: 'Edinburgh, UK',
    product: 'Botanical Garden Cotton Dressing Gown',
    rating: 5,
    quote: '“Super fast delivery and the packaging was like receiving a present from a boutique on the King’s Road. High quality cotton with breathtaking print work.”'
  }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="w-full my-12 sm:my-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d3c24] mb-1 font-sans">
            Real Customer Stories
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight">
            Loved By <span className="italic text-[#7d3c24]">Our Community</span>
          </h2>
        </div>

        <div className="relative bg-[#fbf6f4] border border-[#ebd3ca] p-8 sm:p-12 text-center shadow-xs">
          
          <Quote className="w-10 h-10 mx-auto text-[#f2c1ae] mb-4" />

          {/* Stars */}
          <div className="flex justify-center text-[#e47e56] mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-base sm:text-lg text-[#1d1d1b] italic font-serif-boutique leading-relaxed mb-6 max-w-2xl mx-auto">
            {current.quote}
          </p>

          {/* Author info */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 font-semibold text-sm text-[#1d1d1b]">
              <span>{current.name}</span>
              <CheckCircle size={14} className="text-[#435830]" />
            </div>
            <p className="text-xs text-[#787873] mt-0.5 font-sans">
              Verified Buyer • {current.location} • <span className="text-[#7d3c24] font-medium">{current.product}</span>
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-[#ebd3ca]">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-[#ebd3ca] bg-white flex items-center justify-center text-[#1d1d1b] hover:bg-[#f2c1ae] transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${index === i ? 'w-6 bg-[#7d3c24]' : 'bg-[#ebd3ca]'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-[#ebd3ca] bg-white flex items-center justify-center text-[#1d1d1b] hover:bg-[#f2c1ae] transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TestimonialCarousel
