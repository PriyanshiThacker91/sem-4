import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,NgIf,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
    userForm=new FormGroup({
      username:new FormControl("",[Validators.required,Validators.minLength(3)]),

      email:new FormControl("",[Validators.required,Validators.email]),

      contact:new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),

      spi:new FormControl("",[Validators.required,Validators.min(0),Validators.max(10)]),

      enroll_no:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{8,10}$")
      ]),

    });

    saveData(){
      console.log(this.userForm.value);
    }

  

    
}
