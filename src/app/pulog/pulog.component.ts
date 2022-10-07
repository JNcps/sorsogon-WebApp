import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulog',
  templateUrl: './pulog.component.html',
  styleUrls: ['./pulog.component.css']
})
export class PulogComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
