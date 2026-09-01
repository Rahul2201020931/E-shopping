import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [isNewOnly, setIsNewOnly] = useState(false);

  // Sync category and new-in filters from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const filterParam = searchParams.get('filter');
    const subCatParam = searchParams.get('type');

    if (categoryParam) {
      setCategory([categoryParam]);
    } else {
      setCategory([]);
    }

    if (subCatParam) {
      setSubCategory([subCatParam]);
    } else {
      setSubCategory([]);
    }

    if (filterParam === 'new') {
      setIsNewOnly(true);
      setSortType('relavent');
    } else {
      setIsNewOnly(false);
    }
  }, [searchParams]);

  const toggleCategory = (e) => {
    const val = e.target.value;
    if (category.includes(val)) {
      setCategory(prev => prev.filter(item => item !== val));
    } else {
      setCategory(prev => [...prev, val]);
    }
  }

  const toggleSubCategory = (e) => {
    const val = e.target.value;
    if (SubCategory.includes(val)) {
      setSubCategory(prev => prev.filter(item => item !== val));
    } else {
      setSubCategory(prev => [...prev, val]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (SubCategory.length > 0) {
      productsCopy = productsCopy.filter(item => SubCategory.includes(item.subCategory));
    }

    if (isNewOnly) {
      // Show latest items (e.g. reverse or newest 12 items)
      productsCopy = productsCopy.slice(-15).reverse();
    }

    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams])

  useEffect(() => {
    applyFilter();
  }, [category, SubCategory, search, showSearch, products, isNewOnly])

  useEffect(() => {
    sortProducts();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-10 pt-5 sm:pt-10 border-t border-neutral-200' >
        
      {/* filter Options */}
      <div className='w-full sm:w-60 sm:min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-base sm:text-lg flex items-center cursor-pointer gap-2 font-bold tracking-wider text-[#111111] transition-colors duration-200 hover:text-neutral-600 active:scale-97'>
          FILTERS
          <img className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-[#ebd3ca] bg-[#fbf6f4] p-3 sm:p-4 mt-3 sm:mt-4 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-2 text-xs sm:text-sm font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-xs sm:text-sm text-[#787873] font-sans'>
            <label className='flex gap-2.5 items-center cursor-pointer hover:text-[#7d3c24] transition-colors'>
              <input
                className='w-3.5 h-3.5 accent-[#7d3c24] cursor-pointer'
                type='checkbox'
                value="Men"
                checked={category.includes("Men")}
                onChange={toggleCategory}
              />
              <span>Men</span>
            </label>
            <label className='flex gap-2.5 items-center cursor-pointer hover:text-[#7d3c24] transition-colors'>
              <input
                className='w-3.5 h-3.5 accent-[#7d3c24] cursor-pointer'
                type='checkbox'
                value="Women"
                checked={category.includes("Women")}
                onChange={toggleCategory}
              />
              <span>Women</span>
            </label>
            <label className='flex gap-2.5 items-center cursor-pointer hover:text-[#7d3c24] transition-colors'>
              <input
                className='w-3.5 h-3.5 accent-[#7d3c24] cursor-pointer'
                type='checkbox'
                value="Kids"
                checked={category.includes("Kids")}
                onChange={toggleCategory}
              />
              <span>Kids</span>
            </label>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-[#ebd3ca] bg-[#fbf6f4] p-3 sm:p-4 mt-3 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-2 text-xs sm:text-sm font-semibold tracking-wider text-[#1d1d1b] uppercase font-sans'>TYPE</p>
          <div className='flex flex-col gap-2 text-xs sm:text-sm text-[#787873] font-sans'>
            <label className='flex gap-2.5 items-center cursor-pointer hover:text-[#7d3c24] transition-colors'>
              <input
                className='w-3.5 h-3.5 accent-[#7d3c24] cursor-pointer'
                type='checkbox'
                value="Topwear"
                checked={SubCategory.includes("Topwear")}
                onChange={toggleSubCategory}
              />
              <span>Topwear</span>
            </label>
            <label className='flex gap-2.5 items-center cursor-pointer hover:text-[#7d3c24] transition-colors'>
              <input
                className='w-3.5 h-3.5 accent-[#7d3c24] cursor-pointer'
                type='checkbox'
                value="Bottomwear"
                checked={SubCategory.includes("Bottomwear")}
                onChange={toggleSubCategory}
              />
              <span>Bottomwear</span>
            </label>
            <label className='flex gap-2.5 items-center cursor-pointer hover:text-[#7d3c24] transition-colors'>
              <input
                className='w-3.5 h-3.5 accent-[#7d3c24] cursor-pointer'
                type='checkbox'
                value="Winterwear"
                checked={SubCategory.includes("Winterwear")}
                onChange={toggleSubCategory}
              />
              <span>Winterwear</span>
            </label>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1 min-w-0' >
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6'>
          <div className='flex-1'>
            {isNewOnly ? (
              <Title text1={'NEW'} text2={'ARRIVALS'} />
            ) : category.length === 1 ? (
              <Title text1={category[0].toUpperCase()} text2={'COLLECTION'} />
            ) : (
              <Title text1={'ALL'} text2={'COLLECTIONS'} />
            )}
          </div>
           
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
            className='border border-[#ebd3ca] text-xs sm:text-sm px-3 py-2 bg-white text-[#1d1d1b] w-full sm:w-auto focus:outline-none focus:border-[#7d3c24] font-sans'
          >
            <option value='relavent'>Sort: Relevant</option>
            <option value='low-high'>Price: Low to High</option>
            <option value='high-low'>Price: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        {filterProducts.length === 0 ? (
          <div className="text-center py-20 text-[#787873] text-sm bg-[#faf7f5] border border-[#ebd3ca] p-8 font-sans">
            <p className="font-semibold text-lg text-[#1d1d1b] mb-1 font-serif-boutique italic">No matching items found</p>
            <p className="text-xs">Try clearing your filters to view all products in the collection.</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 sm:gap-y-6 justify-items-center'>
            {filterProducts.map((item, index) => (
              <div key={index} className='w-full'>
                <ProductItem name={item.name} id={item._id} price={item.price} image={item.image} bestseller={item.bestseller} />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Collection