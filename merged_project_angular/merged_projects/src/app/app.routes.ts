import { Routes } from '@angular/router';
import { ArrOfObjectsCrudComponent } from './arr_of_objects_crud/arr-of-objects-crud.component';
import { FormEventsComponent } from './form_events/form-events.component';
import { CrudOperationsComponent } from './crudoperations/crud-operations.component';
import { StructuralDirectivesComponent } from './structural_directives/structural-directives.component';
import { ValidationComponent } from './validation/validation.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { guards1Guard } from './guards-1.guard';

export const routes: Routes = [
    {
        path:'Resume',
        component:FormEventsComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'crud-operations',
        component:CrudOperationsComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'arr_of_objects',
        component:ArrOfObjectsCrudComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'stuctural_directives',
        component:StructuralDirectivesComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'validation',
        component:ValidationComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'reactiveForms',
        component:ReactiveFormsComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'forms-reactive',
        component:FormsReactiveComponent,
        canActivate:[guards1Guard]
    },
    {
        path:'SignupForm',
        component:SignupFormComponent,
        
    },
    {
        path:'login-form',
        component:LoginFormComponent
    },
];
