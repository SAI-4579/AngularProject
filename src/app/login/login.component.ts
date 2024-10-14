import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

 constructor(private router: Router, private as:AuthService){}

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  login() {
    if(this.email=='email' && this.password=='password') {
      console.log('invalid username/password');
    }
    else {
      if (!this.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      alert('Invalid email address. Please enter a valid email address with only one @ symbol.');
      return;
      }
      this.as.login(this.email, this.password).then((res) => console.log(res));
    }
  }
  
  googlelogin() {
    this.as.googleLogin().then((res) => console.log(res));
  }
 
  ToSignup(){
    this.router.navigate(['/signup']);
  }

  reset() {
    this.email = null;
    this.password = null;
  }
}
