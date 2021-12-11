import "./Login2.css";
import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import axios from "axios";
import { Link } from "react-router-dom";
import { Prompt ,useHistory } from "react-router";
import { authentication } from "../../../firebase_config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Button} from "react-bootstrap";
import logo from '../../../assets/google_signin.png';

const Login = ({authentication}) => {
  let history=useHistory();
  // const [isEntering, setisEntering] = useState(false);
  const {
    value: enteredEmail,
    enteredValueIsValid: EmailIsValid,
    valueBlurHandler: EmailBlurHandler,
    valueChangeHandler: EmailChangeHandler,
    // hasError: EmailHasError,
    reset: resetEmail,
  } = useInput((value) => value.includes("@")); //FOR USER EMAIL
  const {
    value: enteredPassword,
    enteredValueIsValid: PasswordIsValid,
    valueBlurHandler: PasswordBlurHandler,
    valueChangeHandler: PasswordChangeHandler,
    // hasError: PasswordHasError,
    reset: resetPassword,
  } = useInput((value) => value.trim().length !== 0); //FOR USER PASSWORD

  let formIsValid = false;
  if (EmailIsValid && PasswordIsValid) {
    formIsValid = true;
  }

  const formChangeHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetEmail();
    resetPassword();
    // resetPhoneNumber();
  };
  // const login = () => {
  //   console.log("Here");
  //   const user = {
  //     email: enteredEmail,
  //     password: enteredPassword,
  //     // phoneNumber: enteredPhoneNumber,
  //   };
  //   axios
  //     .post("http://localhost:4000/login", user)
  //     .then((res) => console.log(res));
  // };
  // const focusHandler = () => {
  //   setisEntering(true);
  // };
  // const finishEnteringHandler = () => {
  //   setisEntering(false);
  // };

  const signInWithGoogle = () => {  //FOR FIREBASE SIGN IN AUTH
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res)=>{
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })

  };

  return (

    <React.Fragment>


      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 d-none d-md-flex bg-image"></div>

          <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-7 mx-auto">
                    <h3 class="display-4">Gari Karo!</h3>
                    <p class="text-muted mb-4">Already have an acccount?</p>
                    {/* onFocus={focusHandler} */}
                    <form onSubmit={formChangeHandler} >
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
                      <div class="custom-control custom-checkbox mb-3">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          // checked
                          class="custom-control-input"
                        />
                        <label for="customCheck1" class="custom-control-label">
                          {"   "}
                          Remember password
                        </label>
                      </div>
                      <button
                        disabled={!formIsValid}
                        // onClick={login}
                        onClick={authentication}
                        // onClick={() => {
                        //   // finishEnteringHandler();
                        //   // login();
                          
                        //   history.push('/user');

                        // }}
                        type="submit"
                        class=" btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm "
                      >
                        Sign in
                      </button>
                        {/* <Button onClick={signInWithGoogle} className="btn-google"> */}
                          {/* <img src={logo} className="btn-img" ></img> */}
                          {/* SignUp With Google
                        </Button> */}

                      <div class="text-center d-flex justify-content-between mt-4 ">
                        <p>
                          New here? {"  "}
                          <Link class="font-italic text-muted " to="/signup">
                            SIGN UP!
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
    </React.Fragment>
  );
};

export default Login;
