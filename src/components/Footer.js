import './Footer.css';
import React from 'react'
import { SiGmail } from "react-icons/si"
import { FiPhoneCall } from "react-icons/fi"
import { AiTwotoneHome } from "react-icons/ai"
import{Link} from "react-router-dom";
import{BsFacebook , BsGithub , BsInstagram ,BsLinkedin}from "react-icons/bs"
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
          <a href="https://www.google.com/maps/place/Tangrabichi+New+Fp+School/@22.1590632,88.5725683,327m/data=!3m1!1e3!4m5!3m4!1s0x3a023df5c40539a3:0xc8cbc73ab29109e1!8m2!3d22.1594909!4d88.5720618" target="_blank"  rel="noreferrer"> <AiTwotoneHome size={20} style={{ color: "#fff", marginRight: "2rem" }} /></a>
            <div>
              <p>VILL : GOURIPUR , POST : TANGRABICHI , P.S : KULTALI ,PIN : 743338</p>
            </div>

          </div>
          <div className="phone">
            <h4>
            <a href=" tel:9735692626"> <FiPhoneCall size={20} style={{ color: "#fff", marginRight: "2rem" }} /> </a>
              <a href=" tel:9735692626"> <b> +91 9735692626</b> </a>
             
            </h4>
          </div>

          <div className="gmail">
            <h4>
            <a href="mailto:haldarparichay@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
              <a href="mailto:haldarparichay@gmail.com" target="_blank" rel="noopener noreferrer">haldarparichay@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <Link to="../About"><h2>About Myself</h2></Link>
          <p>This is a React based Portfolio Website of mine . i'm currently persuing my b.Tech in Computer Science & Engineering. It's my 2nd react app and i'm happy to develop my own portfolio . <br /><br /> Devoloper &copy; SpinoTech & DEATH zONE </p>
          
          <div className="social">
             <a href="https://www.facebook.com/profile.php?id=100022069003337" target="_blank" rel="noreferrer">
              <BsFacebook  style={{ color: "#fff", marginRight: "" }}/>
             </a>

             <a href="https://github.com/SpinoTech" target="_blank" rel="noreferrer">
             <BsGithub  style={{ color: "#fff", marginRight: "" }}/>
             </a>

             <a href="https://www.instagram.com/parichay_haldar/" target="_blank" rel="noreferrer"><BsInstagram  style={{ color: "#fff", marginRight: "" }}/></a>

             <a href="https://www.linkedin.com/in/parichay-haldar-2348361b2/" target="_blank" rel="noreferrer"><BsLinkedin style={{ color: "#fff", marginRight: "" }}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
