import React, { useState } from "react";
import "./Homepage.css";

function ExecuteHomePage() {
    const [course, setCourse] = useState([]);
    const [units,setUnits]=useState([]);
    const [Subunits,SetSubunits]=useState([]);

    function Go() {
        console.log("start")
        fetch(`http://localhost:5000/course`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCourse(data)
                //course.append(data[i].course_Name);
            })
    }
    function Click() {
        console.log("start")
        fetch(`http://localhost:5000/units`)
            .then(response => response.json())
            .then(unitdata => {
                console.log(unitdata);
                console.log("Bhavana");
                setUnits(unitdata)
            })
    }
    function ClickMe() {
        console.log("start")
        fetch(`http://localhost:5000/Subunits`)
            .then(response => response.json())
            .then(subunitdata => {
                console.log(subunitdata)
                SetSubunits(subunitdata)
            })
    }
    //go()
    return (
        <div>
            <div className="main">
                <div className="nav">
                    <img src="/resources/jtdLogo.jpeg" alt="Logo min kalvium" className="logo" />
                    <div>
                        <img src="/resources/educateLogo.png" alt="livebook" className="livebook" onClick={() => Go()} />
                    </div>
                </div>
                <div className="divs">
                    <div className="top">
                        <div>
                            <h1 id="mainhead">Learn the ways of the future</h1>
                            <p id="mainpara">With Kalvium, learn computer science with a world-class curriculum designed with the best CXOs of the tech world.</p>
                        </div>
                        <div>
                            <img src="/resources/livebooksheroimgkalvium.svg" alt="image1" className="livebooeo" />
                        </div>
                    </div>
                    <div className="displaycontent">
                    <div className="mid">
                        <h2 className="courseinfo">
                            {
                                course.map(({ course_Name }) => <div>
                                    <h1 className='course' onClick={()=>Click()}>
                                        {course_Name}
                                    </h1>
                                </div>)
                            }
                        </h2>
                    </div>
                    <div>
                            {
                                units.map(({ unit_Name }) => <div>
                                    <h1 className='units' onClick={()=>Click()}>
                                        {unit_Name}
                                        <br></br>
                                    </h1>
                                </div>)
                            }
                    </div><br></br>
                    {/* <div className="unitInfo">
                            {
                                Subunits.map(({ subUnit_Name,subUnit_Content }) => <div>
                                    <h1 className='Subunits' onClick={()=>ClickMe()}>
                                        {subUnit_Name}
                                        {subUnit_Content}
                                        <p>bhavana</p>
                                    </h1>
                                </div>)
                            }
                    </div> */}
                    </div>
                    <div className="unitInfo">
                            {
                                Subunits.map(({ subUnit_Name,subUnit_Content }) => <div>
                                    <h1 className='Subunits' onClick={()=>ClickMe()}>
                                        {subUnit_Name}
                                        {subUnit_Content}
                                        <p>bhavana</p>
                                    </h1>
                                </div>)
                            }
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default ExecuteHomePage;
