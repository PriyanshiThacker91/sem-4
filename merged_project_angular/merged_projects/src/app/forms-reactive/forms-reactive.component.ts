import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  imports: [ReactiveFormsModule,NgIf,JsonPipe],
  templateUrl: './forms-reactive.component.html',
  styleUrl: './forms-reactive.component.css'
})
export class FormsReactiveComponent {
         private _fb=inject(FormBuilder)

         userForm:FormGroup=this._fb.group({
          userName:['',[Validators.required,Validators.minLength(3)]],
          email:['',[Validators.required,Validators.email]],
          contact:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
            spi:['',[Validators.required,Validators.min(0),Validators.max(10)]],
          enroll_no:['',[Validators.required,Validators.pattern("^[0-9]{8,10}$")]],
         })

         saveData(){
          console.log(this.userForm.value);
        }
    
}


