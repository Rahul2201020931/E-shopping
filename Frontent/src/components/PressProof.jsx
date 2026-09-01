import React from 'react'

const pressMentions = [
  { name: 'VOGUE', quote: '“Sumptuous prints and beautifully soft fabrics for modern lounging.”' },
  { name: 'STYLIST', quote: '“The brand redefining nighttime luxury with clean editorial styling.”' },
  { name: 'THE TIMES', quote: '“Joyful, comfortable silhouettes with enduring quality.”' },
  { name: 'GRAZIA', quote: '“The ultimate gift for slow mornings and effortless everyday wear.”' },
  { name: 'SHEERLUXE', quote: '“Our go-to destination for chic, minimalist loungewear sets.”' }
];

const PressProof = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-neutral-50 border-y border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Press mentions */}
        <div>
          <p className="text-center text-[11px] font-bold tracking-[0.22em] text-neutral-400 uppercase mb-8">
            As Featured & Loved In
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center text-center">
            {pressMentions.map((press, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-3 group">
                <span className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-widest group-hover:text-black transition-colors">
                  {press.name}
                </span>
                <p className="text-[11px] text-neutral-500 italic mt-2 line-clamp-2 leading-relaxed">
                  {press.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default PressProof

