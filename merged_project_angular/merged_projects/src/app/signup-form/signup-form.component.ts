import { Component, inject } from '@angular/core';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
            private _fb=inject(FormBuilder)
            private router=inject(Router)
            SignupForm=this._fb.group({
              username:['',[Validators.required,Validators.minLength(3)]],
              password:[],
              email:['',[Validators.required,Validators.email]],
              contactNo:['',[Validators.required,Validators.pattern("[0-9]{10}")]]
            })

            SignUpuser(val:any){
              console.log(val)
              localStorage.setItem("username",val.username)
              localStorage.setItem("password",val.password)
              localStorage.setItem("email",val.email)
              localStorage.setItem("contactNo",val.contactNo)

              this.router.navigate(['/login-form'])
            }
          


}
