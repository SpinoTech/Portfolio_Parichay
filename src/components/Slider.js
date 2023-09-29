import "./Slider.css";
import React from 'react'
import Carousel from "react-elastic-carousel";


// making the project box function for reusing
const ProgectBox = ({ imgUrl, Heading, Description, LiveLink, GitLink }) => {
  return (
    <div id="projectBlock">
      <a id="image_box" href={LiveLink.length === 0 ? GitLink : LiveLink} target="_blank" rel="noreferrer"><img src={imgUrl} alt="" /></a>
      <div className="topic">{Heading}</div>
      <div className="progDetail">{Description}</div>

      <div className={LiveLink.length !== 0 ? "links" : "linksCenter"}>
        {LiveLink.length !== 0 && <button className="btn-small"><a href={LiveLink} target="_blank" rel="noreferrer">Live Demo</a></button>}
        <button className="btn-small"><a href={GitLink} target="_blank" rel="noreferrer">Git Repo</a></button>
      </div>
    </div>
  )
}
const ExamsAndPreprations=({logo , name , live , git , tag})=>{
  return (
    <div className="ExamBox">
      <div className="tag">{tag}</div>
      <img src={logo} alt="" className="logo"/>
      <div className="ExamDesc">
        <h1>{name}</h1>
        <div className="examLinks">
        {live.length!==0&&<a href={live} class="custom-btn btn-3"><span>Live View</span></a>}
        <a href={git} class="custom-btn btn-3"><span>GitHub</span></a>
        </div>
      </div>
    </div>
  )
}

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
          <h1>Personal Projects</h1>
        <Carousel breakPoints={breakPoints} renderArrow={myArrow} style={{ scrollBehavior: "smooth" }}>
          {/* Travel Guide Pro App */}
          <ProgectBox imgUrl="https://st2.depositphotos.com/3725083/5485/i/950/depositphotos_54856347-stock-photo-travel-the-world-monument-concept.jpg" Heading="Travel Guide Pro App" Description="Thank you for your kind words! The dynamic travel guide website, powered by ReactJS and integrated with Google Maps and RapidAPI, provides users with a seamless and interactive experience. Real-time data on restaurants, landmarks, and hotels, coupled with a user-friendly interface, simplifies trip planning. This innovative approach showcases a fusion of technology and creativity, making it an invaluable tool for travelers. Your encouragement fuels the drive to keep evolving and enhancing user experiences in web development." LiveLink="https://spinotech.github.io/Travel-Guider-Pro-App/" GitLink="https://github.com/SpinoTech/Travel-Guider-Pro-App" />

          {/* Notebook app link  */}
          <ProgectBox imgUrl="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" Heading="SpinoTech Notebook app" Description="This is a MERN stack project . I use ReactJS for frontend , nodeJS & ExpressJS for the server side also MongoDb Atlas for storing the Notes for particular User . I use JWT authentication to authenticate the Users . We can store our notes on the cloud using this website also we can update our notes & delete also . Except that i attached voice fecility in this website , using the voice fecility we can listen the description for each note ." LiveLink="https://spinotech.github.io/NoteBook_frontend/" GitLink="https://github.com/SpinoTech/NoteBook_frontend" />

          {/* chatGpt clone */}
          <ProgectBox imgUrl="https://us.123rf.com/450wm/azvm/azvm2303/azvm230300054/200196828-cute-robot-working-with-laptop-and-speech-bubble-in-dark-room-generative-ai.jpg?ver=6" Heading="ChatGpt Clone App" Description="ChatGPT clone, featuring a ReactJS frontend and a NodeJS-ExpressJS backend, simulating lifelike conversations using OpenAI’s text-davinci-003 model. The GitHub-hosted frontend UI showcases design, while the backend, which links the OpenAI API, remains suspended due to subscription constraints. During backend establishment, extensive utilization of online resources, including 80% learning from YouTube tutorials, was instrumental. Proficiency in web development is underscored by a 70% completion rate in API integration." LiveLink="" GitLink="https://github.com/SpinoTech/Chat-GPT-clone" />


          {/* Weather app link  */}
          <ProgectBox imgUrl="https://images.unsplash.com/photo-1598944999410-e93772fc48a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" Heading="SpinoTech Weather app" Description="This is a weather app made using React and openweathermap api,It shows details like temperature, wind speed , it also has the feature of finding your location and showcasing the current temperature, also it has the feature of showing forcast of 5 days." LiveLink="https://spinotech.github.io/Weather_app/" GitLink="https://github.com/SpinoTech/Weather_app" />


          {/* college game website link  */}
          <ProgectBox imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh3fQMGGtPAUk51eSjRMvY-jhel5XMIbwRoHlYGIZuMMZnbWIda3syrKj5TT6kFxd5dRAsJogKb8VRXhJ7DDTp9FbxD6-wSpK0fUUkCX4qw5DUcJmWFS1EDJ841xpTYJxJu6rGjQZN2IAvK0IGPldy5r98aDvTIWy5RXNw28ba4nUFEDNDhCPz-bdU/s320/clg_game_img.jpg" Heading="CGEC Sports Association Website" Description="This is a registration from website of our college sports association . I made this website using html and css only and also help of microsoft xl . Using this we can get the data of each participant of our college including boys,girls & staffs and stor it in a xl file." LiveLink="https://cgec-sports-association.netlify.app/" GitLink="https://github.com/SpinoTech/college_annual_sportsite" />


          {/* Food Delevery Website */}
          <ProgectBox imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5xpqNNcZw94WVG3k5jzV6V6NS7C7hVbFcvo_iseZpOPdjF1Im5xnpGGdlNfkjy_oniQnRzpBF94Rlj2qiJvBhwJZoylqfIsQaeAcMO-TW0BmkGIEUebQ0BNq3cevdS1rZSOOLutmpBOtKoyQTg_j6EbO4FsC0QoeVvA-scj-UTV8dqO2-0MbgJeqY/s320/food_delevery.jpg" Heading="Food Delevery Website Frontend" Description="I am just learning frontend devolopment so this frontend design is made by me .i use only HTML & CSS for making this website" LiveLink="https://spinotech.github.io/food_delevery_website_frontend/" GitLink="https://github.com/SpinoTech/food_delevery_website_frontend" />


          {/*  Tic Tac Toe Game */}
          <ProgectBox imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOtUucVLAwpHv-cBnJao42zbmxQJ0-_Jt4ynqZwFfCuvtaOfdy-m7bCnPy6gFfHZytTcKR9j6voE3utqNh7qJkPQhNu4rYJeSojFPrg7ONK8J_I6KiklCJT4ySX275Q4xxgGkdgEL59-Qv3cj-BCJib38FZvSB09YrxKNOAj9yDHZuawmkzZrmuOeW/s320/tic_tac_toe.png" Heading="L Tac Toe Game" Description="Explore our game website featuring two captivating challenges: Tic Tac Toe and L Tac Toe. In Tic Tac Toe, players aim for a straight line using Xs and Os. L Tac Toe adds a twist, requiring players to form an L shape strategically. Using HTML, CSS, and JavaScript, our user-friendly interface allows dual players to compete. The objective? Find the optimal pattern before your opponent does. A reset button ensures endless fun. Enjoy the thrill of strategy and competition!" LiveLink="https://spinotech.github.io/Tic_Tac_Toe_Game/" GitLink="https://github.com/SpinoTech/Tic_Tac_Toe_Game" />


          {/* QR-Code-Generator */}
          <ProgectBox imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdTvQ-rU-LQjYUOxIpHRw6fNGOA76BhrxWX9-7hWEOMkdmcRViJ-UK0E5Y_8dC7V51HsJiS-yhvU_UDrhVthVZvPdox__IlKP5P5wAw6egdAa8jfpgRuH9ZpUzj4PbIg-GHMMdbGwlaU0pNG2VqTku4nqhwpI0aHqUljTZ63qziWuJgkFv1b3bJULR/s320/qr_img.jpg" Heading="QR Code Generator" Description="This is a website of QR Code Generator. if we can give any text or link or number as input , it shows a QR code of that particular input." LiveLink="https://spinotech.github.io/-QR-Code-Generator/" GitLink="https://github.com/SpinoTech/-QR-Code-Generator/tree/master" />


          {/* Digital_Clock */}
          <ProgectBox imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifknzuwEXM1eOl-sKnvS8VcLSe_eyMJyYodbYvOSymQy9ghVMHMZEyiWhwR62T65OL0tJkAi1aWrOttUCFT1uyVRUUA7NXUI8tE-uRrYWEj5DqPODfpejlWI8qJAMVnmBJLnFRjqfgOOVwp46qJpTuDCwVRKPMo25UE53p6fWlmYqOODLGJudJoI1D/s320/clock.jpg" Heading="Digital_Clock" Description="This is a normal Digital clock using html ,css & java script" LiveLink="https://spinotech.github.io/Digital_Clock/" GitLink="https://github.com/SpinoTech/Digital_Clock" />

          {/* textUtils */}
          <ProgectBox imgUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmQJfF6LJY7sSSQngZeqhc_QiVjShd4Ic3kQwXabKAkg252POwCnsyLH-AShJXDpvrJdWUNdIDCEyxs33H-6Z_uUBuTVmGNyyTvLi9PEJ0P6MvBRyxaogg3zxpTjEPTfw7-sHDEani_HBBVEo0fOq65uSxA8SCmocqQoNKWelX1RTAj5KZYkZiNclF/s320/text_img.jpg" Heading="TextUtils" Description="In this website we can change the text to uppercase and lowercase , also we can hear by clicking the speak button . This is my 1st react app . In fact i am just learning the react devolopment and i made this with the help of react tutorial of code with harry" LiveLink="https://spinotech.github.io/react_projects/" GitLink="https://github.com/SpinoTech/react_projects" />


        </Carousel>
      </div>
      <div className="projectContainer">
        <h1>Exams & Preprations</h1>
        <Carousel breakPoints={breakPoints} renderArrow={myArrow} style={{ scrollBehavior: "smooth" }}>
          <ExamsAndPreprations logo="https://media.licdn.com/dms/image/C510BAQGe3O2CS3Ln5g/company-logo_200_200/0/1581857755332?e=2147483647&v=beta&t=XGRVbWX1q1hMbsZMSgLu4bYkczwDXSp0SbCuFJ-RCsM" name="ADmyBRAND India internship" live="https://admybrand-india-internship.onrender.com/"  git="https://github.com/SpinoTech/ADmyBRAND_India_internship" tag="Assignment Exam"/>

          <ExamsAndPreprations logo="https://assets.static-upwork.com/org-logo/1181384662838890496?date=1696025242380" name="PearlThoughts Assignment" live=""  git="https://github.com/SpinoTech/dogBreedsImage" tag="Assignment"/>

          <ExamsAndPreprations logo="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/h6aec2h0kneerkx2fpwb" name="Taiyo-.AI-assignment" live=""  git="https://github.com/SpinoTech/Taiyo-.AI-assignment" tag="Assignment Exam"/>

          <ExamsAndPreprations logo="https://upload.wikimedia.org/wikipedia/commons/1/14/Personal-argentina-logo-3.png" name="infinite carousel using js" live="https://spinotech.github.io/infinite-carousel-js/"  git="https://github.com/SpinoTech/infinite-carousel-js" tag="Personal Practice"/>

          <ExamsAndPreprations logo="https://upload.wikimedia.org/wikipedia/commons/1/14/Personal-argentina-logo-3.png" name="infinite Commenting System Experiment-reactJS" live=""  git="https://github.com/SpinoTech/CommentingSystemExperiment-reactJS" tag="Personal Practice"/>
          
          <ExamsAndPreprations logo="https://mir-s3-cdn-cf.behance.net/projects/404/ec6aae163510433.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png" name="Exam-of-fulstack of unknown" live=""  git="https://github.com/SpinoTech/Exam-of-fulstack-devolopment-parichay-haldar" tag="Assignment Exam"/>

        </Carousel>
      </div>
    </div>
  )
}
