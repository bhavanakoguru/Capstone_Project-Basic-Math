import React from "react";
import "./Signin.css"
import { useState } from "react";
function DisplaySignin()
{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState(""); 
    
    function clickMe()
    {
        let res=JSON.parse(localStorage.getItem("studentsignindata")) || [];
       // let results=JSON.parse(localStorage.getItem("studentdata"));
        if(username!=="" && password!=="")
        {
            localStorage.setItem("studentsignindata",JSON.stringify([...res,{username,password}])); 
            // for(let i=0;i<results.length;i++)
            // {
            //     if(results[i].username===username || results[i].password===password)
            //     {
            //         alert("Signin Successfull");
            //     }
            //     else
            //     {
            //         alert("Signin failed");
            //     }
            // }
            
        }
        else
        {
            alert("Please fill the details");
        }
    }
    
    return <div className="top">
    <div className="maindiv">
        <div className="maininput">
            <h3 className="signuptext">Signin page</h3><br />
             <input type={"text"} className="inputwidth user" placeholder="User Name" onChange={e => setUsername(e.target.value)}></input><br /><br />
            <input type={"password"} className="inputwidth password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input><br /><br />
            <button className="inputwidth gomid" onClick={clickMe}>Submit</button><br />
            <p>if don't have an Account?<a href="Signin.js">Signup</a></p><br />
        </div>
    </div>
            <p id="lasttext">© 2023 by Mathematics Privacy Policy & Terms and Conditions</p>
    </div>
    
}
export default DisplaySignin