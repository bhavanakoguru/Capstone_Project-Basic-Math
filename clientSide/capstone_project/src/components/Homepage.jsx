//import React,{useState} from "react";
import React from "react";
import "./Homepage.css"

function Displayhome()
{
    return (
        <div className="App">
            <nav className="navbar">
                <img src={"/resources/educateLogo.png"} alt="logo" className="logo"/>
                <div class="divtag">
                    <h1>View Meterial</h1>
                    <h1>Classes</h1>
                    <h1>Exams </h1>
                    <h1>Signup</h1>
                </div>
            </nav>
            <div className="homeimage">
            </div>
            <div className="secondpartinthehomepage">
                <h1 >Be patient with yourself, embrace challenges as opportunities for growth, and enjoy the journey of acquiring new knowledge and skills.</h1>
                <p className="paratext">When you love learning,<br /> you will naturally find joy in every step of the process.</p>
            </div>
            <div className="middletopbox">
                <div className="topicsinfo">
                    <img src="/resources/meterialimage.png" alt="meterial" className="program program2"/>
                    <h3>Conceptual Understanding</h3>
                    <p>Here present information in a structured manner, guiding learners through the logical progression of topics.</p>
                
                </div>
                <div className="topicsinfo">
                    <img src="/resources/classesimage.jpg" alt="classes" className="program1 program program2"/>
                    <h3>Accessible Learning</h3>
                    <p>Teaching methods can enhance understanding by presenting mathematical concepts from different angles and providing visual representations that aid comprehension.</p>
                </div>
                <div className="topicsinfo">
                    <img src="/resources/examimage.webp" alt="exams" className="program"/>
                    <h3>Your Strengths&Weaknesses</h3>
                    <p>Maths exams help identify individual strengths and weaknesses in mathematical abilities.</p>
                </div>
            </div>
            <div>
                <h1 id="demo">Demo vedio</h1>
                <video className="vediotag" controls>
                    <source src={"mathsignuplogo.mp4"} type="video/mp4"></source>
                </video>
            </div>
            <div className="middlebox">
                <div className="sidebox1">
                    <p className="paratext1">You Can Learn <br></br>Anything</p>
                    <p>LEARNERS AND STUDENTS</p>
                    <p>Math is best learned through practice. Solve a variety of problems to reinforce your understanding and improve problem-solving skills. Start with easier problems and gradually work your way up to more challenging ones</p>
                    <button id="btn">Start Learning</button>
                </div>
                <div>
                    <img src="/resources/mathsimage1.png" alt="mathsimage" className="middledivimg"/>
                </div>
            </div>

         
            <footer>
                <div className="firstbox">
                        <h4 className="headinfooter">View Meterial</h4>
                        <h4 className="headinfooter">classes</h4>
                        <h4 className="headinfooter">Practice papers</h4>
                </div>
                <hr/>
                <div>
                        <h3>"Learn with joy" emphasizes the idea that learning should be a positive and enjoyable experience. When we approach learning with a sense of joy and enthusiasm, it can enhance our motivation, engagement, and retention of knowledge.</h3>
                        <p className="paratext2">When you love learning,<br /> you will naturally find joy in every step of the process.</p>
                </div>
                <hr/>
                <div className="firstbox1">
                    <div className="contactinfo">
                        <h3>Contact Us</h3>
                        <h3>9736586178</h3>
                        <h3>8688955968</h3>
                    </div>
                    <div className="socialicons">
                        <img src="/resources/facebooklogo.png" alt="facebook"  className="logo1"/>
                        <img src="/resources/instalogo.png" alt="insta" className="logo1"/>
                        <img src="/resources/what'sapplogo.png" alt="whatsapp" className="logo1"/>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Displayhome;