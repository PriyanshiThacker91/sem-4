import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validation',
  imports: [FormsModule,JsonPipe,NgIf],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
   user:any={
    username:'',
    contact:'',
    email:'',
    spi:'',
    age:''
   }
}
