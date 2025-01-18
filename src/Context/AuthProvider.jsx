import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import auth from '../Firebase/firebase.init';
import useAxiosPublic from '../Hook/useAxiosPublic';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null)
    const [loader, setLoader] = useState(true)
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    };  
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
          setUser(loggedUser);
          if(loggedUser){
            const userInfo = {
              email : loggedUser.email
            }
            console.log(userInfo)
            axiosPublic.post('/jwt',userInfo)
            .then(res => {
              console.log(res)
              if(res.data){
                localStorage.setItem('Item', "test")
                localStorage.setItem('access-token', res.data)
                console.log('set item on localstorage')
              }
              
            })

          }
          else{
              localStorage.removeItem('access-token')
          }
          setLoader(false)
     
        });
        return () => {
          unsubscribe();
        };
      }, []);
      const updateUser= (name, photo) =>{
        return updateProfile(auth.currentUser, {displayName: name , photoURL: photo})
      }
      const signOutUser = () => {
        setLoader(true)

        return signOut(auth);
      };
      const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
      }
      
    const authValue = {
        user,
        setUser,
        loader,
        createUser,
        signInUser,
        googleSignIn,
        updateUser,
        signOutUser, 
        resetPassword

    }
    return (
        <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
     );
};

export default AuthProvider;