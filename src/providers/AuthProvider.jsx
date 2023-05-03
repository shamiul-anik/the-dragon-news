import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  // User Information
  const [user, setUser] = useState(null);

  // console.log(user);

  // Create User with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  // Login with Email and Password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  // Logout
  const logOut = () => {
    return signOut(auth);
  }

  // Get Logged in Status and Set User if Logged in.
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;