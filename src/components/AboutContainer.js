import "./AboutContainer.css";
import React from 'react'
import bgVdo from '../images_folder/Black.mp4';
// for parallax tilt effect
// import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import animation from "../images_folder/animation4.gif"
import Typewriter from "./Typewriter";

export default function AboutContainer() {
  return (
    <div id="About_page">
      <video src={bgVdo} autoPlay muted loop className="bgvdo"></video>
      <div className="About_container">
        {/* <Tilt> */}
        {/* for parallax tilt effect */}
        <div className="about_image">
          <a href="https://www.instagram.com/parichay_haldar/" target='_blank' rel="noreferrer">
            <motion.img
              transition={{ duration: 5, type: "spring" }}
              initial={{ height: "35vh", width: "100%", boxShadow: "0 0 15px rgba(255, 175, 216, 0.8)" }}
              whileInView={{ height: "45vh", width: "100%", boxShadow: "0 0 50px rgba(22, 215, 225, 0.429)" }}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg03lRCaRDsvo25oTYuIkmW2IL3jp6wbfKm4wF9JoLrjktTOGPIC72HJZIYHdY9dxhzmkp9lhI2ST30E_Q0MIXwNXeBZd6f-_cDzamb31UW61lF45Laq0SOMsOn_bYVB1xvGIaPxbRNy_TSXfyTWMMuE0weFSvPNLKThFOn870CRBuaBjOhh2_suTuS/s320/profile1.jpg"
              alt=""
              className="profile"
            />
          </a>
        </div>
        {/* </Tilt> */}

        <div className="about_content">
          <h2>Hi I Am Parichay Haldar</h2>
          
          <Typewriter text="My journey began in the quaint village of Gouripur, situated in the picturesque landscapes of Kultali, South 24 Parganas, with the postal code 743338. From those humble beginnings, I embarked on a path of academic excellence that has defined my life's trajectory." tag='p' />
          
          <Typewriter text="During my formative years, I established a reputation for academic prowess, consistently achieving top ranks in my primary school. This trend continued through my schooling, culminating in my position as the valedictorian of my class at the culmination of grade 10. The pursuit of knowledge fueled my aspirations, propelling me towards Dakshin Barasat, a small town nestled amidst the villages, where I endeavored to enrich and upskill my educational journey." tag='p' />
          
          <Typewriter text=" At Dakshin Barasat Sibdas Acharya High School, I experienced the excitement and challenges of transitioning from childhood to adulthood. This pivotal period marked the passage of two transformative years, shaping my character and strengthening my resolve. In the wake of this transformation, I successfully navigated my Higher Secondary Examinations, further reinforcing my commitment to intellectual growth." tag='p' />
          
          <Typewriter text="Subsequently, I set my sights on the medical field, diligently preparing for esteemed entrance examinations such as NEET and AIIMS. Despite my earnest efforts, the coveted success eluded me in this pursuit. Yet, in the face of this challenging juncture, I chose to embrace a new direction. A path carved in the realms of Physics beckoned, and I embarked on a journey to hone my skills and expand my horizons." tag='p' />
          
          <Typewriter text="Parallel to my studies, I set forth on a quest to realize my ambitions in the realm of engineering. I was admitted to the Computer Science & Engineering Department at Cooch Behar Government Engineering College, marking a significant milestone in my academic voyage. The halls of higher learning welcomed me, and I immersed myself in the world of algorithms, coding, and innovation." tag='p' />
          
          <Typewriter text="My journey, much like the code I write, is an ongoing process of continuous improvement. From a village to a small town, from academic accolades to unforeseen challenges, my narrative is a testament to resilience, adaptability, and the unwavering pursuit of knowledge. As I stand at the crossroads of past achievements and future endeavors, I am poised to embrace the opportunities that lie ahead, armed with the wisdom gained from my diverse experiences." tag='p' />
          
          <Typewriter text="Thank you for joining me on this journey, and I look forward to the chapters yet to be written." tag='p' />
        </div>

        {/* for background animation */}
        <div className="aboutAnimation">
          <img src={animation} alt="" />
        </div>
      </div>



      <div className="About_container">
        <div className="education">
          <h1>: Education Details :</h1>
          <div className="digree">
            <div className="degpass"><h2>B.Tech</h2> <p>Year Of Passing : 2023</p></div>
            <a href="http://117.242.153.230/" target="_blank" rel="noreferrer"><p>Cooch Behar Government Engineering College</p></a>
            <p>Computer Science Engineering</p>
            <p className="marks">C.G.P.A : <a href="https://drive.google.com/file/d/1rahKZYxCWirzbObVMfnqyvceCm1SQqZg/view?usp=sharing" target="_blank" rel="noreferrer">9.21</a></p>

          </div>

          <div className="digree">
            <div className="degpass"> <h2>Higher Secondary Education</h2>  <p>Year Of Passing : 2018</p></div>
            <a href="https://www.facebook.com/dbsahs/" target="_blank" rel="noreferrer"><p>Dakshin Barasat Sibdas Acharya High School (HS)</p></a>
            <p>Science</p>
            <p className="marks">PERCENTAGE: <b>77.40 %</b></p>

          </div>

          <div className="digree">
            <div className="degpass"> <h2>Secondary Education</h2>  <p>Year Of Passing : 2016</p></div>
            <a href="https://directory.edugorilla.com/school/panchuakhali-high-school-kultali-south-24-parganas-fee-structure-syllabus-address-admission-form-contact-number/" target="_blank" rel="noreferrer"><p>Panchuakali High School (HS)</p></a>
            {/* <p>Science</p> */}
            <p className="marks">PERCENTAGE: <b>81 %</b></p>

          </div>
        </div>
      </div>
    </div>
  )
}
