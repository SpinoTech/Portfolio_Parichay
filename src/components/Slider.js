import "./Slider.css";
import React from 'react'
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

// for removing the left right buttonss
function myArrow({ type, onClick, isEdge }) {
  return (
    <button onClick={onClick} disabled={isEdge} style={{display:"none"}}></button>
  )
}


export default function Project_slider() {

  return (
    <div>
      <div className="projectContainer">
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
          {/* college game website link  */}
          <div id="projectBlock">
            <a id="image_box" href="https://cgec-sports-association.netlify.app/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh3fQMGGtPAUk51eSjRMvY-jhel5XMIbwRoHlYGIZuMMZnbWIda3syrKj5TT6kFxd5dRAsJogKb8VRXhJ7DDTp9FbxD6-wSpK0fUUkCX4qw5DUcJmWFS1EDJ841xpTYJxJu6rGjQZN2IAvK0IGPldy5r98aDvTIWy5RXNw28ba4nUFEDNDhCPz-bdU/s320/clg_game_img.jpg" alt="food delevery website" /></a>
            <div className="topic">CGEC Sports Association Website</div>
            <div className="progDetail"> This is a registration from website of our college sports association . I made this website using html and css only and also help of microsoft xl . Using this we can get the data of each participant of our college including boys,girls & staffs and stor it in a xl file.</div>
            <button className="btn"><a href="https://cgec-sports-association.netlify.app/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* Food Delevery Website */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/food_delevery_website_frontend/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5xpqNNcZw94WVG3k5jzV6V6NS7C7hVbFcvo_iseZpOPdjF1Im5xnpGGdlNfkjy_oniQnRzpBF94Rlj2qiJvBhwJZoylqfIsQaeAcMO-TW0BmkGIEUebQ0BNq3cevdS1rZSOOLutmpBOtKoyQTg_j6EbO4FsC0QoeVvA-scj-UTV8dqO2-0MbgJeqY/s320/food_delevery.jpg" alt="food delevery website" /></a>
            <div className="topic"> Food Delevery Website Frontend</div>
            <div className="progDetail">I am just learning frontend devolopment so this frontend design is made by me .i use only HTML & CSS for making this website </div>
            <button className="btn"><a href="https://spinotech.github.io/food_delevery_website_frontend/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/*  Tic Tac Toe Game */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Tic_Tac_Toe_Game/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOtUucVLAwpHv-cBnJao42zbmxQJ0-_Jt4ynqZwFfCuvtaOfdy-m7bCnPy6gFfHZytTcKR9j6voE3utqNh7qJkPQhNu4rYJeSojFPrg7ONK8J_I6KiklCJT4ySX275Q4xxgGkdgEL59-Qv3cj-BCJib38FZvSB09YrxKNOAj9yDHZuawmkzZrmuOeW/s320/tic_tac_toe.png" alt="" /></a>
            <span className="topic">  L Tac Toe Game </span>
            <span className="progDetail"> It contains 2 game tic tac toe and L tac toe.L tac toe is the same type of tic tac toe but the logic is different.I use HTML, CSS, JS for making the game website . </span>
            <button className="btn"><a href="https://spinotech.github.io/Tic_Tac_Toe_Game/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* QR-Code-Generator */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/-QR-Code-Generator/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdTvQ-rU-LQjYUOxIpHRw6fNGOA76BhrxWX9-7hWEOMkdmcRViJ-UK0E5Y_8dC7V51HsJiS-yhvU_UDrhVthVZvPdox__IlKP5P5wAw6egdAa8jfpgRuH9ZpUzj4PbIg-GHMMdbGwlaU0pNG2VqTku4nqhwpI0aHqUljTZ63qziWuJgkFv1b3bJULR/s320/qr_img.jpg" alt="" /></a>
            <span className="topic"> QR Code Generator </span>
            <span className="progDetail"> This is a website of QR Code Generator. if we can give any text or link or number as input , it shows a QR code of that particular input. </span>
            <button className="btn"><a href="https://spinotech.github.io/-QR-Code-Generator/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* Digital_Clock */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Digital_Clock/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifknzuwEXM1eOl-sKnvS8VcLSe_eyMJyYodbYvOSymQy9ghVMHMZEyiWhwR62T65OL0tJkAi1aWrOttUCFT1uyVRUUA7NXUI8tE-uRrYWEj5DqPODfpejlWI8qJAMVnmBJLnFRjqfgOOVwp46qJpTuDCwVRKPMo25UE53p6fWlmYqOODLGJudJoI1D/s320/clock.jpg" alt="" /></a>
            <span className="topic"> Digital_Clock </span>
            <span className="progDetail"> This is a normal Digital clock using html ,css & java script </span>
            <button className="btn"><a href="https://spinotech.github.io/Digital_Clock/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

          {/* textUtils */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/react_projects/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmQJfF6LJY7sSSQngZeqhc_QiVjShd4Ic3kQwXabKAkg252POwCnsyLH-AShJXDpvrJdWUNdIDCEyxs33H-6Z_uUBuTVmGNyyTvLi9PEJ0P6MvBRyxaogg3zxpTjEPTfw7-sHDEani_HBBVEo0fOq65uSxA8SCmocqQoNKWelX1RTAj5KZYkZiNclF/s320/text_img.jpg" alt="" /></a>
            <span className="topic"> TextUtils </span>
            <span className="progDetail"> In this website we can change the text to uppercase and lowercase , also we can hear by clicking the speak button . This is my 1st react app . In fact i am just learning the react devolopment and i made this with the help of react tutorial of code with harry </span>
            <button className="btn"><a href="https://spinotech.github.io/react_projects/" target="_blank" rel="noreferrer">View here</a></button>
          </div>

        </Carousel>
      </div>
    </div>
  )
}
