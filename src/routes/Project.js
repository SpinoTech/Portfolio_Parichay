import React from 'react'
import Footer from '../components/Footer'
import ProgBody from '../components/ProgBody'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

export default function Project() {
  return (
    <div>
      <Navbar/>
      <ProgBody heading="Projects" details="This section contains all the projects and links of those project."/>
      <Slider/>
      <Footer/>
    </div>
  )
}
