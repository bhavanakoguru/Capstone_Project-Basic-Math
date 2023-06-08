import React, { useState } from 'react';
import './App.css';
import DisplaySignup from './components/Signup';
import DisplaySignin from './components/Signin';
import DisplayForgot from './components/Forgotpassword';
import DisplayForgotUser from './components/ForgotUsername';
import Displayhome from './components/Homepage';

function App() {
  const [islogin, setIslogin] = useState(false);
  const [forgotpassword, setForgotpassword] = useState(false);
  const [forgotusername, setForgotusername] = useState(false);
  const [homepage,setHomepage] = useState(false);
  return (
    <div className="App">
      {
        (islogin) ? (!forgotpassword && !forgotusername) ? (homepage) ? <Displayhome /> : <DisplaySignin islogin={islogin} setIslogin={setIslogin} setForgotpassword={setForgotpassword} setForgotusername={setForgotusername} setHomepage={setHomepage}/> : (forgotpassword) ? <DisplayForgot setForgotpassword={setForgotpassword} /> : <DisplayForgotUser setForgotusername={setForgotusername} /> : <DisplaySignup islogin={islogin} setIslogin={setIslogin} />
      }
    </div>
  );
}

export default App;
