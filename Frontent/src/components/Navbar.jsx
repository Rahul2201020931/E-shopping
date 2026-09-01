import { useContext, useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Search, User, ShoppingBag, Menu, X, Sparkles, ChevronRight, LogOut, Package } from 'lucide-react'

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountRef = useRef(null);
  const location = useLocation();
  const isCollectionPage = location.pathname.includes('collection');

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setToken('');
    setCartItems({});
    setAccountMenuOpen(false);
  };

  // Close account menu when clicking/tapping outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] sm:min-h-[84px] items-center justify-between py-2 sm:py-3">

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setvisible(true)}
            aria-label="Open navigation menu"
            className="lg:hidden -ml-2 flex min-h-11 min-w-11 items-center justify-center text-[#111111] hover:text-neutral-600 transition-colors focus-visible:outline-2 focus-visible:outline-[#111111] cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Left - Boutique Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-[0.04em] text-[#1d1d1b] font-sans">
            <NavLink to="/collection?filter=new" className="transition-colors hover:text-[#7d3c24] py-1 relative group">
              <span>New In</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7d3c24] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/collection?category=Women" className="transition-colors hover:text-[#7d3c24] py-1 relative group">
              <span>Womens</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7d3c24] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/collection?category=Men" className="transition-colors hover:text-[#7d3c24] py-1 relative group">
              <span>Mens</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7d3c24] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/collection?category=Kids" className="transition-colors hover:text-[#7d3c24] py-1 relative group">
              <span>Kids</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7d3c24] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/about" className="transition-colors hover:text-[#7d3c24] py-1 relative group">
              <span>Our Story</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7d3c24] transition-all duration-200 group-hover:w-full" />
            </NavLink>

            <NavLink to="/contact" className="transition-colors hover:text-[#7d3c24] py-1 relative group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7d3c24] transition-all duration-200 group-hover:w-full" />
            </NavLink>
          </nav>

          {/* Center - Brand Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 text-center group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d1d1b]"
          >
            <h1 className="text-[23px] sm:text-[28px] font-medium tracking-[-0.02em] text-[#1d1d1b] leading-tight font-logo uppercase">
              THEIR NIBS
            </h1>
            <p className="text-[8px] sm:text-[9px] font-medium tracking-[0.28em] text-[#787873] uppercase -mt-0.5 font-sans">
              London • Boutique
            </p>
          </Link>

          {/* Right - Utilities */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Search (only visible on collection page) */}
            {isCollectionPage && (
              <button
                type="button"
                onClick={() => setShowSearch(true)}
                aria-label="Search products"
                className="flex min-h-10 min-w-10 items-center justify-center text-[#1d1d1b] hover:text-[#7d3c24] transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xl:inline text-xs ml-1 font-medium">Search</span>
              </button>
            )}

            {/* User Account Button with Dropdown (Desktop & Mobile Touch) */}
            <div ref={accountRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  if (!token) {
                    navigate('/login');
                  } else {
                    setAccountMenuOpen(prev => !prev);
                  }
                }}
                aria-label={token ? 'Open user profile menu' : 'Sign in to your account'}
                className="flex min-h-10 min-w-10 items-center justify-center text-[#1d1d1b] hover:text-[#7d3c24] transition-colors cursor-pointer"
              >
                <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* DROPDOWN MENU */}
              {token && (
                <div
                  className={`absolute right-0 pt-2 w-52 z-50 animate-dropdown-in ${
                    accountMenuOpen ? 'block' : 'hidden'
                  } sm:group-hover:block`}
                >
                  <div className="bg-white border border-[#ebd3ca] p-2 text-xs text-[#1d1d1b] shadow-2xl rounded-lg">
                    <div className="px-3 py-2 border-b border-neutral-100 bg-[#fbf6f4] rounded-t-md">
                      <p className="font-bold text-[#1d1d1b] text-[11px] tracking-wider uppercase flex items-center gap-1.5 font-sans">
                        <User size={13} className="text-[#7d3c24]" /> My Account
                      </p>
                      <p className="text-[10px] text-[#787873] mt-0.5">Boutique Customer</p>
                    </div>

                    <div className="py-1">
                      <button
                        type="button"
                        onClick={() => {
                          setAccountMenuOpen(false);
                          navigate('/order');
                        }}
                        className="w-full text-left px-3 py-2 cursor-pointer hover:bg-[#faf7f5] hover:text-[#7d3c24] transition-colors rounded-md font-medium text-xs flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <Package size={14} className="text-neutral-600" />
                          Orders & Returns
                        </span>
                        <ChevronRight size={13} className="text-neutral-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setAccountMenuOpen(false);
                          navigate('/cart');
                        }}
                        className="w-full text-left px-3 py-2 cursor-pointer hover:bg-[#faf7f5] hover:text-[#7d3c24] transition-colors rounded-md font-medium text-xs flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <ShoppingBag size={14} className="text-neutral-600" />
                          Shopping Bag
                        </span>
                        <ChevronRight size={13} className="text-neutral-400" />
                      </button>
                    </div>

                    <div className="pt-1 border-t border-neutral-100">
                      <button
                        type="button"
                        onClick={logout}
                        className="w-full text-left px-3 py-2 cursor-pointer hover:bg-red-50 text-red-600 transition-colors rounded-md font-semibold text-xs flex items-center gap-2"
                      >
                        <LogOut size={13} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Button with counter */}
            <Link
              to="/cart"
              aria-label={`Shopping bag with ${getCartCount()} items`}
              className="relative flex min-h-10 min-w-10 items-center justify-center bg-[#faf7f5] hover:bg-[#f2c1ae]/30 border border-[#ebd3ca] rounded-full p-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#1d1d1b]" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center px-1 text-[10px] font-bold text-[#1d1d1b] bg-[#f2c1ae] border border-white rounded-full shadow-xs">
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
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 p-5 bg-white">
              <div>
                <p className="text-base font-bold tracking-[0.14em] uppercase text-[#111111]">THEIR NIBS</p>
                <p className="text-[9px] tracking-widest text-neutral-500 uppercase">London</p>
              </div>
              <button
                type="button"
                onClick={() => setvisible(false)}
                aria-label="Close navigation menu"
                className="p-1.5 text-[#111111] hover:text-neutral-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="p-4 space-y-1">
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/">
                Home
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?filter=new">
                New In Arrivals
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?category=Women">
                Womens
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?category=Men">
                Mens
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection?category=Kids">
                Kids
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/collection">
                All Collections
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/about">
                Our Story
              </NavLink>
              <NavLink onClick={() => setvisible(false)} className="block px-4 py-2.5 text-sm font-semibold tracking-wider text-[#111111] uppercase hover:bg-neutral-50 rounded-none transition-colors" to="/contact">
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* Bottom Account & Support Panel for Mobile */}
          <div className="border-t border-neutral-200 bg-neutral-50">
            {token ? (
              <div className="p-4 border-b border-neutral-200 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center">
                      <User size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111111] uppercase tracking-wider">My Profile</p>
                      <p className="text-[10px] text-emerald-600 font-medium">● Logged In</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setvisible(false);
                      logout();
                    }}
                    className="text-[11px] font-bold text-red-600 hover:underline cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setvisible(false);
                      navigate('/order');
                    }}
                    className="py-2 px-3 text-xs font-bold bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-[#111111] text-center transition-colors cursor-pointer"
                  >
                    My Orders
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setvisible(false);
                      navigate('/cart');
                    }}
                    className="py-2 px-3 text-xs font-bold bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-[#111111] text-center transition-colors cursor-pointer"
                  >
                    Shopping Bag
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 border-b border-neutral-200 bg-white">
                <button
                  type="button"
                  onClick={() => {
                    setvisible(false);
                    navigate('/login');
                  }}
                  className="w-full py-2.5 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest text-center transition-colors cursor-pointer"
                >
                  Log In / Sign Up
                </button>
              </div>
            )}

            <div className="p-4 text-xs text-neutral-500 space-y-1">
              <p className="font-semibold text-[#111111]">✨ Free UK Delivery over £50</p>
              <p className="text-[11px]">Support: support@theirnibs.com</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

