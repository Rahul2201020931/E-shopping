import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero-editorial relative isolate h-[35rem] w-full overflow-hidden bg-[#efeeea] sm:h-[42rem] lg:h-[46rem]">

      <div className="absolute left-5 top-6 z-20 animate-[fadeIn_0.8s_ease-out] sm:left-10 sm:top-10 lg:left-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-600 leading-[1.7] sm:text-xs">
          Timeless style.<br />Made to last.
        </p>
        <div className="mt-2 h-px w-7 bg-slate-700" />
      </div>

      <div className="absolute right-5 top-6 z-20 text-right animate-[fadeIn_0.8s_ease-out] sm:right-10 sm:top-10 lg:right-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-600 leading-[1.7] sm:text-xs">
          New<br />Collection<br />2026
        </p>
      </div>

      <p className="absolute left-1/2 top-[45%] z-0 w-max -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black uppercase leading-none tracking-[-0.085em] text-[#202737]
                    text-[26vw] sm:text-[18vw] lg:text-[15vw] animate-[fadeIn_1s_ease-out]" aria-hidden="true">
        Forever
      </p>

      <div className="absolute inset-x-0 bottom-[5.2rem] top-[4.8rem] z-10 flex items-end justify-center pointer-events-none sm:bottom-24 sm:top-12">
        <img
          src={assets.hero1_img}
          alt="Model wearing the Forever 2024 collection"
          className="h-full max-h-[38rem] w-auto max-w-[82%] object-contain object-bottom drop-shadow-[0_24px_20px_rgba(21,29,42,0.15)] animate-[slideUp_0.9s_ease-out]"
        />
      </div>

      <div className="absolute bottom-5 left-5 z-20 flex items-center gap-4 animate-[fadeIn_1.1s_ease-out] sm:bottom-9 sm:left-10 sm:gap-6 lg:left-14">
        <Link
          to="/collection"
          className="group inline-flex min-h-11 items-center gap-2 bg-[#121720] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(18,23,32,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#303949] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#121720] active:translate-y-0 sm:px-8"
        >
          SHOP NOW
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          to="/collection"
          className="hidden border-b border-slate-700 pb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-800 transition-colors hover:border-slate-400 hover:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 sm:inline"
        >
          Explore new in
        </Link>
      </div>

      <div className="hidden sm:flex absolute bottom-9 right-10 z-20 flex-col items-center gap-1 text-slate-500 motion-safe:animate-[bounce-subtle_2s_ease-in-out_infinite] lg:right-14">
        <span className="text-[10px] font-medium tracking-[0.14em]">SCROLL</span>
        <ArrowDown size={14} />
      </div>
    </section>
  )
}

export default Hero
