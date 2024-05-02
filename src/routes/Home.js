import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Mainbody from'../components/Main_body';
import Excitingupdates from '../components/Excitingupdates';
import CiscoImageContainer from '../components/CiscoImageContainer';
// import Footer from '../components/Footer';

export default function Home() {
  // for openint visitors part
  const [openVisitors , setOpenVisitors]=useState(false)
  return (
    <div>
      <Navbar openVisitors={openVisitors} setOpenVisitors={setOpenVisitors}/>
      <Mainbody openVisitors={openVisitors}/>
      <Excitingupdates/>
      <CiscoImageContainer/>
      {/* <Footer/> */}
    </div>
  )
}


