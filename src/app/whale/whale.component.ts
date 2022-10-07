import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whale',
  templateUrl: './whale.component.html',
  styleUrls: ['./whale.component.css']
})
export class WhaleComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
