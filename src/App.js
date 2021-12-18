import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Screens/Signupscreen/Signup";
import Login from "./components/Screens/Loginscreen/Login";
import DriverMain from "./components/Screens/DriverMain/DriverMain";
import NotFound from "./components/Screens/NotFound";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Screens/Homepage/Home";
import Navbar from "./components/Screens/Navbar/Navbar";
import DriverMainStep2 from "./components/Screens/DriverMain/StepTwo";
import { useState, useEffect } from "react";
import AuthContext from "./components/store/auth-context";
import UserForum from "./components/Screens/UserForum/UserForum";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [carFound, setcarFound] = useState(false);
  const [carRegNumb, setcarRegNumb] = useState("AEY-999");
  const [seats, setSeats] = useState(0);

  const [time, setTime] = useState("");
  const [carType, setCarType] = useState("Car");
  const [Fare, setFare] = useState(0);
  const [Date, setDate] = useState("12-12-2000");

  const [pickUp, setPickUp] = useState({
    address: "",
    lat: 24.918027,
    lng: 67.0632675,
  });
  const [dest, setDest] = useState({
    address: "",
    lat: 24.8568991,
    lng: 67.0632675,
  });

  const setAttributes = (d) => {
    setPickUp(d.pickup);
    setDest(d.dropoff);
    setTime(d.leavingTime);
    setDate(d.Date);
    setFare(d.Fare);
    setCarType(d.carType);
    setSeats(d.seats);
  };
  const setCarAlreadyRegistered = (n, regNumb) => {
    if (n === 1) {
      console.log("CAR FOUND & ENTRY ADDED");
      setcarFound(true);
      setcarRegNumb(regNumb);
    } else {
      setcarFound(false);
      setcarRegNumb(regNumb);
    }
  };
  const loginHandler = (rollNO, Name) => {
    setName(Name);
    setRollNo(rollNO);
    const obj = { id: "1", name: Name, no: rollNO };
    localStorage.setItem("user", JSON.stringify(obj)); //1 for loggedin user
    setIsLoggedIn(true);
  };

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));

    const checkIfUserLoggedIn = user.id;
    if (checkIfUserLoggedIn === "1") {
      setIsLoggedIn(true);
      setName(user.name);
      setRollNo(user.no);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        logUser: isLoggedIn,
        onLogOutUser: logoutHandler,
        userName: Name,
        rollNo: rollNo,
      }}
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
          <DriverMain
            carRegister={setCarAlreadyRegistered}
            set={setAttributes}
          />
        </Route>
        <Route path="/car-details/:carReg">
          <DriverMainStep2
            carFound={carFound}
            carRegNumb={carRegNumb}
            Name={Name}
            rollNo={rollNo}
            seats={seats}
            Fare={Fare}
            Date={Date}
            carType={carType}
            time={time}
          />
        </Route>

        <Route exact path="/user">
          {/* {!Authorized ? <Redirect to="/" /> : <UserForum />}  */}
          {/* <UserForum /> */}
          <UserForum />
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
