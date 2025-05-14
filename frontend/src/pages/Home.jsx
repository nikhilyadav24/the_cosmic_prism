import React from 'react'
import Hero from '../components/Hero'
import LatestWork from '../components/LatestWork'
import FeaturedProducts from '../components/FeaturedWork'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <LatestWork/>
    </div>
  )
}

export default Home