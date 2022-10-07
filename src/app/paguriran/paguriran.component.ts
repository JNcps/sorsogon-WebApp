import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paguriran',
  templateUrl: './paguriran.component.html',
  styleUrls: ['./paguriran.component.css']
})
export class PaguriranComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toogleTagmap(){
    this.map=!this.map
   }
}
