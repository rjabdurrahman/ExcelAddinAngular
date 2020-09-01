import { Component } from "@angular/core";
const template = require("./login.component.html");
import * as firebase from 'firebase';
/* global console, window, Office, Excel, require */

@Component({
  selector: "app-login",
  template
})
export default class LoginComponent {
  app = firebase.initializeApp({
    apiKey: "AIzaSyBpQOjE7MXFMK5nn8T6dvjeG9-8f8ymWW4",
    authDomain: "chatapp-1f75d.firebaseapp.com",
    databaseURL: "https://chatapp-1f75d.firebaseio.com",
    projectId: "chatapp-1f75d",
    storageBucket: "chatapp-1f75d.appspot.com",
    messagingSenderId: "880223391613",
    appId: "1:880223391613:web:6cc27593b01ac498"
  });
  title = 'AngularLean';
  status = '';
  login(email: any, password: any): any {
    this.status = 'Logging...'
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        this.status = 'Logged';
        window.localStorage.setItem('token', 'isToken');
      })
      .catch(err => {
        this.status = err.message;
      })
  }
}
