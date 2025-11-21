import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';

export const routes: Routes = [
    {
        path:'contact',component:FooterComponent
    },
    {
        path:'home',component:ContentComponent
    },
    {
        path:'about',component:LeftsidebarComponent
    }
    
];
