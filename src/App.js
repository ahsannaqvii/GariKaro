import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Screens/Signupscreen/Signup";
import Login from "./components/Screens/Loginscreen/Login";
import UserForum from "../src/components/Screens/UserForum/UserForum";
import DriverMain from "./components/Screens/DriverMain/DriverMain";
import DriverMain2 from "./components/Screens/DriverMain/StepTwo";
import NotFound from './components/Screens/NotFound'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Screens/Homepage/Home";
import Navbar from "./components/Screens/Navbar/Navbar";
import DriverMainStep2 from './components/Screens/DriverMain/StepTwo';
import { useState, useEffect, useContext } from "react";
import AuthContext from "./components/store/auth-context";
import UserFormAhsan from "./components/Screens/UserForum/UserForumAhsan";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("")

  const loginHandler = (email,Name) => {
    setName(Name);
    setEmail(email);
    localStorage.setItem("Is logged in", "1"); //1 for loggedin user
    setIsLoggedIn(true);
    // console.log("BHU HARD");
    // console.log(Name + Email);
  };

  useEffect(() => {
    const checkIfUserLoggedIn = localStorage.getItem("Is logged in");
    if (checkIfUserLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("Is logged in");
    setIsLoggedIn(false);
  };


  return (
    <AuthContext.Provider
      value={{ logUser: isLoggedIn, onLogOutUser: logoutHandler  , userName: Name , emailID: Email}}
    > 
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login onLogin={loginHandler} />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/driver" exact>
          <DriverMain />
        </Route>

        <Route path="/car-details" exact>
          <DriverMainStep2/> 
          </Route> 
          
        <Route exact path="/user">
          {/* {!Authorized ? <Redirect to="/" /> : <UserForum />}  */}
          {/* <UserForum /> */}
          <UserFormAhsan/>
        </Route>

        {/* default case for no page found  */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
