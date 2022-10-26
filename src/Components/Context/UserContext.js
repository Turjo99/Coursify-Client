import React from "react";
import { createContext } from "react";
import { app } from "../Firebase/firebase.init";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
const AuthContext = createContext();
const UserContext = ({ children }) => {
  const authInfo = {};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
