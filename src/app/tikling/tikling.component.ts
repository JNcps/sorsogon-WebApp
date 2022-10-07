import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tikling',
  templateUrl: './tikling.component.html',
  styleUrls: ['./tikling.component.css']
})
export class TiklingComponent implements OnInit {

  map:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  toogleTagmap(){
    this.map=!this.map
   }
}
