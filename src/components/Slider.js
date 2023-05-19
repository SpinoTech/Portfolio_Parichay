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
    <button onClick={onClick} disabled={isEdge} style={{ display: "none" }}></button>
  )
}


export default function Project_slider() {

  return (
    <div>
      <div className="projectContainer">
        <Carousel breakPoints={breakPoints} renderArrow={myArrow} style={{scrollBehavior: "smooth"}}>
          {/* Notebook app link  */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/NoteBook_frontend/" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></a>
            <div className="topic">SpinoTech Notebook app</div>
            <div className="progDetail">This is a MERN stack project . I use ReactJS for frontend , nodeJS & ExpressJS for the server side also MongoDb Atlas for storing the Notes for particular User . I use JWT authentication to authenticate the Users . We can store our notes on the cloud using this website also we can update our notes & delete also . Except that i attached voice fecility in this website , using the voice fecility we can listen the description for each note .</div>

            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/NoteBook_frontend/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/NoteBook_frontend" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>
          {/* Weather app link  */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Weather_app/" target="_blank" rel="noreferrer"><img src="https://images.unsplash.com/photo-1598944999410-e93772fc48a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" alt="" /></a>
            <div className="topic">SpinoTech Weather app</div>
            <div className="progDetail">This is a weather app made using React and openweathermap api,It shows details like temperature, wind speed , it also has the feature of finding your location and showcasing the current temperature, also it has the feature of showing forcast of 5 days.  </div>
            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/Weather_app/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/Weather_app" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>
          {/* college game website link  */}
          <div id="projectBlock">
            <a id="image_box" href="https://cgec-sports-association.netlify.app/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh3fQMGGtPAUk51eSjRMvY-jhel5XMIbwRoHlYGIZuMMZnbWIda3syrKj5TT6kFxd5dRAsJogKb8VRXhJ7DDTp9FbxD6-wSpK0fUUkCX4qw5DUcJmWFS1EDJ841xpTYJxJu6rGjQZN2IAvK0IGPldy5r98aDvTIWy5RXNw28ba4nUFEDNDhCPz-bdU/s320/clg_game_img.jpg" alt="food delevery website" /></a>
            <div className="topic">CGEC Sports Association Website</div>
            <div className="progDetail"> This is a registration from website of our college sports association . I made this website using html and css only and also help of microsoft xl . Using this we can get the data of each participant of our college including boys,girls & staffs and stor it in a xl file.</div>
            <div className="links">
              <button className="btn-small"><a href="https://cgec-sports-association.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/college_annual_sportsite" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>

          {/* Food Delevery Website */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/food_delevery_website_frontend/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5xpqNNcZw94WVG3k5jzV6V6NS7C7hVbFcvo_iseZpOPdjF1Im5xnpGGdlNfkjy_oniQnRzpBF94Rlj2qiJvBhwJZoylqfIsQaeAcMO-TW0BmkGIEUebQ0BNq3cevdS1rZSOOLutmpBOtKoyQTg_j6EbO4FsC0QoeVvA-scj-UTV8dqO2-0MbgJeqY/s320/food_delevery.jpg" alt="food delevery website" /></a>
            <div className="topic"> Food Delevery Website Frontend</div>
            <div className="progDetail">I am just learning frontend devolopment so this frontend design is made by me .i use only HTML & CSS for making this website </div>
            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/food_delevery_website_frontend/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/food_delevery_website_frontend" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>

          {/*  Tic Tac Toe Game */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Tic_Tac_Toe_Game/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOtUucVLAwpHv-cBnJao42zbmxQJ0-_Jt4ynqZwFfCuvtaOfdy-m7bCnPy6gFfHZytTcKR9j6voE3utqNh7qJkPQhNu4rYJeSojFPrg7ONK8J_I6KiklCJT4ySX275Q4xxgGkdgEL59-Qv3cj-BCJib38FZvSB09YrxKNOAj9yDHZuawmkzZrmuOeW/s320/tic_tac_toe.png" alt="" /></a>
            <span className="topic">  L Tac Toe Game </span>
            <span className="progDetail"> It contains 2 game tic tac toe and L tac toe.L tac toe is the same type of tic tac toe but the logic is different.I use HTML, CSS, JS for making the game website . </span>
            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/Tic_Tac_Toe_Game/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/Tic_Tac_Toe_Game" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>

          {/* QR-Code-Generator */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/-QR-Code-Generator/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdTvQ-rU-LQjYUOxIpHRw6fNGOA76BhrxWX9-7hWEOMkdmcRViJ-UK0E5Y_8dC7V51HsJiS-yhvU_UDrhVthVZvPdox__IlKP5P5wAw6egdAa8jfpgRuH9ZpUzj4PbIg-GHMMdbGwlaU0pNG2VqTku4nqhwpI0aHqUljTZ63qziWuJgkFv1b3bJULR/s320/qr_img.jpg" alt="" /></a>
            <span className="topic"> QR Code Generator </span>
            <span className="progDetail"> This is a website of QR Code Generator. if we can give any text or link or number as input , it shows a QR code of that particular input. </span>
            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/-QR-Code-Generator/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/-QR-Code-Generator/tree/master" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>

          {/* Digital_Clock */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/Digital_Clock/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifknzuwEXM1eOl-sKnvS8VcLSe_eyMJyYodbYvOSymQy9ghVMHMZEyiWhwR62T65OL0tJkAi1aWrOttUCFT1uyVRUUA7NXUI8tE-uRrYWEj5DqPODfpejlWI8qJAMVnmBJLnFRjqfgOOVwp46qJpTuDCwVRKPMo25UE53p6fWlmYqOODLGJudJoI1D/s320/clock.jpg" alt="" /></a>
            <span className="topic"> Digital_Clock </span>
            <span className="progDetail"> This is a normal Digital clock using html ,css & java script </span>
            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/Digital_Clock/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/Digital_Clock" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>

          {/* textUtils */}
          <div id="projectBlock">
            <a id="image_box" href="https://spinotech.github.io/react_projects/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmQJfF6LJY7sSSQngZeqhc_QiVjShd4Ic3kQwXabKAkg252POwCnsyLH-AShJXDpvrJdWUNdIDCEyxs33H-6Z_uUBuTVmGNyyTvLi9PEJ0P6MvBRyxaogg3zxpTjEPTfw7-sHDEani_HBBVEo0fOq65uSxA8SCmocqQoNKWelX1RTAj5KZYkZiNclF/s320/text_img.jpg" alt="" /></a>
            <span className="topic"> TextUtils </span>
            <span className="progDetail"> In this website we can change the text to uppercase and lowercase , also we can hear by clicking the speak button . This is my 1st react app . In fact i am just learning the react devolopment and i made this with the help of react tutorial of code with harry </span>
            <div className="links">
              <button className="btn-small"><a href="https://spinotech.github.io/react_projects/" target="_blank" rel="noreferrer">Live Demo</a></button>
              <button className="btn-small"><a href="https://github.com/SpinoTech/react_projects" target="_blank" rel="noreferrer">Git Repo</a></button>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  )
}
