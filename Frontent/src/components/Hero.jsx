import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border">

      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">

        <div className="text-gray-700">

          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11  bg-gray-700"></p>
            <p className="font-medium text-sm md:text-base">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 ">
            Latest Arrivals
          </h1>

          <p className="mt-9 text-gray-500 max-w-md" text-center text-center>
            Discover our latest collection of stylish clothing,
            designed to make every day look better.
          </p>

          <button className="mt-6 px-8 py-3 bg-black text-white text-sm block mx-auto" onClick={() => window.location.href = '/collection'}>
           Shop Now 
          </button>

        </div>

      </div>


      {/* Right Side */}
      <div className="w-full sm:w-1/2">

        <img
          src={assets.hero_img}
          className="w-full h-full object-cover"
          alt="Latest fashion collection"
        />

      </div>

    </div>
  )
}

export default Hero