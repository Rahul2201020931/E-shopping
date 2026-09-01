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
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 mb-1">
            Real Customer Stories
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] uppercase tracking-tight font-sans">
            Loved By Our Community
          </h2>
          <div className="w-8 h-[2px] bg-[#111111] mx-auto mt-2" />
        </div>

        <div className="relative bg-neutral-50 border border-neutral-200 p-8 sm:p-12 text-center shadow-xs">
          
          <Quote className="w-10 h-10 mx-auto text-neutral-300 mb-4" />

          {/* Stars */}
          <div className="flex justify-center text-amber-500 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-base sm:text-lg text-[#111111] italic leading-relaxed mb-6 max-w-2xl mx-auto">
            {current.quote}
          </p>

          {/* Author info */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 font-bold text-sm text-[#111111]">
              <span>{current.name}</span>
              <CheckCircle size={14} className="text-emerald-600" />
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Verified Buyer • {current.location} • <span className="text-[#111111] font-semibold">{current.product}</span>
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-neutral-200">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${index === i ? 'w-6 bg-[#111111]' : 'bg-neutral-300'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
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
