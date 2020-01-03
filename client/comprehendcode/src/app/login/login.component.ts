import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  credentials: TokenPayload = {
    email: '',
    password: '',
  };
  form: FormGroup;
  constructor(private auth: AuthenticationService, private router: Router, private _fb: FormBuilder) { }
  ngOnInit() {
    this.form = this._fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    })
  }

  login() {
    this.credentials.email = this.form.controls.email.value;
    this.credentials.password = this.form.controls.password.value;
    this.auth.login(this.credentials).subscribe(() => {
      this.form.reset();
      this.router.navigate(['admin']);
    }, (err) => {
      console.error(err);
    }, () => {
      this.form.reset();
      this.router.navigate(['admin']);
    });
  }
}