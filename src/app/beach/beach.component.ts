import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css']
})
export class BeachComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
