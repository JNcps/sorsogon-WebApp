import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  show1:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  toogleTag1(){
    this.show1=!this.show1
  }

}
