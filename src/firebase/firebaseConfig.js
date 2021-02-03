import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyANSGGYSd1d3eOq6D1-vwGSf1kjrsrFGWI",
  authDomain: "graphical-center.firebaseapp.com",
  projectId: "graphical-center",
  storageBucket: "graphical-center.appspot.com",
  messagingSenderId: "1044628058768",
  appId: "1:1044628058768:web:e77bb59021a7cdd6599e15"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db,
  googleAuthProvider,
  firebase,
}
