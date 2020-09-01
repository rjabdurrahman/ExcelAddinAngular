import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import LoginComponent from './login/login.component';
import DashboardComponent from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export default class AppModule { }
