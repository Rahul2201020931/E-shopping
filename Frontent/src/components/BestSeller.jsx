import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';





export const BestSeller = () => {


  const { products} = useContext(ShopContext);

 const bestSellerProducts = products.filter(
        (item) => item.bestseller === true
    )


  return (
    
   
      <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title  text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600'>Ecommerce or "electronic commerce" is the trading of goods and services online. The internet allows individuals and businesses to buy and sell an increasing amount of physical goods, digital goods, and services electronically.</p>     
      </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
        {bestSellerProducts.map((item,index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
      </div>
     


  )
}
