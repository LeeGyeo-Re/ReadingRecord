import React, { useState, useCallback, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import "./Signin.css";
import axios from "axios";

const Signin = ({ onLogin }) => {
  const [user, setUser] = useState({
    uid: "",
    pw: "",
  });
  let signInYn = false;
  const onChangeId = useCallback(
    (e) => {
      const newid = {
        uid: e.target.value,
        pw: user.pw,
      };
      setUser(newid);
    },
    [user]
  );
  const onChangePw = useCallback(
    (e) => {
      const newpw = {
        uid: user.uid,
        pw: e.target.value,
      };
      setUser(newpw);
    },
    [user]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get("/signIn", {
        params: {
          id: user.uid,
          password: user.pw,
        },
      })
      .then(function (res) {
        if (res.data) {
          onLogin({ flag: true, signUpFlag: false });
          console.log("login");
        } else {
          console.log("error");
          alert("비밀번호가 맞지 않습니다.");
          setUser({
            uid: "",
            pw: "",
          });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  /* useCallback((e) => {
     if (user.uid === "admin" && user.pw === "1111") {
        flag = true;
      }
      if (flag) {
        onLogin({ flag: true, signUpFlag: false });
      } 
    
  }, []); */
  const onSignUp = useCallback(() => {
    onLogin({ flag: false, signUpFlag: true });
  }, [onLogin]);
  return (
    <div className="login">
      <h1>Hello World</h1>
      <form className="signInForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={user.uid}
          onChange={onChangeId}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={user.pw}
          onChange={onChangePw}
        ></input>
        |<Input type="submit" value="SignIn"></Input> |
        <Input type="button" value="SignUp" onClick={onSignUp}></Input>|
      </form>
    </div>
  );
};

export default Signin;
