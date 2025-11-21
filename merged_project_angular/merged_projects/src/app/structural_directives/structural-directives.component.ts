import { CommonModule, NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [NgIf,NgSwitch,NgClass,NgSwitchCase,CommonModule,NgStyle],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  title = 'structural_directive';
  show:boolean=true
  month=prompt("enter month no.")
  // mycolor={color:'red'}
  obj={}
  interval:any=""

  start(){
    clearInterval(this.interval)
    this.interval=setInterval(()=>{
    let r=Math.ceil(Math.random()*255)
    let g=Math.ceil(Math.random()*255)
    let b=Math.ceil(Math.random()*255)
  
    this.obj={
      'background-color':"rgb("+r+","+g+","+b+")",
     "height":"100vh"
    }
  },500)
  }
  stop(){
   clearInterval(this.interval)
  }
  togglevalue(){
    this.show=!this.show
    console.log(this.show)
  }
}

