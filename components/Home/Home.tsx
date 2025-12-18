import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import WhyChoos from './WhyChoose/WhyChoos'

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <About/>
      <WhyChoos/>
    </div>
  )
}

export default Home
