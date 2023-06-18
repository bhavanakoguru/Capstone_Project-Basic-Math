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
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/RealNumbers.jpeg" alt="realnumbers" className="image"/>
                </div>
                <div className="subimagedata">
                    <h1>REAL NUMBERS:</h1>
                    <p>Real numbers encompass all the numbers we commonly use, including whole numbers, fractions, decimals, and irrational numbers like square roots and pi. They can be positive, negative, or zero, and are represented on a number line that extends infinitely in both directions. Real numbers are fundamental in mathematics and have applications in various fields.</p>
                    <button className="certifybtn"><a href="https://docs.google.com/document/d/18d15DKJ_9amUmN41474PhzWTMvV4HV5gzjYypyP7Ww4/edit?usp=sharing">Let start Learning</a></button>
                </div>
            </div><br></br>
            <div className="unit">
                <div className="subimagedata">
                    <h1>SETS:</h1>
                    <p>Sets are collections of distinct objects or elements in mathematics, represented by symbols like braces or capital letters. In fitness, sets refer to predetermined repetitions of exercises. In entertainment, sets are constructed environments used in visual mediums to depict various locations and enhance storytelling.</p>
                    <button className="certifybtn"><a href="https://docs.google.com/document/d/1Ebp1udkKnw6tSYdM-EjWH8FJu4t4A4Ql9xX4ABgifOU/edit?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                    <img src="/resources/Sets.png" alt="sets" className="image"/>
                </div>
            </div><br></br>
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/Polynamials.jpg" alt="polinamials" className="image"/>
                </div> 
                <div className="subimagedata">
                    <h1>POLINAMIALS:</h1>
                    <p>Polynomials are algebraic expressions with variables, coefficients, and exponents that are combined using addition, subtraction, and multiplication operations. They are fundamental in algebra and used to model a variety of mathematical phenomena.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1rVguQBAPptJxfdWBIZ242ftiW6oPZsqK/view?usp=sharing">Let start Learning</a></button>
                </div>
            </div>
            <div className="unit">
                <div className="subimagedata">
                    <h1>PAIR OF LINEAR EQUATIONS:</h1>
                    <p>A pair of linear equations consists of two equations where each equation is linear.
The goal is to find the values of the variables (usually x and y) that satisfy both equations simultaneously.<br></br>
Solving methods include substitution, elimination, or matrix techniques.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1cMnsJYNyc_DUZX4WT58YpRbxWv4lFQqK/view?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                    <img src="/resources/LinearEquations.jpg" alt="linearEquations" className="image"/>
                </div>
            </div>
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/QuadraticEquations.jpeg" alt="quadratic Equations" className="image"/>
                </div>
                <div className="subimagedata">
                    <h1>QUADRATIC EQUATIONS</h1>
                    <p>A quadratic equation is a second-degree polynomial equation. It is expressed as ax^2 + bx + c = 0, where a, b, and c are constants, and a ≠ 0. The solutions can be found using methods like factoring, completing the square, or the quadratic formula.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1sPqpn1MobaEXKMb_1dX0d4DswjBHMZz2/view?usp=sharing">Let start Learning</a></button>
                </div>
            </div>
            <div className="unit">
                <div className="subimagedata">
                    <h1>PROGRESSIONS</h1>
                    <p>Progressions are ordered lists of numbers following specific patterns: AP adds a constant difference, GP multiplies by a common ratio, and HP uses reciprocals of an AP. They have applications in math, series calculations, patterns, and modeling.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1sPqpn1MobaEXKMb_1dX0d4DswjBHMZz2/view?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                    <img src="/resources/Progression.avif" alt="progression" className="image"/>
                </div>
                
            </div>
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/QuadraticEquations.jpeg" alt="co-ordinateGeometry" className="image"/>
                </div>
                <div className="subimagedata">
                    <h1>COORDINATE GEOMETRY</h1>
                    <p>Coordinate geometry combines algebra and geometry, using a coordinate system to represent points in a plane or space. It involves analyzing shapes, distances, slopes, and equations of lines using numerical coordinates.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1clo_fMwWBjjErzZmPYSAc_6ey7BfJ_o1/view?usp=sharing">Let start Learning</a></button>
                </div>
            </div>
            <div className="unit">
                <div className="subimagedata">
                    <h1>SIMILAR TRIANGLES</h1>
                    <p>Similar triangles have equal corresponding angles and proportional side lengths. They share the same shape but may differ in size. This property allows for solving unknown side lengths and finding missing angles using proportionality.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/152TEFNeoxGTrXky9FLrE1nGkab1h9_Kk/view?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                     <img src="/resources/SimilarTriangles.jpeg" alt="similarTriangle" className="image"/>
                </div>
            </div>
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/TS.webp" alt="tanSec" className="image"/>
                </div>
                <div className="subimagedata">
                    <h1>TANGENT AND SECENT TO A CIRCLE</h1>
                    <p>In circle geometry, a tangent is a line that touches the circle at a single point, perpendicular to the radius.
