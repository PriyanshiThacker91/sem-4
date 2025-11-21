import { Component, inject } from '@angular/core';
import { ApiStudentsService } from '../api-students.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [RouterOutlet,NgFor,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
title = 'api';
  private _api=inject(ApiStudentsService)
  private _router=inject(Router)
  arr=[{
    id:"",
    name:"",
    avatar:"",
    createdAt:""
  }
  ]
  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      console.log(res)
      this.arr=res;
    });
  }

  gotodetails(id:any){
    // alert(id)
         this._router.navigate(['/users', id])
  }

 delete(id:any){
    this._api.deleteAll(id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit();
    })
  
 }

}
