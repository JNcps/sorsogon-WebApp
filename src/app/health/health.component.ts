import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  venue1:boolean=false

  constructor() { }

  ngOnInit(): void { }

  toogleTag(){
    this.venue1=!this.venue1
   }
}
