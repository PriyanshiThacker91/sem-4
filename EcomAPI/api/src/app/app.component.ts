import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiStudentsService } from './api-students.service';
import { NgFor } from '@angular/common';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';
  private _api=inject(ApiStudentsService)
  private _router=inject(Router)
  arr=[{
    name:"",
    avatar:"",
    createdAt:"",
    id:""
  }
  ]
  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      console.log(res)
      this.arr=res;
    });
  }

  showmore(id:any){
    this._router.navigate(['users', id])
  }
  
}
