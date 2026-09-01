import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import PressProof from '../components/PressProof'
import LatestCollection from '../components/LatestCollection'
import BrandStory from '../components/BrandStory'
import BestSeller from '../components/BestSeller'
import TestimonialCarousel from '../components/TestimonialCarousel'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      <Hero />
      <PressProof />
      <LatestCollection />
      <BrandStory />
      <BestSeller />
      <TestimonialCarousel />
      <NewsLetterBox />
    </div>
  )
}

export default Home;

