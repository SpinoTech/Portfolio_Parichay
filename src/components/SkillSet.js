import "./SkillSet.css";
import React from 'react'
// for parallax tilt effect
import Tilt from 'react-parallax-tilt';

export default function SkillSet() {

    //    for html css
    let progress_start_val = 0, progress_end_val = 70;
    let progress = setInterval(() => {
        progress_start_val++;
        if (progress_start_val > progress_end_val) {
            clearInterval(progress);
        }
        else {
            let circulat_progress = document.querySelector(".circular_progress"),
                Progress_val = document.querySelector(".progress_val");

            Progress_val.innerHTML = `${progress_start_val} %`;

            circulat_progress.style.background = `conic-gradient(red ${progress_start_val * 3.6}deg, transparent 0deg)`;
        }
    }, 50);

    // for c++
    let cpp_start = 0, cpp_end = 85;
    let cppprogress = setInterval(() => {
        cpp_start++;
        // console.log(cpp_start);
        if (cpp_start > cpp_end) {
            clearInterval(cppprogress);
        }
        else {
            let circulat_progress = document.querySelector("#cppCircle"),
                Progress_val = document.querySelector("#cpprate");

            Progress_val.innerHTML = `${cpp_start} %`;

            circulat_progress.style.background = `conic-gradient(red ${cpp_start * 3.6}deg, transparent 0deg)`;
        }
    }, 50);
    // for c language
    let c_start = 0, c_end = 80;
    let cprogress = setInterval(() => {
        c_start++;
        // console.log(cpp_start);
        if (c_start > c_end) {
            clearInterval(cprogress);
        }
        else {
            let circulat_progress = document.querySelector("#cCircle"),
                Progress_val = document.querySelector("#crate");

            Progress_val.innerHTML = `${c_start} %`;

            circulat_progress.style.background = `conic-gradient(red ${c_start * 3.6}deg, transparent 0deg)`;
        }
    }, 50);

    // for OOPs
    let oops_start = 0, oops_end = 90;
    let oopsprogress = setInterval(() => {
        oops_start++;
        // console.log(cpp_start);
        if (oops_start > oops_end) {
            clearInterval(oopsprogress);
        }
        else {
            let circulat_progress = document.querySelector("#oopsCircle"),
                Progress_val = document.querySelector("#oopsrate");

            Progress_val.innerHTML = `${oops_start} %`;

            circulat_progress.style.background = `conic-gradient(red ${oops_start * 3.6}deg, transparent 0deg)`;
        }
    }, 50);

    // for java script
    let js_start = 0, js_end = 50;
    let jsprogress = setInterval(() => {
        js_start++;
        // console.log(cpp_start);
        if (js_start > js_end) {
            clearInterval(jsprogress);
        }
        else {
            let circulat_progress = document.querySelector("#jsCircle"),
                Progress_val = document.querySelector("#jsprate");

            Progress_val.innerHTML = `${js_start} %`;

            circulat_progress.style.background = `conic-gradient(red ${js_start * 3.6}deg, transparent 0deg)`;
        }
    }, 50);

    // my sql part 
    let mysql_start = 0, mysql_end = 75;
    let mysqlprogress = setInterval(() => {
        mysql_start++;
        // console.log(cpp_start);
        if (mysql_start > mysql_end) {
            clearInterval(mysqlprogress);
        }
        else {
            let circulat_progress = document.querySelector("#mysqlCircle"),
                Progress_val = document.querySelector("#mysqlrate");

            Progress_val.innerHTML = `${mysql_start} %`;

            circulat_progress.style.background = `conic-gradient(red ${mysql_start * 3.6}deg, transparent 0deg)`;
        }
    }, 50);

    // git github part
    let git_start = 0, git_end = 70;
    let gitprogress = setInterval(() => {
        git_start++;
        // console.log(cpp_start);
        if (git_start > git_end) {
            clearInterval(gitprogress);
        }
        else {
            let circulat_progress = document.querySelector("#gitCircle"),
                Progress_val = document.querySelector("#gitrate");

            Progress_val.innerHTML = `${git_start} %`;

            circulat_progress.style.background = `conic-gradient(red ${git_start * 3.6}deg, transparent 0deg)`;
        }
    }, 50);

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
