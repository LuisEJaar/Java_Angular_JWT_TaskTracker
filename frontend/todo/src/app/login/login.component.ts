import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "luis"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor (private router: Router) {}

  handleLogin () {
    console.log(this.username);
    console.log(this.password);
    if (this.username === "luis" && this.password === "dummy") {
      //Redirect to welcome page
      this.router.navigate([`welcome/${this.username}`])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
