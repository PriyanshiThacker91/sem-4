import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentsService } from '../api-students.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
     userForm=new FormGroup({
         createdAt:new FormControl(''),
         name:new FormControl(''),
         avatar:new FormControl(''),
         mobile:new FormControl(''),
         email:new FormControl(''),

     })
     
        private _router=inject(Router);
        
        private _api=inject(ApiStudentsService);

        private_activatedRoute=inject(ActivatedRoute);

        id:any=null;

       ngOnInit(){
        this.id=this.private_activatedRoute.snapshot.paramMap.get("id");

        if(this.id!=null){
          this._api.getById(this.id).subscribe(res=>{
           // console.log(res);
           this.userForm.patchValue(res);
          })
        }
       }

     SaveData(){
      //console.log(this.userForm.value);
      
      if(this.id){
        this._api.edit(this.id,this.userForm.value).subscribe(res=>{
          this._router.navigate(['/'])
        })
      }
        else{
          this._api.insert(this.userForm.value).subscribe(res=>{
            console.log(res);
            this._router.navigate(['/'])
          })
        }
      
      

     }
    }
