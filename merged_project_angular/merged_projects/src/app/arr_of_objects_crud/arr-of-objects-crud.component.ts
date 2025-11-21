import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-arr-of-objects-crud',
  imports: [NgFor,FormsModule],
  templateUrl: './arr-of-objects-crud.component.html',
  styleUrl: './arr-of-objects-crud.component.css'
})
export class ArrOfObjectsCrudComponent {
 
  title = 'array_of_objects';
 
  stu = [
    {name:"priya",surname:"thacker",spi:"8.8",branch:"bsc hons"},
    {name:"xyz",surname:"somaiya",spi:"8.5",branch:"btech"},
    {name:"abc",surname:"patel",spi:"8.9",branch:"civil"},
  ];
  searchStu = ''; 
  filteredStu = [...this.stu]; 
  iseditable=-1;
  storevalue="add";
  textfieldvalue = {
    name:"",
    surname:"",
    spi:"",
    branch:""
  };

  addstu() {
    console.log(this.iseditable)
    if (this.iseditable==-1) {
      this.stu.push({...this.textfieldvalue});
      this.textfieldvalue.name=""; 
      this.textfieldvalue.surname=""; 
      this.textfieldvalue.spi=""; 
      this.textfieldvalue.branch=""; 
      this.filteredStu=[...this.stu]
      this.storevalue="add";
      return
    }
    this.stu[this.iseditable].name=this.textfieldvalue.name;
    this.stu[this.iseditable].surname=this.textfieldvalue.surname;
    this.stu[this.iseditable].spi=this.textfieldvalue.spi;
    this.stu[this.iseditable].branch=this.textfieldvalue.branch;
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
      student.name.toLowerCase().includes(this.searchStu.toLowerCase())
      
      
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
    this.textfieldvalue.name=this.stu[i].name;
    this.textfieldvalue.surname=this.stu[i].surname; 
    this.textfieldvalue.spi=this.stu[i].spi; 
    this.textfieldvalue.branch=this.stu[i].branch; 
   this.storevalue="edit"
  }
 
}
