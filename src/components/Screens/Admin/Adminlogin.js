import React, { useState, useEffect } from "react";
import { Button } from "../../UI/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import { useHistory, Prompt } from "react-router";

import classes from "./Adminlogin.module.css";

const AdminLogin = (props) => {
  let history = useHistory();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("req");
      setFormIsValid(
        //timer set karne sey bar bar validation check nai hugi , har 500ms baad hugi
        enteredEmail === "root" && enteredPassword === "root"
      );
    }, 500);
    return function cleanup() {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [enteredPassword, enteredEmail]);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  //   const validateEmailHandler = () => {
  //     setEmailIsValid(enteredEmail.includes("@"));
  //   };

  //   const validatePasswordHandler = () => {
  //     setPasswordIsValid(enteredPassword.trim().length > 6);
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredPassword === "root" && enteredEmail === "root") {
      setFormIsValid(true);
      history.push("/adminroot");
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <div>
      {formIsValid && <Prompt></Prompt>}
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            type="id"
            id="email"
            label="ID"
            value={enteredEmail}
            emailIsValid={emailIsValid}
            onChange={emailChangeHandler}
            //   onBlur={validateEmailHandler}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            value={enteredPassword}
            emailIsValid={passwordIsValid}
            onChange={passwordChangeHandler}
            //   onBlur={validatePasswordHandler}
          />

          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
