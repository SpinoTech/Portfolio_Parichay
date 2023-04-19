import "./ProgBody.css";
import React from 'react'
import bgVdo from '../images_folder/Black.mp4';
export default function Main_body_project(props) {
  return (
    <>
      <video src={bgVdo} autoPlay muted loop className="bgvdo"></video>
      <div id="progbody">
        <div className="heading">
          <h1>{props.heading}</h1>
          <p>{props.details}</p>
        </div>
      </div>
    </>
  )
}