import React, { useState } from 'react';
import './App.css';
import DisplaySignup from './components/Signup';
import DisplaySignin from './components/Signin';
//import DisplayForgot from './components/Forgotpassword';
//import DisplayForgotUser from './components/ForgotUsername';

function App() {
  const [islogin, setIslogin] = useState(false);
  return (
     <div className="App">
       {
          (islogin) ? <DisplaySignin islogin={islogin} setIslogin={setIslogin}/> : <DisplaySignup islogin={islogin} setIslogin={setIslogin}/>
       }
    </div>
  );
}

export default App;
