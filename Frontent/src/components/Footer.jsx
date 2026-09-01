import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, MapPin, Phone, ShieldCheck, Truck, RefreshCw, Lock, Sparkles, Heart } from 'lucide-react'

// SVG Social Icons
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#f2c1ae] text-[#1d1d1b] mt-16 border-t border-[#ebd3ca]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#ebd3ca]">
          
          {/* Brand Intro & Studio Details (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-[-0.02em] uppercase font-logo text-[#1d1d1b]">
                THEIR NIBS
              </h3>
              <p className="text-[10px] tracking-[0.25em] text-[#7d3c24] font-semibold uppercase mt-0.5 font-sans">
                London • Print-Led Nightwear & Loungewear
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#1d1d1b]/80 leading-relaxed max-w-sm font-sans">
              Hand-illustrated prints on super-soft sustainable cotton and silky modal. Designed in our London studio to make everyday lounging truly special.
            </p>

            {/* Studio Contact Quick Info */}
            <div className="space-y-1.5 text-xs text-[#1d1d1b]/90 pt-1 font-sans">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#7d3c24] shrink-0" />
                <span>London Studio, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#7d3c24] shrink-0" />
                <a href="mailto:support@theirnibs.com" className="hover:text-[#7d3c24] transition-colors font-medium">support@theirnibs.com</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] flex items-center justify-center transition-colors shadow-2xs"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] flex items-center justify-center transition-colors shadow-2xs"
              >
                <FacebookIcon size={14} />
              </a>
              <a
                href="mailto:support@theirnibs.com"
                aria-label="Email"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#e47e56] hover:text-white text-[#1d1d1b] flex items-center justify-center transition-colors shadow-2xs"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Column 1: Shop Direct Departments (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d3c24] pb-1 border-b border-[#ebd3ca] inline-block font-sans">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#1d1d1b]/80 font-sans">
              <li onClick={() => handleNavigation('/collection?filter=new')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> New In Arrivals
              </li>
              <li onClick={() => handleNavigation('/collection?category=Women')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Women's Sleepwear
              </li>
              <li onClick={() => handleNavigation('/collection?category=Men')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Men's Sets
              </li>
              <li onClick={() => handleNavigation('/collection?category=Kids')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Kids & Family Sleepwear
              </li>
              <li onClick={() => handleNavigation('/collection')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Explore All Products
              </li>
            </ul>
          </div>

          {/* Column 2: Account & Shopping (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d3c24] pb-1 border-b border-[#ebd3ca] inline-block font-sans">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#1d1d1b]/80 font-sans">
              <li onClick={() => handleNavigation('/cart')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Shopping Bag
              </li>
              <li onClick={() => handleNavigation('/order')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Orders & Returns
              </li>
              <li onClick={() => handleNavigation('/login')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> My Account
              </li>
              <li onClick={() => handleNavigation('/about')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Our London Story
              </li>
              <li onClick={() => handleNavigation('/contact')} className="cursor-pointer hover:text-[#7d3c24] transition-colors flex items-center gap-1.5">
                <span className="text-[#7d3c24] font-bold">&rsaquo;</span> Contact Support
              </li>
            </ul>
          </div>

          {/* Column 3: Boutique Guarantees Card (Span 3) */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-xs border border-[#ebd3ca] p-5 rounded-none space-y-3.5 shadow-xs">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d3c24] flex items-center gap-1.5 font-sans">
              <Sparkles size={13} className="text-[#e47e56]" /> Boutique Guarantees
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#1d1d1b]/90 font-sans">
              <div className="flex items-start gap-2">
                <Truck size={14} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><span className="font-semibold text-[#1d1d1b]">Free UK Delivery</span> on orders over £50</p>
              </div>

              <div className="flex items-start gap-2">
                <RefreshCw size={14} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><span className="font-semibold text-[#1d1d1b]">Easy 30-Day Returns</span> with prepaid return label</p>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><span className="font-semibold text-[#1d1d1b]">100% Organic Fabrics</span> ethically crafted</p>
              </div>

              <div className="flex items-start gap-2">
                <Lock size={14} className="text-[#7d3c24] shrink-0 mt-0.5" />
                <p><span className="font-semibold text-[#1d1d1b]">SSL Encrypted</span> secure checkout</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1d1d1b]/70 font-sans">
          <p>
            © {new Date().getFullYear()} Their Nibs London. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px] text-[#1d1d1b]/80">
            <span onClick={() => handleNavigation('/about')} className="cursor-pointer hover:text-[#7d3c24] transition-colors">About Us</span>
            <span>•</span>
            <span onClick={() => handleNavigation('/contact')} className="cursor-pointer hover:text-[#7d3c24] transition-colors">Contact Support</span>
            <span>•</span>
            <span onClick={() => handleNavigation('/collection')} className="cursor-pointer hover:text-[#7d3c24] transition-colors">All Products</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

