import React from 'react'
import AboutContainer from '../components/AboutContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import ProgBody from'../components/ProgBody'
import SkillSet from '../components/SkillSet'
import Training from '../components/Training'

export default function About() {
  return (
    <div>
      <Navbar/>
      {/* <ProgBody heading="About Me"/> */}
      <AboutContainer/>
      <SkillSet/>
      <Training/>
      <Footer/>
    </div>
  )
}
