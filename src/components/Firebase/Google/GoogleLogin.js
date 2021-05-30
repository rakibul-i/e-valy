import React, { useContext, useState } from 'react';
import './GoogleLogin.css';
import { FcGoogle } from 'react-icons/fc';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from '../firebase';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

if( firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig);
}


const GoogleLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({});
    const googleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const currentUser = {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL
            };
            setUser(currentUser);
            setLoggedInUser(currentUser);
            history.replace(from);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    return (
        <div className="d-flex align-items-center justify-content-center " 
        style={{height: '70vh'}}
        >
        {loggedInUser && loggedInUser.email ? ( <div><p className="text-success">logged in Successfully</p>
        <p>Hello,{loggedInUser.name}</p>
        </div> ) : ( 
        <button onClick={ googleSignIn} className="google__btn btn"> <FcGoogle className="google__logo"/>  Continue with Google</button>
        )  }
        </div>
    );
};

export default GoogleLogin;