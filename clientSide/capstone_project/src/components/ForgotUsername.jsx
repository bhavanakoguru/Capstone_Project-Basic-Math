import React ,{useState} from "react";
import "./Forgotpassword.css"

function DisplayForgotusername({forgotusername, setForgotusername,forgotpassword, setForgotpassword})
{
    const [newusername,setNewusername]=useState("");
    const [confirmusername,setConfirmusername]=useState(""); 
    let results=JSON.parse(localStorage.getItem("studentdata")); 
    
    function clickMe()
		{
		if(newusername ==="" || confirmusername ==="" )
			{
				alert("please enter details correctly");
				return;
			}
			if(newusername === confirmusername)
			{
				let arr=[];
				for(let i=0;i<results.length;i++)
				{
                    	if(results[i].user !== newusername)
						{
							let obj=
							{
								...results[i],
								user:newusername
							}
							arr.push(obj);
						}
						else
						{
							alert("old and new username are same");
							return;
						}
				}
				localStorage.setItem("studentdata",JSON.stringify(arr));
				alert("username changed Successfully");
				setForgotusername(false);
				//setForgotpassword(false);
				return;
			}
			else
			{
				alert("usernames are not matched");
				return;
			}
		}
    return (
         <div className="top">
        <div className="maindiv">
            <div className="maininput">
                <h3 className="signuptext">Forgot Username</h3><br />
                <input type={"text"} value={newusername} className="inputwidth" placeholder="New Username" onChange={e => setNewusername(e.target.value)}></input><br /><br />
                <input type={"text"} value={confirmusername} className="inputwidth" placeholder="Confirm username" onChange={e => setConfirmusername(e.target.value)}></input><br /><br />
                <button className="inputwidth gomid" onClick={clickMe}>Submit</button><br />
            </div>
        </div>
                <p id="lasttext">© 2023 by Mathematics Privacy Policy & Terms and Conditions</p>
        </div>
    );
}
export default DisplayForgotusername;