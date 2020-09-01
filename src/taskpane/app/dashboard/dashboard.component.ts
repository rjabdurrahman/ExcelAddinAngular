import { Component } from "@angular/core";
const template = require("./dashboard.component.html");
import * as firebase from 'firebase';
/* global console, window, require */

@Component({
  selector: "app-dashboard",
  template
})
export default class DashboardComponent {
  title = 'Dashboard'
  logOut() {
    firebase.auth().signOut()
    .then(res => {
      console.log(res)
      window.localStorage.removeItem('access-token');
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}
