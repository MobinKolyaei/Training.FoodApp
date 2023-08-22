import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService) { };
  username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  login() {
    this.loginService.login(this.username.value ?? '', this.password.value ?? '');
  }
  DisableCut(event: any) {
    event.preventDefault();
  }
  DisableCopy(event: any) {
    event.preventDefault();
  }
  DisablePaste(event: any) {
    event.preventDefault();
  }
}
