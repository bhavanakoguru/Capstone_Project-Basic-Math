import React,{useState} from "react";
import "./Forgotpassword.css"
import Displayhome from "./Homepage";

function DisplayForgot({setIsforgotpassword})
{
    const [newpassword,setNewpassword]=useState("");
    const [confirmpassword,setConfirmpassword]=useState(""); 
    let results=JSON.parse(localStorage.getItem("studentdata")); 
     
	function clickMe()
		{
			if(newpassword ==="" || confirmpassword ==="" )
			{
				alert("please enter details correctly");
				return;
			}
			
			console.log(confirmpassword,newpassword);
			if(newpassword === confirmpassword)
			{
				let arr=[];
				for(let i=0;i<results.length;i++)
				{
						if(results[i].password !== newpassword)
						{
							let obj=
							{
								...results[i],
								password:newpassword
							}
							arr.push(obj);
						}
						else
						{
							alert("old and new password are same");
							return;
						}
				}
				localStorage.setItem("studentdata",JSON.stringify(arr));
				alert("password changed Successfully");
				return;
			}
			else
			{
				alert("Passwords are not matched");
				return;
			}
		}
    return (
         <div className="top">
        <div className="maindiv">
            <div className="maininput">
                <h3 className="signuptext">Forgot password</h3><br />
                <input type={"password"} value={newpassword} className="inputwidth" placeholder="New Password" onChange={e => setNewpassword(e.target.value)}></input><br /><br />
                <input type={"password"} value={confirmpassword} className="inputwidth" placeholder="Confirm Password" onChange={e => setConfirmpassword(e.target.value)}></input><br /><br />
                <button className="inputwidth gomid" onClick={clickMe}>Submit</button><br />
            </div>
        </div>
                <p id="lasttext">© 2023 by Mathematics Privacy Policy & Terms and Conditions</p>
        </div>
    );
}
export default DisplayForgot;