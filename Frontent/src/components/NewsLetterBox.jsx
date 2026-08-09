import React from 'react'

export const NewsLetterBox = () => {
  return (
    <div>
        <div className='bg-gray-100 py-10 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-screen-md mx-auto text-center'>
                <p className='text-xl font-semibold mb-4'>Subscribe to Our Newsletter</p>
                <p className='text-gray-600 mb-6'>Stay updated with our latest products and offers.</p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        className='border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button className='bg-black text-white py-2 px-6 hover:bg-gray-800 transition-colors'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
