import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Screens/Signupscreen/Signup";
import UserForum from "../src/components/Screens/UserForum/UserForum";
import Login from "./components/Screens/Loginscreen/Login";
import DriverMain from "./components/Screens/DriverMain/DriverMain";
import NotFound from "./components/Screens/NotFound";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Screens/Homepage/Home";
import Navbar from "./components/Screens/Navbar/Navbar";
import { useState ,useEffect} from "react";

function App() {
  const [authorized, setauthorized] = useState(false); //false = not logged in and vice versa then

  const authHandler = () => {
    console.log(authorized);
    console.log("PRINTER");
    alert("HOW");
    setauthorized(!authorized);
    console.log(!authorized);
  };
  // useEffect(() => {
  //   authHandler();
  // }, [authorized])
  // async function fetchData() {
  //   try {
  //     const result = await axios.get("https://randomuser.me/api/")
  //     console.log(result.data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div>
      <Navbar status={authorized} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login authentication={authHandler} />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/driver" exact>
          <DriverMain />
        </Route>

        <Route exact path="/user">
          {!authorized ? <Redirect to="/" /> : <UserForum />}
        </Route>

        {/* default case for no page found  */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
