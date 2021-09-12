import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAwXzvbsJZlIHWwzXX4WtB3uy5moXAJI9A",
  authDomain: "pro73-5e7fe.firebaseapp.com",
  projectId: "pro73-5e7fe",
  storageBucket: "pro73-5e7fe.appspot.com",
  messagingSenderId: "99596102642",
  appId: "1:99596102642:web:65ade39345b7692310196b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
