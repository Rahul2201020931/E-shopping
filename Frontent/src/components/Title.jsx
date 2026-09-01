import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 mb-2 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1d1d1b] font-serif-boutique tracking-tight">
        <span className="font-light">{text1}</span>{' '}
        <span className="italic font-normal text-[#7d3c24]">{text2}</span>
      </h2>
    </div>
  )
}

export default Title

