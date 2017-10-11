import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAZmP1xAvmNBDlC6q8lDNt9TdNOoKFkfC4",
    authDomain: "recommendall-9a432.firebaseapp.com",
    databaseURL: "https://recommendall-9a432.firebaseio.com",
    projectId: "recommendall-9a432",
    storageBucket: "recommendall-9a432.appspot.com",
    messagingSenderId: "419976620881"
  };
var fire = firebase.initializeApp(config);
export default fire;
