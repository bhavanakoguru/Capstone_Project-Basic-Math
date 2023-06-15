import React,{useState} from "react";
import "./Signin.css"
function DisplaySignin({setHomepage,islogin,setIslogin,setForgotpassword,setForgotusername})
{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState(""); 
    let results=JSON.parse(localStorage.getItem("studentdata"));
    function clickMe()
    {	
       if(username==="" && password==="")
        {
            alert("Please fill the details");
            return;
        }
        for(let i=0;i<results.length;i++)
        {
            if(results[i].user===username || results[i].password===password)
            {
                alert("Signin Successfull");
                //setIslogin(false);
                setHomepage(true);
                localStorage.setItem("studentsignindata",JSON.stringify(results[i]));
                return;
            }

        }
        alert("Signin failed");       
    }
    const handleSignupClick = () => {
        setIslogin(false);
    }

    const handleForgotClick = () => {
        setForgotpassword(true);
    }
    const handleForgotUserClick=() =>
    {
        setForgotusername(true);
    }
    return (
        <div className="top">
            <div className="inputbox">
                <div id="maininput">
                <h3 className="signuptext">Sign in</h3>
                <input type={"text"} className="inputwidth user" placeholder="User Name" onChange={e => setUsername(e.target.value)}></input><br /><br />
                <input type={"password"} className="inputwidth password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input><br /><br />
                <span onClick={handleForgotClick} className="forgotpassword">forgot Password</span><br></br><br></br>
                <button className="submit" onClick={clickMe}>Submit</button><br />
                <p className="Accounthave">if don't have an Account?<span onClick={handleSignupClick}><b className="boldsignin">Sign up</b></span></p>
                {/* <span onClick={handleForgotClick}>forgot Password</span> */}
                <span onClick={handleForgotUserClick}></span>
                </div>
            </div>
            <p className="lastcontent">© 2023 by Mathematics Privacy Policy & Terms and Conditions</p>
        </div>
    );
}
export default DisplaySignin;


/*            <input type={"text"} className="inputwidth user" placeholder="User Name" onChange={e => setUsername(e.target.value)}></input><br /><br />
            <input type={"password"} className="inputwidth password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input><br /><br />
            <button className="inputwidth gomid" onClick={clickMe}>Submit</button><br />
            <p>if don't have an Account?<span onClick={handleSignupClick}><u>Signup</u></span></p>
             <p>*<span onClick={handleForgotClick}>ForgotPassword</span></p>
             <p>*<span onClick={handleForgotUserClick}>ForgotUserName</span></p>   */