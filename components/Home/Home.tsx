import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import WhyChoos from './WhyChoose/WhyChoos'
import TeamConnect from './TeamConnect/TeamConnect'
import DownloadSection from './DownloadSection/DownloadSection'

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <About/>
      <WhyChoos/>
      <TeamConnect/>
      <DownloadSection/>
    </div>
  )
}

export default Home
