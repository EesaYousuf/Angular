import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular213';
  name ='mohmmad hussain';
  fruits =["apple","banana","mango","graps"];
  helloMassage(){
    return "hello hussain";
  }
  changeData(){
    this.name ='eesa'
  }
}
