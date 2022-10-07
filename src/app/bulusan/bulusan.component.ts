import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulusan',
  templateUrl: './bulusan.component.html',
  styleUrls: ['./bulusan.component.css']
})
export class BulusanComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
