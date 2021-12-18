import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  userName:"",
  rollNo:"",
  showDrivePage: () => {},
  hideDrivePage: () => {},

});
//often it will be an object
//Auth context is an object that will contain a component
export default AuthContext;
