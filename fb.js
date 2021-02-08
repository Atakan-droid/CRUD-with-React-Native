import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAWNJzQA7Ffj5H61bD3ZHJorvswzgyv5xE",
    authDomain: "mycrud-project.firebaseapp.com",
    databaseURL: "https://mycrud-project-default-rtdb.firebaseio.com",
    projectId: "mycrud-project",
    storageBucket: "mycrud-project.appspot.com",
    messagingSenderId: "318229758127",
    appId: "1:318229758127:web:5bf6ccdbc44940bef5d45a"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


export default firebase