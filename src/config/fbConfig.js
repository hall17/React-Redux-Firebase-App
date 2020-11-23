import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBES5C-EoA33rPqVQNPJzSIHKdysqHITWw",
    authDomain: "net-ninja-marioplan-394a4.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-394a4.firebaseio.com",
    projectId: "net-ninja-marioplan-394a4",
    storageBucket: "net-ninja-marioplan-394a4.appspot.com",
    messagingSenderId: "1046590899777",
    appId: "1:1046590899777:web:962297c4065fa5e427a8c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase