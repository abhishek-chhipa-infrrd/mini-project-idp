import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  loginAuthenticate() {
    console.log('username: '+this.username);
    console.log('password: '+this.password)
  }

}
