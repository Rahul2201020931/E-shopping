import React from 'react'
import { Leaf, Palette, Truck, Gift } from 'lucide-react'

const perks = [
  {
    icon: Leaf,
    title: 'Conscious & Slow Fashion',
    desc: 'Sustainable cotton & silky recycled modal that lasts.'
  },
  {
    icon: Palette,
    title: 'Original Hand-Drawn Prints',
    desc: 'Exclusively illustrated in our London studio.'
  },
  {
    icon: Truck,
    title: 'Free UK Delivery Over £50',
    desc: 'Fast worldwide shipping with simple tracked returns.'
  },
  {
    icon: Gift,
    title: 'Signature Gift Wrapping',
    desc: 'Hand-tied ribbon gift boxes ready to give.'
  }
];

const OurPolicy = () => {
  return (
    <section className="w-full my-12 sm:my-16 py-10 sm:py-14 bg-[#faf7f5] border-y border-[#ebd3ca]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 text-center">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-full bg-[#f2c1ae]/40 text-[#a8421d] flex items-center justify-center mb-4 transition-transform hover:scale-110">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h4 className="text-sm font-semibold text-[#1d1d1b] tracking-tight mb-1">
                  {perk.title}
                </h4>
                <p className="text-xs text-[#787873] leading-relaxed max-w-[220px]">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default OurPolicy