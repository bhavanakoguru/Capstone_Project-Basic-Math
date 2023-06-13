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
                        <h3>Topic-1:<b>Real Numbers</b></h3>
                        <h3><u>Sub Topics:</u></h3>
                        <div className="subtopics">
                            <u>1.Real Numbers Important Definition</u><br></br><br></br>
                            <u>2.Euclid's Division Lemma</u><br></br><br></br>
                            <u>3.Proof of Euclid's Division Lemma</u><br></br><br></br>
                            <u>4.HCF (Highest common factor)</u><br></br><br></br>
                            <u>5.What is Prime Numbers</u><br></br><br></br>
                            <u>6.What is Composite Numbers</u><br></br><br></br>
                            <u>7.Fundamental Theorem of Arithmetic</u><br></br><br></br>
                            <u>8.HCF and LCM by prime factorization method</u><br></br><br></br>
                            <u>9.Irrational Numbers</u><br></br><br></br>
                            <u>10.How to prove the irrational numbers or Rational numbers</u><br></br>
                        </div>
                    </div>
                    <div>
                        <h2><u><b>Befoure attempting Exam check your Knowledge here:</b></u></h2>
                        <div className="pre-text">
                            <div className="firsttext">
                            </div>
                            <button className="btn">Pre</button>
                            <button className="btn">Next</button>
                        </div>
                    </div>
                    <div>
                        <video className="vediotag" controls>
                            <source src={"mathsignuplogo.mp4"} type="video/mp4"></source>
                        </video>
                    </div>
                    <div>
                        <h2><u>Attempt the exam Now:</u></h2>
                        <div className="post-text">
                            <div className="firsttext">
                            </div>
                            <button className="btn">Pre</button>
                            <button className="btn">Next</button>
                        <div>
                    </div>
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