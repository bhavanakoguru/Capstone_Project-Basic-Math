//import React,{useState} from "react";
import React from "react";
import "./Homepage.css"

function Displayhome()
{
    return (
        <div className="App">
            <nav className="navbar">
                <img src="educateLogo.png" alt="logo" className="logo"/>
                <div class="divtag">
                    <h1>View Meterial</h1>
                    <h1>repositories</h1>
                    <h1>Topics</h1>
                    <h1>Signup</h1>
                </div>
            </nav>
            <div className="homeimage">
            </div>
            <div className="secondpartinthehomepage">
                <h1 >Choose your own path</h1>
                <p className="paratext">When you love learning,<br /> you will naturally find joy in every step of the process.</p>
           
            </div>
            <footer>
                <div className="firstbox">
                        <h4 className="headinfooter">View Meterial</h4>
                        <h4 className="headinfooter">classes</h4>
                        <h4 className="headinfooter">Practice papers</h4>
                </div>
                <hr/>
                <div>
                        <h2>"Learn with joy" emphasizes the idea that learning should be a positive and enjoyable experience. When we approach learning with a sense of joy and enthusiasm, it can enhance our motivation, engagement, and retention of knowledge.</h2>
                </div>
                <hr/>
                <div className="firstbox">
                        <h4 className="headinfooter">what's app</h4>
                        <h4 className="headinfooter">insta</h4>
                        <h4 className="headinfooter">facebook</h4>
                </div>
            </footer>
        </div>
    )
}
export default Displayhome;