A secant is a line that intersects the circle at two distinct points, extending beyond the circle.<br></br>
Tangents help determine angles and theorems, while secants have applications in solving geometric problems involving circles.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1SnLWkmHtbxdatD7wHljajYnkVOTFL2x_/view?usp=sharing">Let start Learning</a></button>
                </div>
            </div>
            <div className="unit">
                <div className="subimagedata">
                    <h1>MENSURATION</h1>
                    <p>Mensuration involves measuring geometric figures and their properties.
It includes calculations of area, perimeter, volume, and surface area.
Applied in fields like engineering, architecture, physics, and daily life for practical measurements and calculations.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1s_bXr6JmSo16ibLZN3jGZNvdjraR_oTh/view?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                    <img src="/resources/Mensuration.jpg" alt="mensuration" className="image"/>
                </div>
            </div>
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/Trigonometry.webp" alt="trigonometry" className="image"/>
                </div>
                <div className="subimagedata">
                    <h1>TRIGONOMETRY</h1>
                    <p>Trigonometry studies angles and sides of triangles.<br></br>
It involves trigonometric functions like sine, cosine, and tangent.
Applied in physics, engineering, navigation, and other fields for wave analysis and triangle-related problem solving.</p>
                       <button className="certifybtn"><a  href="https://drive.google.com/file/d/1BzjDFDXQTxzrs2Bzc4EotTFK2j757ia-/view?usp=sharing">Let start Learning</a></button>
                </div>
            </div>
            <div className="unit">
                <div className="subimagedata">
                    <h1>APPLICATIONS OF TRIGONOMETRY</h1>
                    <p>Trigonometry finds applications in engineering, physics, and navigation for analyzing forces, wave phenomena, and determining positions.<br></br>
It is used in computer graphics, surveying, and music to create realistic models, map land, and analyze sound waves.<br></br>
Trigonometry plays a vital role in various fields, aiding in problem-solving related to angles, distances, and wave behavior.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1TpyqkDUSbNqMeQvfm64BMR0xLTpuMkeQ/view?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                <img src="/resources/ApplicationOfTrigonometry.jpeg" alt="applicationOfTriangle" className="image"/>
                </div>
            </div>
            <div className="unit">
                <div className="subimg">
                    <img src="/resources/Probability.jpg" alt="probability" className="image"/>
                </div>
                <div className="subimagedata">
                    <h1>PROBABILITY</h1>
                    <p>Probability is the mathematical study of uncertainty and the likelihood of events.
It involves assigning numerical values to represent the chance of specific outcomes.
It is widely applied in fields such as statistics, finance, science, and gambling.
Probability helps make informed decisions, assess risks, and understand the likelihood of different outcomes.</p>
                    <button className="certifybtn"><a  href="https://drive.google.com/file/d/1f9rKRcVJ05g76InIfigzTpZR6SgSd8X7/view?usp=sharing">Let start Learning</a></button>
                </div>
            </div>
            <div className="unit">
                <div className="subimagedata">
                    <h1>STATISTICS</h1>
                    <p>Statistics involves collecting, analyzing, interpreting, and presenting data.
It provides tools for summarizing information and making inferences.<br></br>
Used in research, business, healthcare, and social sciences to study patterns and make data-driven decisions.
Statistics helps understand relationships, trends, and make predictions based on data analysis.</p>
                    <button className="certifybtn"><a href="https://drive.google.com/file/d/1Lh9NCF_60RXJJsDt_fBUh4Kpa4wCztFG/view?usp=sharing">Let start Learning</a></button>
                </div>
                <div className="subimg">
                    <img src="/resources/Statistics.jpeg" alt="statistics" className="image"/>
                </div>
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