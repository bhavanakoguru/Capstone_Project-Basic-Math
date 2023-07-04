import React from "react";
import "./Classes.css"
function DisplayClasses()
{
    return(
    <div className="mainclass">
        {/* ........NAVBAR.......... */}
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
        {/* ............CLASSES............. */}
        <div className="mainpage">
            <div className="leftsidepart">
                <div className="unitbox"><h3>Real Numbers</h3></div>
                <div className="unitbox"><h3>Sets</h3></div>
                <div className="unitbox"><h3>Polynomials</h3></div>
                <div className="unitbox"><h3>Pair of Linear Equations</h3></div>
                <div className="unitbox"><h3>Quadratic Equations</h3></div>
                <div className="unitbox"><h3>Progressions</h3></div>
                <div className="unitbox"><h3>Coordinate Geometry</h3></div>
                <div className="unitbox"><h3>Similar Triangles</h3></div>
                <div className="unitbox"><h3>Tangents and Secants to a Circle</h3></div>
                <div className="unitbox"><h3>Mensuration</h3></div>
                <div className="unitbox"><h3>Trigonometry</h3></div>
                <div className="unitbox"><h3>Applications of Trigonometry</h3></div>
                <div className="unitbox"><h3>Probability</h3></div>
                <div className="unitbox"><h3>Statistics</h3></div>
            </div>
            <div className="rightsidepart">
                    <div className="topics">
                        <h3 className="heads" >Topic-1:<b><a href="https://docs.google.com/document/d/18d15DKJ_9amUmN41474PhzWTMvV4HV5gzjYypyP7Ww4/edit?usp=sharing">Real Numbers</a></b></h3>
                        <h3 className="heads"><u>Sub Topics:</u></h3>
                        <div className="subtopics">
                            <a href="link">1.Real Numbers Important Definition</a><br></br><br></br>
                            <a href="link">2.Euclid's Division Lemma</a><br></br><br></br>
                            <a href="link">3.Proof of Euclid's Division Lemma</a><br></br><br></br>
                            <a href="link">4.HCF (Highest common factor)</a><br></br><br></br>
                            <a href="link">5.What is Prime Numbers</a><br></br><br></br>
                            <a href="link">6.What is Composite Numbers</a><br></br><br></br>
                            <a href="link">7.Fundamental Theorem of Arithmetic</a><br></br><br></br>
                            <a href="link">8.HCF and LCM by prime factorization method</a><br></br><br></br>
                            <a href="link">9.Irrational Numbers</a><br></br><br></br>
                            <a href="link">10.How to prove the irrational numbers or Rational numbers</a><br></br>
                        </div>
                    </div>
                    <div>
                        <h2 className="heads"><u><b>Befoure attending class check your Knowledge here:</b></u></h2>
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
                    </div>
                    <div>
                        <video className="vediotag" controls>
                            <source src={"mathsignuplogo.mp4"} type="video/mp4"></source>
                        </video>
                    </div>
                    <div>
                        <h2 className="heads"><u><b>Attempt the exam now:</b></u></h2>
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
                    </div>
                    {/* <iframe src="index.html" height="950px" width="80%" title="Iframe Example" allowFullScreen></iframe> */}
            </div>
        </div>
        {/* .........FOOTER........... */}
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
export default DisplayClasses;