import firebase  from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCJUlGrHwzQgOP7befVIwcNj5e0Ti1BBx8",
    authDomain: "crwn-db-31523.firebaseapp.com",
    projectId: "crwn-db-31523",
    storageBucket: "crwn-db-31523.appspot.com",
    messagingSenderId: "69534190216",
    appId: "1:69534190216:web:ce2f1a341517691585ad3d",
    measurementId: "G-JDHRT5PXER"
};

firebase.initializeApp(config)

export const auth = firebase.auth();  //export it out anywhere we need authentication
export const firestore = firebase.firestore();

const  provider = new firebase.auth.GoogleAuthProvider(); // google authentication utility
provider.setCustomParameters({prompt: 'select_account'}) // custom parameters{trigger google pop up}
export  const  signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
