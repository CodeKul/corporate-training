import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isToggled = false;
  mobiles = [
    'Htc',
    'Moto',
    'Samsung',
    'Apple'
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(dt: {}) {
    console.log(dt)
    console.log(`Login performed`)
    if(dt['value']['email'] == 'codekul')
     this.router.navigate(['admin'])
  }
}
