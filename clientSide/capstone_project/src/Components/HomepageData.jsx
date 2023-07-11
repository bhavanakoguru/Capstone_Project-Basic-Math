import React, { useState } from "react";
import "./HomepageData.css";

function ExecuteHomePage() {
    const [course, setCourse] = useState([]);
    const [units, setUnits] = useState([]);
    const [Subunits, setSubunits] = useState([]);
    const [subTopicInfo,setSubTopicInfo]=useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [clickOnSubunitsInfo, SetClickOnSubunitsInfo] = useState([]);

    function Go() {
        fetch(`http://localhost:5050/course`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCourse(data)
            })
    }
    function Click() 
    {
        fetch(`http://localhost:5050/units`)
            .then(response => response.json())
            .then(unitdata => {
                setUnits(unitdata)
            })
    }
    function ClickMe() {
        setIsClicked(!isClicked);
        if(isClicked){
            fetch(`http://localhost:5050/Subunits`)
                .then(response => response.json())
                .then(subunitdata => {
                    console.log(subunitdata)
                    setSubunits(subunitdata)
                })
        }
    }
    function ClickOnce(){
        console.log("start");
        SetClickOnSubunitsInfo(!clickOnSubunitsInfo);
        if(clickOnSubunitsInfo){
        fetch(`http://localhost:5050/Subunits`)
            .then(response => response.json())
            .then(subunitcontent => {
                // console.log(subunitcontent)
                setSubTopicInfo(subunitcontent)
            })

        }
    }
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
                            <p id="mainpara">Improve your <span className="maths">Mathematical learningskills</span> here is the ways to enrich your Mathematical life</p>
                        </div>
                        <div>
                            <img src="/resources/livebooksheroimgkalvium.svg" alt="image1" className="Livebookhero" />
                        </div>
                    </div>
                    <div className="displaycontent">
                        <div className="mid">
                            <h2 className="courseinfo">
                                {
                                    course.map(({ course_Name }) => <div>
                                        <h1 className='course' onClick={() => Click()}>
                                            {course_Name}
                                        </h1>
                                    </div>)
                                }
                            </h2>
                        </div>
                        <div className="unitsborder">
                            {
                                units.map(({ unit_Name}) =>
                                <div>
                                    <div className='units' onClick={() => ClickMe()}>
                                        <div className="rambus">
                                            <img src="/resources/rambusimg.png" alt="" className="a" />
                                        </div>
                                        <div className="text">
                                            <div className="c" >
                                                {unit_Name}
                                                {
                                                isClicked ? 
                                                    <div>
                                                        {
                                                            Subunits.map(({ subUnit_Name,subUnit_Content}) => <div>
                                                                <div className='subunits' >
                                                                    <div className="circle" onClick={ClickOnce}></div>
                                                                    <p>
                                                                        {subUnit_Name}
                                                                    </p>
                                                                </div>
                                                                <p className="content">{subUnit_Content}  </p> 
                                                                
                                                            </div>)
                                                        }
                                                    </div> : ""
                                                }
                                            </div>

                                        </div>
                                        <div className="dropdown">
                                            <img src="/resources/downarrow.png" alt="" className="b" />
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExecuteHomePage;


