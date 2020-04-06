import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    rememberMe: new FormControl(false),
  })
  auth_failure = false

  private username: String
  private email: String
  private rememberMe: boolean

  constructor() { }

  signIn() {
    this.username = this.signinForm.value.username
    this.email = this.signinForm.value.email
    this.rememberMe = this.signinForm.value.rememberMe
    this.auth_failure = true
  }

  ngOnInit(): void {
  }

}
