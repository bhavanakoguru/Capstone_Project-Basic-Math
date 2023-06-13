import React from "react";
import "./ViewMeterial.css";
function DisplayViewpage()
{
    return(
    <div className="mainclass">
        {/* .......NAVBAR........ */}
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
        {/* .........VIEWMATERIAL......... */}
        <div className="imagedata">
                <div className="subimg">
                    <img src="/resources/RealNumbers.jpeg" alt="realnumbers" className="image"/><hr></hr>
                    <h3><a href="https://docs.google.com/document/d/18d15DKJ_9amUmN41474PhzWTMvV4HV5gzjYypyP7Ww4/edit?usp=sharing">Real Numbers</a></h3>
                    {/* <h3>Real Numbers</h3> */}
                </div>
                <div className="subimg">
                    <img src="/resources/Sets.png" alt="sets" className="image"/><hr></hr>
                    <h3>Sets</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Polynamials.jpg" alt="polinamials" className="image"/><hr></hr>
                    <h3>Polynomials</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/LinearEquations.jpg" alt="linearEquations" className="image"/><hr></hr>
                    <h3>Pair of Linear Equations</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/QuadraticEquations.jpeg" alt="quadratic Equations" className="image"/><hr></hr>
                    <h3>Quadratic Equations</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Progression.avif" alt="progression" className="image"/><hr></hr>
                    <h3>Progressions</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/QuadraticEquations.jpeg" alt="co-ordinateGeometry" className="image"/><hr></hr>
                    <h3>Coordinate Geometry</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/SimilarTriangles.jpeg" alt="similarTriangle" className="image"/><hr></hr>
                    <h3>Similar Triangles</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/TS.webp" alt="tanSec" className="image"/><hr></hr>
                    <h3>Tangents and Secants to a Circle</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Mensuration.jpg" alt="mensuration" className="image"/><hr></hr>
                    <h3>Mensuration</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Trigonometry.webp" alt="trigonometry" className="image"/><hr></hr>
                    <h3>Trigonometry</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/ApplicationOfTrigonometry.jpeg" alt="applicationOfTriangle" className="image"/><hr></hr>
                    <h3>Applications of Trigonometry</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Probability.jpg" alt="probability" className="image"/><hr></hr>
                    <h3>Probability</h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Statistics.jpeg" alt="statistics" className="image"/><hr></hr>
                    <h3>Statistics</h3>
                </div>
            </div>
            {/* ..........FOOTER ..........*/}
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
export default DisplayViewpage;