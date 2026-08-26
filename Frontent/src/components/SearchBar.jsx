import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';
import { Search, X } from 'lucide-react';
const SearchBar = () => {

   const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
   const location = useLocation();
     const visible = location.pathname.includes('collection');

  return showSearch && visible ? (
    <div className='border-t border-b border-gray-200 bg-gray-50 text-center'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-[calc(100%-5rem)] sm:w-1/2 focus-within:border-black focus-within:ring-1 focus-within:ring-black' >
       <input aria-label='Search products' value={search} onChange={(e) => setSearch(e.target.value)}  className='flex-1 outline-none bg-inherit text-sm' type='search' placeholder='Search products'/>
        <Search className='w-4 text-gray-500' />
        </div>
      <button type='button' onClick={() => setShowSearch(false)} aria-label='Close search' className='inline-flex p-1 align-middle text-gray-600 hover:text-black'>
        <X className='w-4' />
      </button>
      
    </div>
  ) : null
}

export default SearchBar