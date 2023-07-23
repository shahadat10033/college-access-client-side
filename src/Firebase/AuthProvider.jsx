import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.config";
import Swal from "sweetalert2";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);

  // google sign up
  const googleProvider = new GoogleAuthProvider();
  const googleSignUp = () => {
    setLoader(true);
   return signInWithPopup(auth, googleProvider)
      
  };
  // github sign up
  const githubProvider = new GithubAuthProvider();

  const githubSignUp = () => {
    setLoader(true);
   return signInWithPopup(auth, githubProvider)
     
  };
  // email registration

  const emailRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   email sign in
  const emailLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   sign out
  const logOut = () => {
    setLoader(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'log out success',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // getUserCurrentState

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  // update user profile

  const profileUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      
    })
      .then(() => {})
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const authInfo = {
    profileUpdate,
    googleSignUp,
    user,
    githubSignUp,
    emailRegister,
    setUser,
    emailLogin,
    logOut,
    loader,
    auth
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;