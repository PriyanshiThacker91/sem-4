import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud-operations',
  imports: [NgFor, FormsModule],
  templateUrl: './crud-operations.component.html',
  styleUrl: './crud-operations.component.css'
})
export class CrudOperationsComponent {
  title = 'crud_operations';

  textfieldvalue = '';
  stu = ['Darshan', 'University', 'Rajkot'];
  searchStu = ''; 
  filteredStu = [...this.stu]; 
  iseditable=-1;
  storevalue="add";


  addstu() {
    console.log(this.iseditable)
    if (this.iseditable==-1) {
      this.stu.push(this.textfieldvalue);
      this.textfieldvalue = ''; 
      this.filteredStu=[...this.stu]
      this.storevalue="add";
      return
    }
    this.stu[this.iseditable]=this.textfieldvalue;
    this.filteredStu=[...this.stu]
  
  }




  searchfield(e:any) {
   if(e.key=="Delete"){
    this.stu=[...this.filteredStu]
   }
    this.filterStudents();
  }

  filterStudents() {
    this.stu = this.stu.filter(student => 
      student.toLowerCase().includes(this.searchStu.toLowerCase())
    );
  }
  deletestu(i:any){
    // console.log(i);
    this.stu.splice(i, 1);//splice(startIndex, numberOfItemsToRemove)

    // Re-filter the student list after deletion
    this.filterStudents();
    
  }
  updatestu(i:any){
    this.iseditable=i;
   this.textfieldvalue=this.stu[i]
   this.storevalue="edit"
  }
}
