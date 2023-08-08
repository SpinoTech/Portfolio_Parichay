import React from 'react'
import Footer from '../components/Footer'
import ProgBody from '../components/ProgBody'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

export default function Project() {
  return (
    <div>
      <Navbar/>
      <ProgBody heading="Projects" details="Welcome to the heart of my portfolio – a curated selection of projects that exemplify my dedication to innovation, meticulous craftsmanship, and problem-solving prowess. Each project presented here is a testament to the convergence of creativity, technical acumen, and a relentless pursuit of excellence."/>
      <Slider/>
      <Footer/>
    </div>
  )
}
