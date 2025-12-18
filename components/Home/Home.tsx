import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import WhyChoos from './WhyChoose/WhyChoos'
import TeamConnect from './TeamConnect/TeamConnect'

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <About/>
      <WhyChoos/>
      <TeamConnect/>
    </div>
  )
}

export default Home
