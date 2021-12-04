import styles from "./LoginAhsan.module.css";
import React from "react";
import useInput from "../hooks/use-input";
import axios from "axios";

const Login = () => {
  const {
    value: enteredEmail,
    enteredValueIsValid: EmailIsValid,
    valueBlurHandler: EmailBlurHandler,
    valueChangeHandler: EmailChangeHandler,
    hasError: EmailHasError,
    reset: resetEmail,
  } = useInput((value) => value.includes("@")); //FOR USER EMAIL

  const {
    value: enteredPassword,
    enteredValueIsValid: PasswordIsValid,
    valueBlurHandler: PasswordBlurHandler,
    valueChangeHandler: PasswordChangeHandler,
    hasError: PasswordHasError,
    reset: resetPassword,
  } = useInput((value) => value.trim().length !== 0); //FOR USER PASSWORD

  const {
    value: enteredPhoneNumber,
    enteredValueIsValid: PhoneNumberIsValid,
    valueBlurHandler: PhoneNumberBlurHandler,
    valueChangeHandler: PhoneNumberChangeHander,
    hasError: NumberHasError,
    reset: resetPhoneNumber,
  } = useInput((value) => value.length >= 11); //FOR USER PHONE NUMBER

  let formIsValid = false;
  if (PhoneNumberIsValid && EmailIsValid && PasswordIsValid) {
    formIsValid = true;
  }

  const formChangeHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmail();
    resetPassword();
    resetPhoneNumber();
  };

  const login = () => {
    const user = {
      email: enteredEmail,
      password: enteredPassword,
      phoneNumber: enteredPhoneNumber,
    };
    axios
      .post("http://localhost:4000/login", user)
      .then((res) => console.log(res));
  };

  return (
      <div className={styles.holder}>
        <div className={styles.card}>
          <div className={styles.card__text}>
            Continue with GariKaro!
            <br />
            <br />
          </div>
          <form className={styles["form-style-7"]}>
            <ul>
              <li>
                <label for="name">Name</label>
                <input type="text" name="name" maxlength="100" />
                <span>Enter your full name here</span>
              </li>
              <li>
                <label for="email">Email</label>
                <input type="email" name="email" maxlength="100" />
                <span>Enter a valid email address</span>
              </li>
              <li>
                <input type="submit" value="Sign In" />
              </li>
            </ul>
          </form>
        </div>
      </div>

  );
};

export default Login;
