import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiStudentsService } from '../api-students.service';

@Component({
  selector: 'app-user-detail',
  imports: [RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  data:any=[];
  id:any =0
  private _activatedRoute=inject(ActivatedRoute)
  private _api=inject(ApiStudentsService)
  ngOnInit(){
    this.id=this._activatedRoute.snapshot.paramMap.get('id')
    this._api.getById(this.id).subscribe((res:any)=>{
      this.data=res;
    })
    };
}
