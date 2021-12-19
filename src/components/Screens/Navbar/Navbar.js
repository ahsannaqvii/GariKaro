import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../../../assets/GK_LOGO.svg";
import "./Navbar.css";
import { Button } from "../../UI/Button";
import AuthContext from "../../store/auth-context";
import context from "react-bootstrap/esm/AccordionContext";

function Navbar(props) {
  const contextData = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => {
    setClick(false);
  };
  const clickHandler = () => {
    setClick(!click);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          {/* link is similar to a tag , href ki jaga to= ka tag */}
          <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={img} className="img_logo"></img>
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
 
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {props.isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
            )}

            {props.isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/driver"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Drive
                </Link>
              </li>
            )}

            {props.isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/user"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Ride
                </Link>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/history"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  My Rides
                </Link>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  My Profile
                </Link>
              </li>
            )}

            <li className="nav-btn">
              {contextData.logUser && (
                <Link to="/home" className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    onClick={contextData.onLogOutUser}
                  >
                    LOGOUT
                  </Button>
                </Link>
              )}

              {!contextData.logUser && (
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline">LOGIN</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

//FOR RESPONSIVE
{
  /* {button ? (
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline"  >{props.status ? "LOGOUT" : "LOGIN"} </Button>
                </Link>
              ) : (
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize ="btn--mobile">
                    SIGN UP{" "}
                  </Button>
                </Link>
              )} */
}
