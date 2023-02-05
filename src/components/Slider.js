import "./Slider.css";
import React from 'react'
import clg_sports from "../images_folder/clg_game_img.jpg";
import food_delevery from "../images_folder/food_delevery.jpg";
import tic_tac_toe from "../images_folder/tic_tac_toe.png";
import qr_img from "../images_folder/qr_img.jpg";
import clock from "../images_folder/clock.jpg";
import text from "../images_folder/text_img.jpg";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];


export default function Project_slider() {

  return (
    <div>
      <div className="projectContainer">
        <Carousel breakPoints={breakPoints}>
          {/* college game website link  */}
          <div id="projectBlock">
            <a id="image_box" href="https://cgec-sports-association.netlify.app/" target="_blank" rel="noreferrer"><img src={clg_sports} alt="food delevery website" /></a>
            <div className="topic">CGEC Sports Association Website</div>
            <div className="progDetail"> This is a registration from website of our college sports association . I made this website using html and css only and also help of microsoft xl . Using this we can get the data of each participant of our college including boys,girls & staffs and stor it in a xl file.</div>
            <button className="btn"><a href="https://cgec-sports-association.netlify.app/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* Food Delevery Website */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/food_delevery_website_frontend/" target="_blank" rel="noreferrer"><img src={food_delevery} alt="food delevery website" /></a>
            <div className="topic"> Food Delevery Website Frontend</div>
            <div className="progDetail">I am just learning frontend devolopment so this frontend design is made by me .i use only HTML & CSS for making this website </div>
            <button className="btn"><a href="https://spinotech.github.io/food_delevery_website_frontend/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/*  Tic Tac Toe Game */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Tic_Tac_Toe_Game/" target="_blank" rel="noreferrer"><img src={tic_tac_toe} alt="" /></a>
            <span className="topic">  L Tac Toe Game </span>
            <span className="progDetail"> It contains 2 game tic tac toe and L tac toe.L tac toe is the same type of tic tac toe but the logic is different.I use HTML, CSS, JS for making the game website . </span>
            <button className="btn"><a href="https://spinotech.github.io/Tic_Tac_Toe_Game/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* QR-Code-Generator */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/-QR-Code-Generator/" target="_blank" rel="noreferrer"><img src={qr_img} alt="" /></a>
            <span className="topic"> QR Code Generator </span>
            <span className="progDetail"> This is a website of QR Code Generator. if we can give any text or link or number as input , it shows a QR code of that particular input. </span>
            <button className="btn"><a href="https://spinotech.github.io/-QR-Code-Generator/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* Digital_Clock */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Digital_Clock/" target="_blank" rel="noreferrer"><img src={clock} alt="" /></a>
            <span className="topic"> Digital_Clock </span>
            <span className="progDetail"> This is a normal Digital clock using html ,css & java script </span>
            <button className="btn"><a href="https://spinotech.github.io/Digital_Clock/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* textUtils */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/react_projects/" target="_blank" rel="noreferrer"><img src={text} alt="" /></a>
            <span className="topic"> TextUtils </span>
            <span className="progDetail"> In this website we can change the text to uppercase and lowercase , also we can hear by clicking the speak button . This is my 1st react app . In fact i am just learning the react devolopment and i made this with the help of react tutorial of code with harry </span>
            <button className="btn"><a href="https://spinotech.github.io/react_projects/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

        </Carousel>
      </div>
    </div>
  )
}
