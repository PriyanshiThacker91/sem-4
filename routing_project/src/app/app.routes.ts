import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent


    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'right',
        component:RightsidebarComponent
    }

];
