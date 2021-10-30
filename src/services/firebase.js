import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyAofdyugncMey83u9Bn-MWs0uesU42bKZ4",
        authDomain: "career-insights-official.firebaseapp.com",
        projectId: "career-insights-official",
        storageBucket: "career-insights-official.appspot.com",
        messagingSenderId: "476108309483",
        appId: "1:476108309483:web:75219961732a7f8598cfae"
      };
      
firebase.initializeApp(firebaseConfig);

// set up auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


function signIn() {
    return auth.signInWithPopup(provider);
}

function logOut() {
    return auth.signOut();
}


export {
    auth,
    signIn,
    logOut
}