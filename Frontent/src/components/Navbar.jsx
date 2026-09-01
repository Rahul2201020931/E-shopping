import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Search, User, ShoppingBag, Menu, X, Heart, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setToken('')
    setCartItems({})
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] sm:min-h-[84px] items-center justify-between py-2 sm:py-3">

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setvisible(true)}
            aria-label="Open navigation menu"
            className="lg:hidden -ml-2 flex min-h-11 min-w-11 items-center justify-center text-[#111111] hover:text-neutral-600 transition-colors focus-visible:outline-2 focus-visible:outline-[#111111]"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Left - Boutique Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-[12px] font-bold tracking-[0.1em] text-[#111111]/80 uppercase">
            <NavLink to="/collection?filter=new" className="transition-colors hover:text-[#111111] py-1 relative group">
              <span>New In</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/collection?category=Women" className="transition-colors hover:text-[#111111] py-1 relative group">
              <span>Womens</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/collection?category=Men" className="transition-colors hover:text-[#111111] py-1 relative group">
              <span>Mens</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/collection?category=Kids" className="transition-colors hover:text-[#111111] py-1 relative group">
              <span>Kids</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/about" className="transition-colors hover:text-[#111111] py-1 relative group">
              <span>Our Story</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/contact" className="transition-colors hover:text-[#111111] py-1 relative group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </NavLink>
          </nav>

          {/* Center - Brand Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 text-center group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
          >
            <h1 className="text-[21px] sm:text-[26px] font-bold tracking-[0.18em] text-[#111111] leading-tight font-sans uppercase">
              THEIR NIBS
            </h1>
            <p className="text-[8px] sm:text-[9px] font-bold tracking-[0.34em] text-neutral-500 uppercase -mt-0.5">
              London • Boutique
            </p>
          </Link>

          {/* Right - Utilities */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Search */}
            <button
              type="button"
              onClick={() => setShowSearch(true)}
              aria-label="Search products"
              className="flex min-h-10 min-w-10 items-center justify-center text-[#111111] hover:text-neutral-600 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xl:inline text-xs ml-1 font-bold">Search</span>
            </button>

            {/* User Account */}
            <div className="group relative">
              <button
                type="button"
                onClick={() => !token && navigate('/login')}
                disabled={Boolean(token)}
                aria-label={token ? 'Open account menu' : 'Log in'}
                className="flex min-h-10 min-w-10 items-center justify-center text-[#111111] hover:text-neutral-600 transition-colors cursor-pointer disabled:cursor-default"
              >
                <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* DROPDOWN */}
              {token && (
                <div className="group-hover:block hidden absolute right-0 pt-2 w-44 z-50 animate-dropdown-in">
                  <div className="bg-white border border-neutral-200 p-2 text-xs text-[#111111] shadow-xl rounded-none">
                    <p className="px-3 py-2 font-bold border-b border-neutral-100 text-neutral-400 text-[10px] tracking-wider uppercase">My Account</p>
                    <p onClick={() => navigate('/order')} className="px-3 py-2 cursor-pointer hover:bg-neutral-50 hover:text-black transition-colors">Orders & Returns</p>
                    <p onClick={logout} className="px-3 py-2 cursor-pointer hover:bg-neutral-50 text-red-600 transition-colors">Sign Out</p>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Button with counter */}
            <Link
              to="/cart"
              aria-label={`Shopping bag with ${getCartCount()} items`}
              className="relative flex min-h-10 min-w-10 items-center justify-center bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-full p-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#111111]" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center px-1 text-[10px] font-bold text-white bg-[#111111] rounded-full shadow-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 overflow-hidden bg-black/50 z-50 lg:hidden ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-200`}>
        <div className={`h-full w-[min(85vw,340px)] bg-white text-[#111111] shadow-2xl ${visible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-out flex flex-col justify-between`}>
          
          <div>
            <div className="flex items-center justify-between border-b border-neutral-200 p-5 bg-white">
              <div>
                <p className="text-base font-bold tracking-[0.14em] uppercase text-[#111111]">THEIR NIBS</p>
                <p className="text-[9px] tracking-widest text-neutral-500 uppercase">London</p>
              </div>
              <button
                type="button"
                onClick={() => setvisible(false)}
                aria-label="Close navigation menu"
                className="p-1.5 text-[#111111] hover:text-neutral-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?filter=new">
                New In Arrivals
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?category=Women">
                Womens
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?category=Men">
                Mens
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?category=Kids">
                Kids
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection">
                All Collections
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/about">
                Our Story
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/contact">
                Contact Us
              </NavLink>
              {token ? (
                <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/order">
                  My Orders
                </NavLink>
              ) : (
                <NavLink onClick={() => setvisible(false)} className="block px-4 py-3 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/login">
                  Log In / Sign Up
                </NavLink>
              )}
            </nav>
          </div>

          <div className="p-5 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500 space-y-1.5">
            <p className="font-semibold text-[#111111]">✨ Free UK Delivery over £50</p>
            <p>Customer Support: support@theirnibs.com</p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
