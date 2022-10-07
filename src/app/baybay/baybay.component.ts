import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baybay',
  templateUrl: './baybay.component.html',
  styleUrls: ['./baybay.component.css']
})
export class BaybayComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
