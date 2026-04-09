import React from 'react'
import Navbar from '../../components/navbar'
import Hero from '../../components/home/hero'
import Footer from '../../components/footer'
import Hero2 from '../../components/home/hero2'
import Hero3 from '../../components/home/hero3'
import Hero4 from '../../components/home/hero4'
import Hero5 from '../../components/home/hero5'
import Hero6 from '../../components/home/hero6'
import Hero7 from '../../components/home/hero7'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Hero7/>
      <Footer/>
    </div>
  )
}
