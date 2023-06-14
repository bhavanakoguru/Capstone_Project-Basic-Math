import React from "react";
import "./Exam.css";
function DisplayExam()
{
    return(
    <div className="mainpage">
        {/* ..............NavBar.............. */}
        <nav className="navbar">
                <img src={"/resources/educateLogo.png"} alt="logo" className="logo"/>
                <div class="divtag">
                    <h1>View Meterial</h1>
                    <h1>Classes</h1>
                    <h1>Exams </h1>
                    <h1>Signup</h1>
                </div>
        </nav>
        <br></br><br></br><br></br><br></br><br></br>
       {/* .............ExamPage............ */}
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6nclWxZHvFqkleMggz9m6wsVQCGErdEiCg&usqp=CAU" className="examimage" alt="Examimage" />
        <div className="instructions">
            <h1><u>INSTRUCTIONS</u></h1>
            <p>1.You must use a functioning webcam and microphone.</p>
            <p>2.No cell phones or other secondary devices in the room or test area.</p>
            <p>3.Your desk/table must be clear or any materials except your test-taking device.</p>
            <p>4.No one else can be in the room with you.</p>
            <p>5.No talking.</p>
        </div>
        <div className="pre-text">
                            <div className="firsttext">
                            </div>
                            <button className="btn">Pre</button>
                            <button className="btn1">Next</button>
                            <div className="flex">
                                <div className="quotionlist">
                                    <button className="box1">1</button>
                                    <button className="box1">2</button>
                                    <button className="box1">3</button>
                                    <button className="box1">4</button>
                                    <button className="box1">5</button>
                                    <button className="box1">6</button>
                                    <button className="box1">7</button>
                                    <button className="box1">8</button>
                                    <button className="box1">9</button>
                                    <button className="box1">10</button>
                                    <button className="box1">11</button>
                                    <button className="box1">12</button>
                                    <button className="box1">13</button>
                                    <button className="box1">14</button>
                                    <button className="box1">15</button>
                                    <button className="box1">16</button>
                                    <button className="box1">17</button>
                                    <button className="box1">18</button>
                                    <button className="box1">19</button>
                                    <button className="box1">20</button>
                                </div>
                                <div className="infocolor">
                                    <div className="checkboxes">
                                        <div className="check"></div>
                                        <p>pending</p>
                                    </div><br></br>
                                    <div className="checkboxes">
                                        <div className="check1"></div>
                                        <p>Submitted</p>
                                    </div>
                                </div>
                            </div>
                            <button className="submit">Submit</button>
        </div>
        {/* ............Footer.........*/}
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
    );
}
 export default DisplayExam;