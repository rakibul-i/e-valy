import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAoqmizUG0dr9L8njUejuk7-ieMx4LRVfk",
    authDomain: "evaly-ecommerce.firebaseapp.com",
    projectId: "evaly-ecommerce",
    storageBucket: "evaly-ecommerce.appspot.com",
    messagingSenderId: "910672650493",
    appId: "1:910672650493:web:9734f3dda095c04ff71e94"
})

export const auth = app.auth();
export default app;