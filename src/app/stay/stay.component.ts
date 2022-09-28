import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay',
  templateUrl: './stay.component.html',
  styleUrls: ['./stay.component.css']
})
export class StayComponent implements OnInit {

  hotel1:boolean=false
  hotel2:boolean=false
  hotel3:boolean=false
  hotel4:boolean=false
  hotel5:boolean=false
  hotel6:boolean=false
  hotel7:boolean=false
  hotel8:boolean=false

  constructor() { }

  ngOnInit(): void { }

  toogleTag(){
    this.hotel1=!this.hotel1
   }

   toogleTag2(){
    this.hotel2=!this.hotel2
   }
   toogleTag3(){
    this.hotel3=!this.hotel3
   }
   toogleTag4(){
    this.hotel4=!this.hotel4
   }
   toogleTag5(){
    this.hotel5=!this.hotel5
   }
   toogleTag6(){
    this.hotel6=!this.hotel6
   }
   toogleTag7(){
    this.hotel7=!this.hotel7
   }
   toogleTag8(){
    this.hotel8=!this.hotel8
   }
}

