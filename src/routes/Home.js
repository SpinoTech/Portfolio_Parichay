import React from 'react';
import Navbar from '../components/Navbar';
import Mainbody from'../components/Main_body';
// import Footer from '../components/Footer';

export default function home() {
  return (
    <div>
      <Navbar/>
      <Mainbody heading="HI I AM PARICHAY HALDAR"/>
      {/* <Footer/> */}
    </div>
  )
}

