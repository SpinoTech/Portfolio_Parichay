import React from 'react'
import "./CiscoImageContainer.css";
import imagesCisco from '../images_folder/CiscoImg/img_export';
import "animate.css/animate.compat.css"
import ScrollAnimation from "react-animate-on-scroll";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function ImgBoxCisco({ indent, url }) {
    return (
        <ScrollAnimation animateIn="fadeInDown" delay={1}>
            <div className={indent === "left" ? "imgBoxxleft" : "imgBoxxright"}>
                <img src={url} alt="" />
            </div>
        </ScrollAnimation>
    )
}

export default function CiscoImageContainer() {
    return (
        <>
            <div className='background_cisco'>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>

            <div className='CiscoImgContainer'>
                <h1>Memory Of Cisco</h1>
                <div className="imageBoxCisco">
                    {
                        imagesCisco.map((item, index) => {
                            var val = getRandomInt(100)
                            return <ImgBoxCisco indent={val % 2 === 0 ? "left" : "right"} url={item} key={index} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
