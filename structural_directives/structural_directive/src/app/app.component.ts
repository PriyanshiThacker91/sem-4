import { CommonModule, NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [NgIf,NgSwitch,NgClass,NgSwitchCase,CommonModule,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structural_directive';
  show:boolean=true
  month=prompt("enter month no.")
  mycolor={color:'red'}
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
