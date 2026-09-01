import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { Star, Heart, Plus } from 'lucide-react'

const ProductItem = ({ id, image, name, price, bestseller = false }) => {
  const { currency } = useContext(ShopContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Determine an image to display
  const primaryImg = Array.isArray(image) ? image[0] : image;
  const secondaryImg = Array.isArray(image) && image[1] ? image[1] : primaryImg;

  return (
    <div className="group relative flex flex-col w-full bg-white border border-neutral-200 transition-all duration-300 hover:shadow-md hover:border-black">
      
      {/* Product Image Frame (Aspect 3:4) */}
      <Link to={`/product/${id}`} className="relative block w-full aspect-[3/4] overflow-hidden bg-neutral-50">
        
        {/* Main Image */}
        <img
          src={primaryImg}
          alt={name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
        />

        {/* Hover Secondary Look */}
        <img
          src={secondaryImg}
          alt={`${name} secondary view`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />

        {/* Badges (Top Left) */}
        {bestseller && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="bg-[#111111] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 shadow-xs">
              Bestseller
            </span>
          </div>
        )}

        {/* Wishlist Button (Top Right) */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#111111] hover:text-black hover:bg-white transition-all shadow-xs cursor-pointer"
        >
          <Heart size={15} fill={isWishlisted ? '#dc2626' : 'none'} className={isWishlisted ? 'text-[#dc2626]' : 'text-[#111111]'} />
        </button>

        {/* Slide-Up Quick View / Action */}
        <div className="absolute bottom-0 inset-x-0 p-2 z-10 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hidden sm:block">
          <button
            type="button"
            className="w-full h-9 bg-[#111111] hover:bg-neutral-800 text-white text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <Plus size={13} /> Quick View
          </button>
        </div>

      </Link>

      {/* Product Details */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          {/* Reviews */}
          <div className="flex items-center gap-1 mb-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] text-neutral-500 font-medium">(5.0)</span>
          </div>

          {/* Title */}
          <Link to={`/product/${id}`}>
            <h3 className="text-xs sm:text-sm font-medium text-[#111111] line-clamp-2 min-h-[2.2rem] sm:min-h-[2.5rem] leading-snug hover:underline transition-colors">
              {name}
            </h3>
          </Link>
        </div>

        {/* Price & Print Tag */}
        <div className="mt-2 pt-2 border-t border-neutral-100 flex items-baseline justify-between">
          <p className="text-xs sm:text-sm font-bold text-[#111111]">
            {currency}{price}
          </p>
          <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
            Premium
          </span>
        </div>
      </div>

    </div>
  )
}

export default ProductItem
