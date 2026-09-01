import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const visible = location.pathname.includes('collection');

  return showSearch && visible ? (
    <div className='border-t border-b border-[#ebd3ca] bg-[#faf7f5] text-center animate-search-in'>
      <div className='inline-flex items-center justify-center border border-[#ebd3ca] bg-white px-5 py-2 my-4 mx-3 rounded-full w-[calc(100%-5rem)] sm:w-1/2 focus-within:border-[#7d3c24] focus-within:ring-1 focus-within:ring-[#7d3c24] transition-all duration-150 shadow-2xs'>
        <input
          aria-label='Search boutique products'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-xs sm:text-sm text-[#1d1d1b] placeholder:text-[#787873]'
          type='search'
          placeholder='Search boutique prints and styles...'
        />
        <Search className='w-4 text-[#7d3c24]' />
      </div>
      <button
        type='button'
        onClick={() => setShowSearch(false)}
        aria-label='Close search'
        className='inline-flex p-1 align-middle text-[#787873] hover:text-[#7d3c24] transition-colors duration-200 active:scale-97 cursor-pointer'
      >
        <X className='w-4' />
      </button>
    </div>
  ) : null
}

export default SearchBar