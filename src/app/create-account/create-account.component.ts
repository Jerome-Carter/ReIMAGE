import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm = new FormGroup({
    first: new FormControl('', [
      Validators.required,
      Validators.maxLength(128),
      Validators.minLength(2)
    ]),
    last: new FormControl('', [
      Validators.required,
      Validators.maxLength(128),
      Validators.minLength(2)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(128),
      Validators.minLength(8),
    ]),
  })
  auth_failure = false
  failure_message = ''

  private first: String
  private last: String
  private username: String
  private email: String
  private password: String

  constructor() { }

  createAccount() {
    this.first = this.createAccountForm.value.first
    this.last = this.createAccountForm.value.last
    this.username = this.createAccountForm.value.username
    this.email = this.createAccountForm.value.email
    this.password = this.createAccountForm.value.password
    this.failure_message = "Could not create account!"
    this.auth_failure = true
  }

  ngOnInit(): void {
  }

}
