import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
{
    path:'',component:UsersComponent,
    
},
{
    path:'users/add',component:AddUserComponent
},
{
    path:'users/:id',component:UserDetailComponent
},
{
    path:'users/edit/:id',component:AddUserComponent
}

];
