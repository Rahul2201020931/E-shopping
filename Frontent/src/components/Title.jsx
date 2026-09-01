import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex flex-col items-center gap-1.5 mb-2 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-[0.14em] text-[#111111] uppercase font-sans">
        <span>{text1}</span> <span className="font-light text-neutral-500">{text2}</span>
      </h2>
      <div className="w-8 h-[2px] bg-[#111111]" />
    </div>
  )
}

export default Title
