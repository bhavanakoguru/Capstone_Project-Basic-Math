import React, { useState } from "react";
import "./Homepage.css";

function ExecuteHomePage() {
    const [course, setCourse] = useState([]);
    const [units, setUnits] = useState([]);
    const [Subunits, setSubunits] = useState([]);
    const [SubunitsInfo, SetSubunitsInfo] = useState([]);
    //const [open, setOpen] = useState(false);
    //const [isSelected, setIsSelected] = useState(-1);
    //const [active,setActive] = useState(false);

    // const toggleDropdown = () => {
    //     setActive(!active)
    // }

    // const handleClick = (i) => {
    //     setIsSelected(i)
    // }

    // const renderOptions = () => {
    //     if (!this.props.options) {
    //         return;
    //     }

    //     return this.props.options.map((option, i) => {
    //         return (
    //             <li
    //                 onClick={evt => this.handleClick(i)}
    //                 key={i}
    //                 className={"dropdown__list-item " + (i === this.state.selected ? 'dropdown__list-item--active' : '')}
    //             >
    //                 {option}
    //             </li>
    //         );
    //     });
    // }

    function Go() {
        fetch(`http://localhost:5000/course`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCourse(data)
                //course.append(data[i].course_Name);
            })
    }
    function Click() 
    {
        fetch(`http://localhost:5000/units`)
            .then(response => response.json())
            .then(unitdata => {
                setUnits(unitdata)
            })
    }
    function ClickMe() {
        console.log("start");
        fetch(`http://localhost:5000/Subunits`)
            .then(response => response.json())
            .then(subunitdata => {
                console.log(subunitdata)
                // SetSubunits(subunitdata)
            })
    }
    function ClickOnce(){
        console.log("start");
        fetch(`http://localhost:5000/Subunits`)
            .then(response => response.json())
            .then(subunitcontent => {
                console.log(subunitcontent)
                SetSubunitsInfo(subunitcontent)
            })
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
                            <p id="mainpara">With Kalvium, learn computer science with a world-class curriculum designed with the best CXOs of the tech world.</p>
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
                                units.map(({ unit_Name,Unit_Content }) =>
                                    <div className="combo">
                                        <div className='units'>
                                            <div className="rambus">
                                                <img src="/resources/rambusimg.png" alt="" className="a" />
                                            </div>
                                            <div className="text">
                                                <h2 className="c" onClick={() => ClickMe()}>
                                                    {unit_Name}
                                                    {/* <p>{Unit_Content}</p><br></br> */}
                                                    {/* <div className="unitInfo">
                                                        {
                                                            Subunits.map(({ subUnit_Name, subUnit_Content }) => <div>
                                                                <div className='Subunits' >
                                                                    <div className="circle"></div><p>{subUnit_Name}</p>
                                                                </div>
                                                                <p className="fontweight">{subUnit_Content}</p>
                                                            </div>)
                                                        }
                                                    </div> */}
                                                </h2>
                                            </div>
                                            <div className="dropdown">
                                                <img src="/resources/downarrow.png" alt="" className="b" />
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                        {/* <div className="unitInfo">
                            {
                                Subunits.map(({ subUnit_Name, subUnit_Content }) => <div>
                                    <h1 className='Subunits' >
                                        {subUnit_Name}
                                       
                                    </h1>
                                </div>)
                            }
                        </div> */}
                    </div>
                    <div className="unitInfo">
                            {
                                Subunits.map(({ subUnit_Name, subUnit_Content }) => <div>
                                    <div className='Subunits' >
                                        <div className="circle"></div><p>{subUnit_Name}</p>
                                    </div>
                                    {/* <p className="fontweight">{subUnit_Content}</p> */}
                                </div>)
                            }
                    </div>
                    <div className="subtopicInfo">
                            {
                                SubunitsInfo.map(({subUnit_Content }) => <div>
                                    <div className='SubunitsInfo' >
                                        <div className="circle"></div><p>{subUnit_Content}</p>
                                    </div>
                                    
                                </div>)
                            }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ExecuteHomePage;
