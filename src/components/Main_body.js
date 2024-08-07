import "./Main_body.css";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Intro_image from "../images_folder/background image home.jpg";
import arrow from "../images_folder/arrow.png";
import Mouse from "../images_folder/mouseDown.gif";


export default function Main_body({ openVisitors }) {
  useEffect(() => {
    const heading = "HI I AM PARICHAY HALDAR";
    let i = 0;
    function typewrite() {
      if (i < heading.length) {
        document.getElementById("main_hading").innerText += heading.charAt(i);
        i++;
        setTimeout(typewrite, 100);
      }
    }
    typewrite();
  }, [])


  return (
    <div className="main_body">
      <div className="mask">
        <img src={Intro_image} alt="Intro_image" className="intro_image" />
      </div>
      <div className="content">
        <div className="imgbox">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxSVss-PbPxjgnpdHxX0n24EAJCaGi0zQRSEP1pGVJIRBS7z1ZOlH7l8NDuI8tnlztdK5bjBcKajitAUNzwhcSRwx4K85ueVnneqOpkelADxXHNfKKd4BGsf2QZH1gU1NXDnU7Gpx0KS5xqjzqb_mR3gOlKjadtHIwi0ZXfYD8VVqTh70agUVg_VImv9s/s320/Screenshot%202023-07-29%20234529.jpg" alt="bgimg" srcset="" />
        </div>
        <img src={arrow} alt="arrow" srcset="" id="arrow" />
        <h1 id="main_hading"> </h1>
        <p id="desc">Engineer ~/~ Devoloper ~/~ Photographar</p>
        <div className="tog_btn">
          <Link to="/Project" className="btn">Projects</Link>
          <a href="https://www.instagram.com/death_zone_photography/" className="btn">Photography</a>
        </div>

        {/* scrool down button part  */}
        <div id="scroolDown">
          <p className="scroolDownText">scrool down for</p>
          <img src={Mouse} alt="" />
          <p className="scroolDownText">latest updates</p>
        </div>
        {/* for visitor part */}
        <div class={openVisitors ? "elfsight-app-23008504-b83e-420f-bfa2-e0029ac4ceb8 showViewerCard" : "elfsight-app-23008504-b83e-420f-bfa2-e0029ac4ceb8 hideViewerCard"}></div>
      </div>

      {/* for animation */}

      <div className="animationBox">
        <div class="wrap anim1">
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
        </div>
        <div class="wrap anim3">
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
        </div>
        <div class="wrap anim4">
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
          <div class="c"></div>
        </div>

      </div>

    </div>
  )
}
