import "./SkillSet.css";
import React, { useEffect } from 'react'
// for parallax tilt effect
import Tilt from 'react-parallax-tilt';
import "animate.css/animate.compat.css"
import ScrollAnimation from "react-animate-on-scroll";

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
        loderCircle(0, 80, "#htmlcssCircle", "#htmlcssrate"); // for html css
        loderCircle(0, 85, "#cppCircle", "#cpprate") //   for c++
        loderCircle(0, 80, "#cCircle", "#crate") //   for c
        loderCircle(0, 90, "#oopsCircle", "#oopsrate") //   for oops
        loderCircle(0, 75, "#jsCircle", "#jsprate") //   for js
        loderCircle(0, 70, "#reactCircle", "#reactprate") //   for reactJS
        loderCircle(0, 75, "#mysqlCircle", "#mysqlrate") //   for Mysql
        loderCircle(0, 70, "#gitCircle", "#gitrate") //   for github
        loderCircle(0, 50, "#javaCircle", "#javarate") //   for java
        loderCircle(0, 50, "#PythonCircle", "#Pythonrate") //   for python
        loderCircle(0, 70, "#Network_AutomationCircle", "#Network_Automationrate") //   for Network_Automation
        loderCircle(0, 80, "#Network_AdminCircle", "#Network_Adminrate") //   for Network_Admin
        loderCircle(0, 65, "#CypressCircle", "#Cypressrate") //   for Cypress
        loderCircle(0, 60, "#seleniumCircle", "#seleniumrate") //   for selenium
        loderCircle(0, 65, "#TestNGJ_UnitCircle", "#TestNGJ_Unitrate") //   for selenium
        loderCircle(0, 70, "#ApiTestCircle", "#ApiTestrate") //   for ApiTest
        loderCircle(0, 50, "#LoadTestCircle", "#LoadTestrate") //   for LoadTest
    }, [])

    return (
        <div id="skill">
            <h1 id="skillHeading">~ Skills ~</h1>
            <div className="skillBody">
                <div className="circularSkill">
                <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="cCircle">
                                    <span className="progress_val" id="crate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">C language</span>
                        </div>
                    </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="cppCircle">
                                    <span className="progress_val" id="cpprate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">C++</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="javaCircle">
                                    <span className="progress_val" id="javarate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Java</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="PythonCircle">
                                    <span className="progress_val" id="Pythonrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Python</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="jsCircle">
                                    <span className="progress_val" id="jsprate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Java Script</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="Network_AutomationCircle">
                                    <span className="progress_val" id="Network_Automationrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Network Automation</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="Network_AdminCircle">
                                    <span className="progress_val" id="Network_Adminrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Network Administration</span>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress"id="htmlcssCircle">
                                    <span className="progress_val" id="htmlcssrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">HTML & CSS</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="reactCircle">
                                    <span className="progress_val" id="reactprate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">ReactJS</span>
                        </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="oopsCircle">
                                    <span className="progress_val" id="oopsrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">OOPs</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="mysqlCircle">
                                    <span className="progress_val" id="mysqlrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">My Sql</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="gitCircle">
                                    <span className="progress_val" id="gitrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Git & GitHub</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="CypressCircle">
                                    <span className="progress_val" id="Cypressrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Cypress</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="seleniumCircle">
                                    <span className="progress_val" id="seleniumrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Selenium</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="TestNGJ_UnitCircle">
                                    <span className="progress_val" id="TestNGJ_Unitrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">TestNG & J_Unit</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="ApiTestCircle">
                                    <span className="progress_val" id="ApiTestrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">API Testing</span>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" delay={10}>
                        <div className="skillContainer">
                            <Tilt>
                                <div className="circular_progress" id="LoadTestCircle">
                                    <span className="progress_val" id="LoadTestrate">0%</span>
                                </div>
                            </Tilt>
                            <span className="skill_set">Load Testing</span>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* subject part */}
            <ScrollAnimation animateIn="fadeInLeft" delay={10}>
            <div className="subject">
                <h2 className="hedsubject">Subjects :  </h2>
                <div className="subjects">
                    <p>Data Structures and Alogrithms</p>
                    <p>Computer Networks</p>
                    <p>Operating System</p>
                    <p>Database Management System</p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={10}>
            <div className="subject">
                <h2 className="hedsubject">Tools :  </h2>
                <div className="subjects">
                    <p>VS Code</p>
                    <p>Ms Word</p>
                    <p> Ms PowerPoint</p>
                    <p>ADS (aurora devolopment server)</p>
                    <p>Linux</p>
                    <p>Distributed Remort VM</p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" delay={10}>
            <div className="subject">
                <h2 className="hedsubject">Soft Skills  :  </h2>
                <div className="subjects">
                    <p>Time Management</p>
                    <p>Teamwork</p>
                    <p>Communication</p>
                    <p>Leadership</p>
                </div>
            </div>
            </ScrollAnimation>

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
