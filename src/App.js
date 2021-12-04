import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Screens/Signupscreen/Signup";
import Login from "./components/Screens/Loginscreen/Login";
import NotFound from './components/Screens/NotFound'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Screens/Homepage/Home";
import Navbar from "./components/Screens/Navbar/Navbar";
function App() {
  return (
    <div >
      <Navbar/>
       <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/signup" exact >
          <SignUp />
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
