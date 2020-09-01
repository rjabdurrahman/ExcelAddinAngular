import { Component } from '@angular/core';
const template = require("./login.component.html");
/* global require */

@Component({
  selector: "app-login",
  template
})
export default class LoginComponent {
  constructor() { }
  title = 'Login'
}
