import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [CommonModule, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  student:any={
    project:[],
    certiproject:[]
  }
  datafill(e:any){
    this.student={...this.student,[e.target.name]:e.target.value}
    console.log(e.target.name)

  }
  tempproject:any={}
  makeproject(e:any){
    this.tempproject={...this.tempproject,[e.target.name]:e.target.value}
  }
  addproject(e:any){
    e.preventDefault()
   this.student.project.push(this.tempproject)


  }
  tempcerti:any={}
  certificate_project(e:any){
    this.tempcerti={...this.tempcerti,[e.target.name]:e.target.value}
  }
  addcerti(e:any){
    e.preventDefault()
    this.student.certiproject.push(this.tempcerti)
  }
}
