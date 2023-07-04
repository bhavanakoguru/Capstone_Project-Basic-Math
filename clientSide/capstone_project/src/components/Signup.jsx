import React,{useState} from "react";
import "./Signup.css"
function DisplaySignup({islogin,setIslogin})
{
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    function btnClick()
    {
        let results=JSON.parse(localStorage.getItem("studentdata")) || [];
        if(name !=="" && user !=="" && email !=="" && password !=="" && number !=="")
        {
            localStorage.setItem("studentdata",JSON.stringify([...results,{name,user,email,password,number}]));
            setIslogin(true);
        }else
        {
            alert("Please fill the details correctly");
        }
    }
    const handleSigninClick = () =>{
        setIslogin(true);
    }
    return (
    <div className="top">
        <div className="inputbox">
        <div id="maininput">
            <h3 className="signuptext">Sign up</h3>
            <input type={"text"} value={name} className="inputwidth" placeholder="Name" onChange={e => setName(e.target.value)} /><br /><br />
            <input type={"text"} value={user} className="inputwidth" placeholder="User Name" onChange={e => setUser(e.target.value)} /><br /><br />
            <input type={"email"} value={email} className="inputwidth" placeholder="Email Address" onChange={e => setEmail(e.target.value)} /><br /><br />
            <input type={"password"} value={password} className="inputwidth" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
            <input type={"number"} value={number} className="inputwidth" placeholder="Mobile Number" onChange={e => setNumber(e.target.value)} /><br /><br />
            <button className="submit" onClick={btnClick} >Submit</button><br />
            <p className="Accounthave">If already have an account?<span onClick={handleSigninClick}><b className="boldsignin">Signin</b></span></p><br />
        </div>
        </div>
            <p className="lastcontent">© 2023 by Mathematics Privacy Policy & Terms and Conditions</p>
    </div>
    );
}
export default DisplaySignup;