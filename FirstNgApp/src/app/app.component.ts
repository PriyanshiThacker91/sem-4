import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,HomeComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
//   title = 'FirstNgApp';
//   stuName='priyanshi'
//   number=425
// isdisable=false
// rollno=56
// date=new Date()
temp=""

// spi=8.96
// object={
//   name:'priya',
//   roll:435,
//   cpi:8.97,
//   branch:'cse'
// }
// amount=9876.765454
// percent=98
// Formated_amount=8769
//title='xyzz'
displayDetail(e:any){
console.log(e.target.value)
this.temp=e.target.value
}
print(){
  console.log("hello")
}
over(e:any){
   console.log("hiii")
   e.target.style.backgroundColor="pink"

}
enter(e:any){
  e.target.style.backgroundColor="yellow"
}
leave(e:any){
  e.target.style.backgroundColor="green"
}
}




