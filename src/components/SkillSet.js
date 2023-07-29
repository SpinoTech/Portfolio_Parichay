import "./SkillSet.css";
import React, { useEffect } from 'react'
// for parallax tilt effect
import Tilt from 'react-parallax-tilt';

const loderCircle = (start, end, circle, progressVal) => {
    let loder = setInterval(() => {
        start++;
        if (start > end) clearInterval(loder);
        else {
            let circulat_progress = document.querySelector(circle),
                Progress_val = document.querySelector(progressVal);
            Progress_val.innerHTML = `${start} %`;
            circulat_progress.style.background = `conic-gradient(red ${start * 3.6}deg, transparent 0deg)`;
        }
    }, 50)
}

export default function SkillSet() {
// console.log(document.body.offsetHeight-window.innerHeight)
    useEffect(() => {
        loderCircle(0, 80, ".circular_progress", ".progress_val"); // for html css
        loderCircle(0, 85, "#cppCircle", "#cpprate") //   for c++
        loderCircle(0, 80, "#cCircle", "#crate") //   for c
        loderCircle(0, 90, "#oopsCircle", "#oopsrate") //   for oops
        loderCircle(0, 75, "#jsCircle", "#jsprate") //   for js
        loderCircle(0, 70, "#reactCircle", "#reactprate") //   for reactJS
        loderCircle(0, 75, "#mysqlCircle", "#mysqlrate") //   for Mysql
        loderCircle(0, 70, "#gitCircle", "#gitrate") //   for github
    }, [])

    return (
        <div id="skill">
            <h1 id="skillHeading"> Skills </h1>
            <div className="skillBody">
                <div className="circularSkill">
                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress">
                                <span className="progress_val">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">HTML & CSS</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="jsCircle">
                                <span className="progress_val" id="jsprate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">Java Script</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="reactCircle">
                                <span className="progress_val" id="reactprate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">ReactJS</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="cppCircle">
                                <span className="progress_val" id="cpprate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">C++</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="cCircle">
                                <span className="progress_val" id="crate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">C language</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="oopsCircle">
                                <span className="progress_val" id="oopsrate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">OOPs</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="mysqlCircle">
                                <span className="progress_val" id="mysqlrate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">My Sql</span>
                    </div>

                    <div className="skillContainer">
                        <Tilt>
                            <div className="circular_progress" id="gitCircle">
                                <span className="progress_val" id="gitrate">0%</span>
                            </div>
                        </Tilt>
                        <span className="skill_set">Git & GitHub</span>
                    </div>
                </div>
            </div>

            {/* subject part */}

            <div className="subject">
                <h2 className="hedsubject">Subjects :  </h2>
                <div className="subjects">
                    <p>Data Structures and Alogrithms</p>
                    <p>Computer Networks</p>
                    <p>Operating System</p>
                    <p>Database Management System</p>
                </div>
            </div>

            <div className="subject">
                <h2 className="hedsubject">Tools :  </h2>
                <div className="subjects">
                    <p>VS Code</p>
                    <p>Ms Word</p>
                    <p> Ms PowerPoint</p>
                </div>
            </div>

            <div className="subject">
                <h2 className="hedsubject">Soft Skills  :  </h2>
                <div className="subjects">
                    <p>Time Management</p>
                    <p>Teamwork</p>
                    <p>Communication</p>
                </div>
            </div>

            {/* leetcode part */}
            <Tilt>
                <div id="leetbody">
                    <div className="leetcode">
                        <a href="https://leetcode.com/haldarparichay/" target="_blank" rel="noreferrer"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_AtvXuO-Q_gcOkectG55pZAK1FVtiSBABUmX4oqSyfmkkqoSCcHdl3ufXp8ddj04d3k4_6Utf9SLUB_sTxrZ92vYC9nbI4Zm0z033XsoGClJsH44R5jbj-WjqU1qGaQgtJHRFNROofMmjxll1giCOfIWsTxUrBG2aZ51jvL4KalxGjU_uMpYfVlK4/s320/leetcode.png" alt="" className="leetimage" /></a>
                        <a href="https://leetcode.com/haldarparichay/" target="_blank" rel="noreferrer"><h2>Leetcode</h2></a>
                        <a href="https://leetcode.com/haldarparichay/" target="_blank" rel="noreferrer"><p>Profile</p></a>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}
