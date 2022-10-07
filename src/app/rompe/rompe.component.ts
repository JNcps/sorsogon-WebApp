import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rompe',
  templateUrl: './rompe.component.html',
  styleUrls: ['./rompe.component.css']
})
export class RompeComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
