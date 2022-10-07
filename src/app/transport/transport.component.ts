import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  show1:boolean=false
  img1:boolean=false
  img2:boolean=false
  img3:boolean=false
  img4:boolean=false
  img5:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  toogleTag1(){
    this.show1=!this.show1
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
