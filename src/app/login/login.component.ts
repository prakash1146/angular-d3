import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  loginToDashBoard(email,password){
      if(email === 'admin' && password === 'admin'){  
        this.router.navigate(['/dashBoard']);
      }
  }
}
