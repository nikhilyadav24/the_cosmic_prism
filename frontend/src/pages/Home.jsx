import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/FeaturedWork'
import HorizontalScrollCards from '../components/HorizontalScroll'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
    </div>
  )
}

export default Home