import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
import { TrendingUp } from 'lucide-react';

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
      setLoading(false);
    }
  }, [products])

  return (
    <div className='my-16 sm:my-20 px-2'>

      {/* Section Header */}
      <div className='text-center py-8'>
        <div className='flex items-center justify-center gap-2 mb-1'>
          <TrendingUp className='w-4 h-4 text-gray-500' />
          <span className='text-[10px] sm:text-xs tracking-widest text-gray-500 uppercase'>
            Customer Favorites
          </span>
        </div>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-full sm:w-3/4 lg:w-1/2 m-auto mt-3 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed'>
          The pieces our customers can't stop buying — tried, tested, and
          loved across every collection.
        </p>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='animate-pulse'>
              <div className='w-full aspect-[3/4] bg-gray-200 rounded-sm'></div>
              <div className='h-3 bg-gray-200 rounded mt-3 w-3/4'></div>
              <div className='h-3 bg-gray-200 rounded mt-2 w-1/3'></div>
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && bestseller.length === 0 && (
        <div className='text-center py-16 text-gray-400 text-sm'>
          No bestsellers to show right now — check back soon.
        </div>
      )}

      {/* Rendering products */}
      {!loading && bestseller.length > 0 && (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 sm:gap-x-5 sm:gap-y-10'>
          {bestseller.map((item, index) => (
            <div
              key={item._id}
              className='opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]'
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  )
}

export default BestSeller