import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  em: any;
  pwd: any;
 constructor(private router: Router, private as:AuthService){}
  signup() {
    this.as.register(this.em, this.pwd).then((res) => console.log(res));
  } 

 ToLogin(){
  this.router.navigate(['/login']);
 }
}
