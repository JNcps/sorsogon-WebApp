import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  map:boolean=false
  venue1:boolean=false

  constructor() { }

  ngOnInit(): void { }

  toogleTag(){
    this.venue1=!this.venue1
   }

   toogleTagmap(){
    this.map=!this.map
   }
}
