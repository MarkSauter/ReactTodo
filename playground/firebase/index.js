import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCGMeBJDFh5A4VUlXBcJE2nikrDFu-gWdI",
  authDomain: "sauter-todo-app.firebaseapp.com",
  databaseURL: "https://sauter-todo-app.firebaseio.com",
  storageBucket: "sauter-todo-app.appspot.com",
  messagingSenderId: "947020733751"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Mark',
    age: 30
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.push({
  text: 'Do tai chi'
})
todosRef.push({
  text: 'learn react'
})
