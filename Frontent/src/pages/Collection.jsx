import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  

  const {products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)){
      
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev, e.target.value]);

    }
  
  }

  const toggleSubCategory = (e) => {
  
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy =  productsCopy.filter(item => category.includes(item.category));
    }

    if(SubCategory.length > 0){
      productsCopy =  productsCopy.filter(item => SubCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }


  const sortProducts = () => {
     let fpCopy = filterProducts.slice();

     switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b) => (b.price -a.price)));
          break;

        default:
          applyFilter();
          break; 

     }
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setFilterProducts(products);
  },[])

  useEffect(() => {
       applyFilter();
  },[category, SubCategory,search, showSearch,products])


  useEffect(() => {
    sortProducts();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-10 pt-5 sm:pt-10 border-t' >
        
      {/* filter Options */}
      <div className='w-full sm:min-w-60'>
         <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-base sm:text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
         </p>

         {/* Category Filter */}

         <div className={`border border-gray-300 pl-4 sm:pl-5 py-3 mt-4 sm:mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-xs sm:text-sm font-medium'>CATEGORIES</p>
           <div className='flex flex-col gap-2 text-xs sm:text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3'  type='checkbox'  value={"Men"} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type='checkbox'  value={"Women"} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type='checkbox'  value={"Kids"} onChange={toggleCategory} />Kids
            </p>
           </div>
         </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-4 sm:pl-5 py-3 my-3 sm:my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
           <p className='mb-3 text-xs sm:text-sm font-medium'>TYPE</p>
           <div className='flex flex-col gap-2 text-xs sm:text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3'  type='checkbox'  value={"Topwear"} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type='checkbox'  value={"Bottomwear"} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3'  type='checkbox'  value={"Winterwear"} onChange={toggleSubCategory} />Winterwear
            </p>
           </div>
         </div>


      </div>

      {/* Right Side */}
      <div className='flex-1 min-w-0' >
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6'>
          <div className='flex-1'>
            <Title text1={'ALL'} text2={'COLLECTION'} />
          </div>
           
           {/* Product Sort */}

           <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-xs sm:text-sm px-2 py-2 sm:py-1 bg-white w-full sm:w-auto'>
            <option value='relavent'>Sort: Relevant</option>
            <option value='low-high'>Sort: Low to High</option>
            <option value='high-low'>Sort: High to Low</option>
           </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 gap-y-4 sm:gap-y-6'>
           {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
           }  
        </div>
      </div>

    </div>
  )
}

export default Collection