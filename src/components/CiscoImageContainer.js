import React from 'react'
import "./CiscoImageContainer.css";
import imagesCisco from '../images_folder/CiscoImg/img_export';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function ImgBoxCisco({indent , url}) {
    return (
            <div className={indent === "left" ?"imgBoxxleft":"imgBoxxright"}>
                <img src={url} alt="" />
                {/* <p>description</p> */}
            </div>
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
                <h1>Memmory Of Cisco</h1>
                <div className="imageBoxCisco">
                    {
                        imagesCisco.map((item , index) =>{
                            var val=getRandomInt(100)
                            return <ImgBoxCisco indent={val%2===0? "left":"right"} url = {item} key={index}/>
                        })
                    }                    
                </div>
            </div>
        </>
    )
}
