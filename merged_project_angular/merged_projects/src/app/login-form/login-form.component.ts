import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  private _fb = inject(FormBuilder)
  private router = inject(Router)
  loginForm = this._fb.group({
    username: [],
    password: [],
  })
  loginUser(val: any) {
    console.log("local storage name" + localStorage.getItem("username"))

    if (localStorage.getItem("username") == val.username && localStorage.getItem("password") == val.password) {
      this.router.navigate(['/Resume'])
    }
    else {
      alert("please enter valid username & password!!")
    }
  }
}
