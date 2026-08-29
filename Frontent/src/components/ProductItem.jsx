import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
const ProductItem = ({id, image, name, price}) => {

    const { currency } = useContext(ShopContext);
 
    return (
    <Link className='text-gray-700 cursor-pointer block group' to={`/product/${id}`} >
    <div className='overflow-hidden bg-gray-100 aspect-[3/4] sm:aspect-square' >
      <img className='w-full h-full object-cover group-hover:scale-110 transition ease-in-out duration-300'  src={image[0]} alt="" />
    </div>
    <p className='pt-2 sm:pt-3 pb-1 text-xs sm:text-sm font-light line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]'>{name}</p>
    <p className='text-xs sm:text-sm font-medium text-gray-800'>{currency}{price}</p> 
    </Link>
  )
}

export default ProductItem