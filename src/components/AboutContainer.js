import "./AboutContainer.css";
import React from 'react'
import bgVdo from '../images_folder/Black.mp4';
import profile1 from "../images_folder/profile1.jpg";

export default function AboutContainer() {
  return (
    <div id="About_page">
      <video src={bgVdo} autoPlay muted loop className="bgvdo"></video>
      <div className="About_container">
         <div className="about_image">
            <a href="https://www.instagram.com/parichay_haldar/" target='_blank' rel="noreferrer"> <img src={profile1} alt="" /></a>
         </div>
         <div className="about_content">
            <h2>Hi I Am Parichay Haldar</h2>
            <p>I'm from a small village (gouripur , kultali , south 24 pgs , 743338) . In my Initial phase of student life i used to ace my academics in my primary school . Till class 10 i was 1st at my school . Then i came to Dakshin Barasat for upskilling of my career From village to a small town surrounded by village . Then i took admission at Dakshin Barasat Sibdas Acharya High School . my life was little bit excited for relocating and switching my child life to adult life . Like that i left 2 year of my life back and passed the Higher Secondary Exam . After that i started preparing for Medical Entrance Exams . i appeared for NEET , AIIMS Exam but unfortunately i can't achieve success . In that nightmare i decieded to take admission On Physics(hons) , except that i was prepairing for next year JEE . And i took admission at Cooch Behar Government Engineering College in Computer Science & Engineering Dept. </p>
         </div>
      </div>

      <div className="About_container">
        <div className="education">
        <h1>: Education Details :</h1>
            <div className="digree">
                <div className="degpass"><h2>B.Tech</h2> <p>Year Of Passing : 2023</p></div>
                <a href="http://117.242.153.230/" target="_blank" rel="noreferrer"><p>Cooch Behar Government Engineering College</p></a>
                <p>Computer Science Engineering</p>
                <p className="marks">C.G.P.A : <b>9.29</b></p>
               
            </div>

            <div className="digree">
            <div className="degpass"> <h2>Higher Secondary Education</h2>  <p>Year Of Passing : 2018</p></div>
                <a href="https://www.facebook.com/dbsahs/" target="_blank" rel="noreferrer"><p>Dakshin Barasat Sibdas Acharya High School (HS)</p></a>
                <p>Science</p>
                <p className="marks">PERCENTAGE: <b>77.40 %</b></p>
               
            </div>

            <div className="digree">
            <div className="degpass"> <h2>Secondary Education</h2>  <p>Year Of Passing : 2016</p></div>
                <a href="https://directory.edugorilla.com/school/panchuakhali-high-school-kultali-south-24-parganas-fee-structure-syllabus-address-admission-form-contact-number/" target="_blank"rel="noreferrer"><p>Panchuakali High School (HS)</p></a>
                {/* <p>Science</p> */}
                <p className="marks">PERCENTAGE: <b>81 %</b></p>
               
            </div>
        </div>
      </div>
    </div>
  )
}
