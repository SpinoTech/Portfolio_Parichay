import React from 'react'
import "./Excitingupdates.css";
// import animation3 from "../images_folder/animation3.gif";
import ciscoAnimation from "../images_folder/CiscoFireworks.gif";
import Typewriter from './Typewriter';
// import "animate.css/animate.compat.css"
// import ScrollAnimation from "react-animate-on-scroll";

export default function Excitingupdates() {
    let width = window.screen.width;
    let text="Ladies and Gentlemen, Esteemed Guests, and Respected Colleagues , I stand before you today with a heart brimming with excitement and gratitude, thrilled to share the incredible news that I have embarked on a new chapter in my professional journey as a Software Test Engineer Trainee Apprentice at Cisco, a global technology leader renowned for its innovation, conscious culture, and unwavering commitment to inclusivity. It is both an honor and a privilege to be a part of this remarkable company, and I am deeply grateful for the opportunity to contribute to their mission of shaping an inclusive future for all. Joining Cisco is not merely a career move for me; it is a significant milestone that represents the culmination of my aspirations and dedication. As I step into this new role, I am filled with immense gratitude for everyone who has supported me on this journey so far. Your encouragement, mentorship, and belief in my potential have been invaluable, and I carry your faith in my abilities with me as I embark on this exciting adventure. Cisco's ethos of fostering a conscious culture and promoting inclusivity resonates deeply with me. In a world where diversity is our greatest strength, Cisco stands as a beacon of inspiration, championing the cause of inclusivity and equality. I am profoundly inspired by Cisco's commitment to creating a workplace where every individual's unique talents and perspectives are not only valued but celebrated. This dedication to inclusivity mirrors my own beliefs and convictions, and I am eager to contribute to this transformative vision. As a Software Test Engineer Trainee Apprentice, I am acutely aware of the responsibilities and challenges that lie ahead. I am ready to immerse myself in the world of software testing, to learn, grow, and collaborate with some of the brightest minds in the industry. I am eager to embrace the opportunities for skill development and knowledge enhancement that Cisco offers. The prospect of working alongside brilliant colleagues who share my passion for technology and innovation fills me with enthusiasm. Together, I am confident that we will achieve remarkable feats and push the boundaries of what is possible in the realm of software testing. My journey with Cisco is not merely a personal achievement; it is a shared victory for everyone who has believed in me and supported my dreams. I am committed to making the most of this opportunity, to exceed expectations, and to contribute meaningfully to Cisco's legacy of excellence. I am excited to embark on this journey of discovery, where challenges will be met with determination, and successes will be celebrated together. In closing, I extend my heartfelt gratitude to all those who have been a part of my journey thus far. Your unwavering support has been my guiding light, propelling me toward this momentous achievement. I am excited about the future, about the endless possibilities that lie ahead, and about the transformative impact we can create together. Thank you, Cisco, for believing in me and giving me the opportunity to be a part of your incredible team. I am ready, willing, and eager to contribute my best, to learn, and to grow. Together, let us embark on this thrilling adventure and create a future that is inclusive, innovative, and inspiring for all. Thank you, everyone, for being a part of this momentous occasion. Here's to a future filled with exciting challenges, meaningful accomplishments, and endless opportunities. With heartfelt gratitude and boundless enthusiasm,";
    if(width<=700){
        text="Ladies and gentlemen, esteemed colleagues, and dear friends,I stand before you today with a heart brimming with excitement and gratitude as I embark on a new chapter in my professional journey. Joining Cisco, a beacon of innovation and inclusivity, as a software test engineer trainee apprentice is a dream realized. This opportunity represents not just a career move, but a chance to contribute to a conscious culture and shape an inclusive future for all. I am profoundly honored to be part of a global technology leader that stands at the forefront of transformative change. Cisco's commitment to fostering an environment where every voice is heard, and every idea is valued, resonates deeply with my own aspirations.I look forward to learning, growing, and collaborating with the brilliant minds that make Cisco exceptional. Together, we will push the boundaries of what is possible in the realm of technology.I extend my heartfelt gratitude to everyone who has supported me on this journey. Your belief in my potential has been my driving force. I am immensely excited to continue this adventure with Cisco, embracing innovation and shaping a future that is truly inclusive for all.Thank you, and here's to the exciting journey ahead! 🚀"
    }
    console.log(width)
    return (
        <>
            <div className='updateBody'>
            {/* <ScrollAnimation animateIn="fadeInDown" delay={1}> */}
                <div className='imgBody'>
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgiYgV5WB44Wupsxij6T4Uv_k8So2urnvY0joUleuYhgGd8VjIm80O-wKrOSdzFXaZTFYEFdOraFrYZhMNa735eghB5mxOk8ynXcDq5-nvWEjLZkpollpYYsDcRBY8oMpmAMbp3alO_rD48ZtBLhbgdOascJYdsNrEMJeORxafvKf2v6kr2bz-IIHid5IY" alt="" />
                </div>
                {/* </ScrollAnimation> */}

                <div className="UpdateHead">
                {/* <ScrollAnimation animateIn="fadeInLeft" delay={1}> */}
                    <Typewriter text="Empowering Dreams: My Journey with Cisco as a Software Test Engineer Trainee Apprentice" tag='h1' />
                    {/* </ScrollAnimation> */}
                    {/* <ScrollAnimation animateIn="fadeInRight" delay={1}> */}
                    <Typewriter text={text} tag='p' />
                    {/* <p>{text}</p> */}
                    {/* </ScrollAnimation> */}
                    <p className='signature'> ~ Parichay Haldar ~</p>
                </div>

            </div>
            {/* <div className="animation">
                <img src={animation} alt="" />
            </div> */}
            <div className="animation">
                <img src={ciscoAnimation} alt="" />
            </div>
        </>
    )
}
