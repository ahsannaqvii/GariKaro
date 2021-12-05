import "./Signup.css";
import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import axios from "axios";
import { Link } from "react-router-dom";
import { Prompt } from "react-router";
const Signup = () => {
  const [isEntering, setisEntering] = useState(false);
  const {
    value: enteredEmail,
    enteredValueIsValid: EmailIsValid,
    valueBlurHandler: EmailBlurHandler,
    valueChangeHandler: EmailChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@")); //FOR USER EMAIL

  const {
    value: enteredPassword,
    enteredValueIsValid: PasswordIsValid,
    valueBlurHandler: PasswordBlurHandler,
    valueChangeHandler: PasswordChangeHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length !== 0); //FOR USER PASSWORD
  const {
    value: enteredFirstName,
    enteredValueIsValid: FirstNameIsValid,
    valueBlurHandler: FirstNameBlurHandler,
    valueChangeHandler: FirstNameChangeHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length !== 0); //FOR USER NAME
  const {
    value: enteredLastName,
    enteredValueIsValid: LastNameIsValid,
    valueBlurHandler: LastNameBlurHandler,
    valueChangeHandler: LastNameChangeHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim().length !== 0); //FOR USER NAME
  const {
    value: enteredRollNo,
    enteredValueIsValid: RollNoIsValid,
    valueBlurHandler: RollBlurHandler,
    valueChangeHandler: RollChangeHandler,
    reset: resetRollNo,
  } = useInput((value) => value.trim().length !== 0); //FOR USER ROLL NO

  const {
    value: enteredPhoneNumber,
    enteredValueIsValid: PhoneNumberIsValid,
    valueBlurHandler: PhoneNumberBlurHandler,
    valueChangeHandler: PhoneNumberChangeHander,
    // hasError: NumberHasError,
    reset: resetPhoneNumber,
  } = useInput((value) => value.length >= 11); //FOR USER PHONE NUMBER

  let formIsValid = false;
  if (
    PhoneNumberIsValid &&
    EmailIsValid &&
    PasswordIsValid &&
    FirstNameIsValid &&
    LastNameIsValid &&
    RollNoIsValid
  ) {
    formIsValid = true;
  }

  const formChangeHandler = (event) => {
    // event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetRollNo();
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetPhoneNumber();
  };

  const login = () => {
    const user = {
      email: enteredEmail,
      password: enteredPassword,
      phoneNumber: enteredPhoneNumber,
      firstname: enteredFirstName,
      lastname: enteredLastName,
      Rollno: enteredRollNo,
    };
    axios
      .post("http://localhost:4000/signup", user)
      .then((res) => console.log(res));
  };

  const focusHandler = () => {
    setisEntering(true);
  };
  const finishEnteringHandler = () => {
    setisEntering(false);
  };
  return (
    <div class="container-fluid">
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your data will be lost!"
        }
      />
      <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>

        <div class="col-md-6 bg-light">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <h3 class="display-4">Gari Karo!</h3>
                  <p class="text-muted mb-4">
                    Sign up for a better experience!
                  </p>
                  <form onSubmit={formChangeHandler} onFocus={focusHandler}>
                    <div class="form-group mb-3">
                      <input
                        id="inputName"
                        type="firstname"
                        placeholder="First Name"
                        required=""
                        autofocus=""
                        onBlur={FirstNameBlurHandler}
                        onChange={FirstNameChangeHandler}
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputName"
                        type="lastname"
                        placeholder="Last Name"
                        required=""
                        autofocus=""
                        onBlur={LastNameBlurHandler}
                        onChange={LastNameChangeHandler}
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        autofocus=""
                        onBlur={EmailBlurHandler}
                        onChange={EmailChangeHandler}
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputrollno"
                        // type=""
                        placeholder="Roll Number"
                        required=""
                        autofocus=""
                        onBlur={RollBlurHandler}
                        onChange={RollChangeHandler}
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required=""
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"]
                        // pattern=""
                        onBlur={PasswordBlurHandler}
                        onChange={PasswordChangeHandler}
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputPhoneNumber"
                        type="phonenumber"
                        placeholder="Phone Number"
                        required=""
                        onBlur={PhoneNumberBlurHandler}
                        onChange={PhoneNumberChangeHander}
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      />
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                      <input
                        id="customCheck1"
                        type="checkbox"
                        // checked
                        class="custom-control-input"
                      />
                      <label for="customCheck1" class="custom-control-label">
                        {" "}
                        Remember password
                      </label>
                    </div>
                    <button
                      disabled={!formIsValid}
                      onClick={login}
                      onClick={() => {
                        finishEnteringHandler();
                         login();
                      }}
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Sign Up
                    </button>
                    <div class="text-center d-flex justify-content-between mt-4">
                      <p>
                        Already Have an Account?{"  "}
                        <Link class="font-italic text-muted" to="/login">
                          SIGN IN!
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
