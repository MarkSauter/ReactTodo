import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCGMeBJDFh5A4VUlXBcJE2nikrDFu-gWdI",
    authDomain: "sauter-todo-app.firebaseapp.com",
    databaseURL: "https://sauter-todo-app.firebaseio.com",
    storageBucket: "sauter-todo-app.appspot.com",
    messagingSenderId: "947020733751"
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
