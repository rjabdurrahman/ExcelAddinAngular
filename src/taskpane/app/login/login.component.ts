import { Component } from "@angular/core";
const template = require("./login.component.html");
import * as firebase from 'firebase';
/* global console, window require */

@Component({
  selector: "app-login",
  template
})
export default class LoginComponent {
  status = '';
  app = firebase.initializeApp({
    apiKey: "AIzaSyBpQOjE7MXFMK5nn8T6dvjeG9-8f8ymWW4",
    authDomain: "chatapp-1f75d.firebaseapp.com",
    databaseURL: "https://chatapp-1f75d.firebaseio.com",
    projectId: "chatapp-1f75d",
    storageBucket: "chatapp-1f75d.appspot.com",
    messagingSenderId: "880223391613",
    appId: "1:880223391613:web:6cc27593b01ac498"
  });
  login(email: any, password: any): any {
    this.status = 'Logging...'
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        this.status = 'Logged';
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            window.localStorage.setItem('access-token', idToken)
          })
      })
      .catch(err => {
        this.status = err.message;
      })
  }
}
