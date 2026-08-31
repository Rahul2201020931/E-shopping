import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'

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
    <header className='relative flex min-h-[68px] items-center justify-between border-b border-slate-200 py-3 font-medium sm:min-h-[78px] sm:py-4'>

      {/* Left - Nav Links */}
      <ul className='hidden sm:flex gap-6 text-[11px] font-semibold tracking-[0.1em] text-slate-600 uppercase'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>

      {/* Mobile menu icon - left on small screens */}
      <button
        type='button'
        onClick={() => setvisible(true)}
        aria-label='Open navigation menu'
        className='sm:hidden -ml-2 flex min-h-11 min-w-11 items-center justify-center text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950'
      >
        <Menu className='w-5 h-5' />
      </button>

      {/* Center - Logo */}
      <Link to='/' className='absolute left-1/2 -translate-x-1/2 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950'>
        <p className='text-[19px] sm:text-[22px] font-black tracking-[0.11em] text-slate-950 leading-none'>FOREVER</p>
        <p className='mt-0.5 text-[8px] sm:text-[9px] font-medium tracking-[0.34em] text-slate-500'>CLOTHING</p>
      </Link>

      {/* Right - Icons */}
      <div className='flex items-center gap-1 sm:gap-5'>

          <button type='button' onClick={() => setShowSearch(true)} aria-label='Search products' className='hidden sm:flex items-center gap-1 text-xs text-gray-700 cursor-pointer'>
          <Search className='w-4 h-4' />
          <span className='hidden md:inline'>SEARCH</span>
        </button>
        <button type='button' onClick={() => setShowSearch(true)} aria-label='Search products' className='sm:hidden flex min-h-11 min-w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950'>
          <Search className='w-4 h-4' />
        </button>

        <div className='group relative'>
          <button type='button' onClick={() => !token && navigate('/login')} disabled={token ? true : false} aria-label={token ? 'Open account menu' : 'Log in'} className='hidden sm:flex items-center gap-1 text-xs text-gray-700 cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-default hover:enabled:text-gray-900 active:scale-97'>
            <User className='w-4 h-4' />
            <span className='hidden md:inline'>LOGIN</span>
          </button>
          <button type='button' onClick={() => !token && navigate('/login')} disabled={token ? true : false} aria-label={token ? 'Open account menu' : 'Log in'} className='sm:hidden flex min-h-11 min-w-11 items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-default hover:enabled:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 active:scale-97'>
            <User className='w-4 h-4' />
          </button>

          {/* DROPDOWN */}
          {token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 animate-dropdown-in origin-top-right z-50'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg'>
                <p className='cursor-pointer hover:text-black transition-colors duration-200 active:scale-97'>My Profile</p>
                <p onClick={() => navigate('/order')} className='cursor-pointer hover:text-black transition-colors duration-200 active:scale-97'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black transition-colors duration-200 active:scale-97'>Logout</p>
              </div>
            </div>
          }
        </div>

        {/* <button className='hidden sm:flex items-center gap-1 text-xs text-gray-700 cursor-pointer'>
          <Heart className='w-4 h-4' />
          <span className='hidden md:inline'>WISHLIST</span>
        </button>
        <Heart className='w-4 h-4 cursor-pointer sm:hidden' /> */}

        <Link to='/cart' className='hidden sm:flex items-center gap-1 text-xs text-gray-700'>
          <ShoppingBag className='w-4 h-4' />
          <span className='hidden md:inline'>CART ({getCartCount()})</span>
        </Link>
        <Link to='/cart' aria-label={`Cart with ${getCartCount()} items`} className='relative flex min-h-11 min-w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 sm:hidden'>
          <ShoppingBag className='w-5 h-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

      </div>

      {/* Sidebar menu for small screen */}
      <div className={`fixed inset-0 overflow-hidden bg-black/20 z-50 sm:hidden ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-150`}>
        <div className={`h-full w-[min(86vw,360px)] bg-white text-gray-600 shadow-xl ${visible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-out`}>
          <div className='flex items-center justify-between border-b p-4'>
            <p className='text-xs font-semibold tracking-[0.2em] text-gray-900'>MENU</p>
            <button type='button' onClick={() => setvisible(false)} aria-label='Close navigation menu' className='p-1 text-gray-700 transition-transform duration-100 ease-out hover:scale-110 active:scale-97'>
              <X className='h-5 w-5' />
            </button>
          </div>

          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border uppercase text-sm transition-colors duration-200 hover:bg-gray-50 active:scale-97 inline-block w-full' to='/'>Home</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border uppercase text-sm transition-colors duration-200 hover:bg-gray-50 active:scale-97 inline-block w-full' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border uppercase text-sm transition-colors duration-200 hover:bg-gray-50 active:scale-97 inline-block w-full' to='/about'>About</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border uppercase text-sm transition-colors duration-200 hover:bg-gray-50 active:scale-97 inline-block w-full' to='/contact'>Contact</NavLink>
        </div>
      </div>

    </header>
  )
}

export default Navbar
