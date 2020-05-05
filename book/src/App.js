import React, { useState, useCallback } from "react";
import Signin from "./components/SignIn/Signin";
import Signup from "./components/SignIn/Signup";
import Main from "./components/Main/Main";

function App() {
  const [isLogin, setIsLogin] = useState({
    flag: false,
    signUpFlag: false,
  });

  const onLogin = useCallback((state) => {
    setIsLogin({
      flag: state.flag,
      signUpFlag: state.signUpFlag,
    });
  });
  return (
    <div className="App">
      {isLogin.flag ? <Main /> : <Signin onLogin={onLogin} />}
      {!isLogin.signUpFlag ? <div>회원가입</div> : <Signup />}
    </div>
  );
}

export default App;
