import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  hotel1:boolean=false
  hotel2:boolean=false
  hotel3:boolean=false
  hotel4:boolean=false
  hotel5:boolean=false
  hotel6:boolean=false
  hotel7:boolean=false
  hotel8:boolean=false
  img1:boolean=false
  img2:boolean=false
  img3:boolean=false
  img4:boolean=false
  img5:boolean=false

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

   toogleTagimg1(){
    this.img1=!this.img1
  }
  toogleTagimg2(){
    this.img2=!this.img2
  }
  toogleTagimg3(){
    this.img3=!this.img3
  }
  toogleTagimg4(){
    this.img4=!this.img4
  }
  toogleTagimg5(){
    this.img5=!this.img5
  }
}

