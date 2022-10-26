import React from "react";
import { createContext } from "react";
import { app } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, Provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth State Changed", currentUser);
      //   setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = { createUser, loginUser, googleSignIn };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
