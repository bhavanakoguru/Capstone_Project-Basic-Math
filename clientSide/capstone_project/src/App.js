import React from 'react';
// import React, { useState } from 'react';
// import DisplaySignup from './components/Signup';
// import DisplaySignin from './components/Signin';
// import DisplayForgot from './components/Forgotpassword';
// import DisplayForgotUser from './components/ForgotUsername';
// import Displayhome from './components/Homepage';
// import DisplayViewpage from './components/ViewMeterial';
// import DisplayClasses from './components/Classes';
// import DisplayExam from './components/Exam';
// import DisplaySingleclass from './components/Singleclass';
// import DisplaySinglematerial from './components/Singlematerial';

//******************/

import ExecuteHomePage from './Components/HomepageData';

function App() {
  // const [islogin, setIslogin] = useState(false);
  // const [forgotpassword, setForgotpassword] = useState(false);
  // const [forgotusername, setForgotusername] = useState(false);
  // const [homepage,setHomepage] = useState(false);
  return (
    <div className="App">
      {
        // (islogin) ? (!forgotpassword && !forgotusername) ? (homepage) ? <Displayhome /> : <DisplaySignin islogin={islogin} setIslogin={setIslogin} setForgotpassword={setForgotpassword} setForgotusername={setForgotusername} setHomepage={setHomepage}/> : (forgotpassword) ? <DisplayForgot setForgotpassword={setForgotpassword} /> : <DisplayForgotUser setForgotusername={setForgotusername} /> : <DisplaySignup islogin={islogin} setIslogin={setIslogin} />
        // <DisplayViewpage></DisplayViewpage>
        // <DisplayClasses />
        // <DisplaySingleclass></DisplaySingleclass>
        // <DisplayExam></DisplayExam>
        // <DisplaySinglematerial></DisplaySinglematerial>
        //************************************************************/

        <ExecuteHomePage />
      }
    </div>
  );
}

export default App;
