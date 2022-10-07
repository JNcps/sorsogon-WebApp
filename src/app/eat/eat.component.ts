import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.css']
})
export class EatComponent implements OnInit {

  show1:boolean=false
  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTag1(){
    this.show1=!this.show1
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
