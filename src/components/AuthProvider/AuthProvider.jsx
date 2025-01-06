import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
// import { auth } from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
      .then(() => {
        // Manually update the user state with the new information
        setUser({
          ...auth.currentUser,
          displayName: updatedData.displayName,
          photoURL: updatedData.photoURL,
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currently Logged user", currentUser);
        setUser(currentUser);
        console.log(currentUser?.email);
        if (currentUser?.email) {
          const user = { email: currentUser?.email };
          axios
            .post(`https://job-portal89.vercel.app/jwt/`, user, { withCredentials: true })
            .then((res) => {
              console.log(res.data);
            });
        }
        // setEmail(currentUser.email);
      } else {
        setUser(null);
        // setEmail(null);
        axios.post(`https://job-portal89.vercel.app/logout/`, {}, { withCredentials: true })
        .then(res => console.log("logout",res.data))
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authUser = {
    user,
    loading,
    createUser,
    SignInUser,
    userSignOut,
    updateUserProfile,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
