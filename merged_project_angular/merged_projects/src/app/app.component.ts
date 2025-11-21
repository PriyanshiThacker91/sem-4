import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormEventsComponent } from './form_events/form-events.component';
import { CrudOperationsComponent } from './crudoperations/crud-operations.component';
import { ArrOfObjectsCrudComponent } from './arr_of_objects_crud/arr-of-objects-crud.component';
import { StructuralDirectivesComponent } from './structural_directives/structural-directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'merged_projects';
  private _router = inject(Router)
  logout() {
 
    sessionStorage.clear()
    this._router.navigate(['/login-form'])
  }
}

