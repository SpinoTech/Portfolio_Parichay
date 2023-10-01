import React from 'react';
import Navbar from '../components/Navbar';
import Mainbody from'../components/Main_body';
import Excitingupdates from '../components/Excitingupdates';
// import Footer from '../components/Footer';

export default function home() {
  return (
    <div>
      <Navbar/>
      <Mainbody/>
      <Excitingupdates/>
      {/* <Footer/> */}
    </div>
  )
}

