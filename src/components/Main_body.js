import "./Main_body.css";
import React from 'react'
import {Link} from 'react-router-dom';
import Intro_image from "../images_folder/background image home.jpg";

export default function main_body(props) {
  let heding=props.heading;
  // speaking effect
  const onClickSpeak=()=>{
    let msg = new SpeechSynthesisUtterance(heding);
    window.speechSynthesis.speak(msg);
  }

  let i=0;
  let task=setInterval(() => {
    document.getElementById("main_hading").innerText+=heding.charAt(i);
    i++;
    if(i===heding.length) clearInterval(task);
  }, 120);


  return (
    <div className="main_body">
        <div className="mask">
            <img src={Intro_image} alt="Intro_image" className="intro_image" />
        </div>
        <div className="content">
            <h1 id="main_hading" onClick={onClickSpeak}> </h1>
            <p>Engineer ~/~ Devoloper ~/~ Photographar</p>

            <div className="tog_btn">
            <Link to="/Project" className="btn">Projects</Link>
            <a href="https://www.instagram.com/death_zone_photography/" className="btn">Photography</a>
            </div>
        </div>
    </div>
  )
}
