import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login, defaultLogin } from './form-doc.interface';

@Component({
  selector: 'gks-form-doc',
  templateUrl: './form-doc.component.html',
  styleUrls: ['./form-doc.component.css']
})
export class FormDocComponent implements OnInit {
  loginForm!: FormGroup;
  login: Login = defaultLogin;
  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [this.login.username, [Validators.required]],
      password: [this.login.password, [Validators.required]]
    })
  }

  get username() {
    return this.loginForm.get('username')!;
  }

  get usernameRequest() {
    return this.username.hasError('required') && this.username.touched;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get passwordRequest() {
    return this.password.errors?.['required'] && this.password.touched;
  }
}
