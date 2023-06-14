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
                    <h3><a href="https://docs.google.com/document/d/1Ebp1udkKnw6tSYdM-EjWH8FJu4t4A4Ql9xX4ABgifOU/edit?usp=sharing">Sets</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Polynamials.jpg" alt="polinamials" className="image"/><hr></hr>
                    {/* <h3><a href="file:///home/jtbb/Downloads/polynomial-for-class-10.pdf">Polynomials</a></h3> */}
                    <h3><a href="https://drive.google.com/file/d/1rVguQBAPptJxfdWBIZ242ftiW6oPZsqK/view?usp=sharing">Polynomial</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/LinearEquations.jpg" alt="linearEquations" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1cMnsJYNyc_DUZX4WT58YpRbxWv4lFQqK/view?usp=sharing">Pair of Linear Equations</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/QuadraticEquations.jpeg" alt="quadratic Equations" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1sPqpn1MobaEXKMb_1dX0d4DswjBHMZz2/view?usp=sharing">Quadratic Equations</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Progression.avif" alt="progression" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1j5cOs5z1AqpWk_5y6LX9cNLWeaMGo1Q6/view?usp=sharing">Progressions</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/QuadraticEquations.jpeg" alt="co-ordinateGeometry" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1clo_fMwWBjjErzZmPYSAc_6ey7BfJ_o1/view?usp=sharing">Coordinate Geometry</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/SimilarTriangles.jpeg" alt="similarTriangle" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/152TEFNeoxGTrXky9FLrE1nGkab1h9_Kk/view?usp=sharing">Similar Triangles</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/TS.webp" alt="tanSec" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1SnLWkmHtbxdatD7wHljajYnkVOTFL2x_/view?usp=sharing">Tangents and Secants to a Circle</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Mensuration.jpg" alt="mensuration" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1s_bXr6JmSo16ibLZN3jGZNvdjraR_oTh/view?usp=sharing">Mensuration</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Trigonometry.webp" alt="trigonometry" className="image"/><hr></hr>
                    <h3><a  href="https://drive.google.com/file/d/1BzjDFDXQTxzrs2Bzc4EotTFK2j757ia-/view?usp=sharing">Trigonometry</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/ApplicationOfTrigonometry.jpeg" alt="applicationOfTriangle" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1TpyqkDUSbNqMeQvfm64BMR0xLTpuMkeQ/view?usp=sharing">Applications of Trigonometry</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Probability.jpg" alt="probability" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1f9rKRcVJ05g76InIfigzTpZR6SgSd8X7/view?usp=sharing">Probability</a></h3>
                </div>
                <div className="subimg">
                    <img src="/resources/Statistics.jpeg" alt="statistics" className="image"/><hr></hr>
                    <h3><a href="https://drive.google.com/file/d/1Lh9NCF_60RXJJsDt_fBUh4Kpa4wCztFG/view?usp=sharing">Statistics</a></h3>
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