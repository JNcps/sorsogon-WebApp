import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malawmawan',
  templateUrl: './malawmawan.component.html',
  styleUrls: ['./malawmawan.component.css']
})
export class MalawmawanComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
