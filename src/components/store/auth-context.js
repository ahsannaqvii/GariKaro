import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  userEmail:null,
  userName:null,
});
//often it will be an object
//Auth context is an object that will contain a component
export default AuthContext;
