import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goingto',
  templateUrl: './goingto.component.html',
  styleUrls: ['./goingto.component.css']
})
export class GoingtoComponent implements OnInit {

  img1:boolean=false
  img2:boolean=false
  img3:boolean=false
  img4:boolean=false
  img5:boolean=false
  airplane:boolean=false
  bus:boolean=false

  constructor() { }

  ngOnInit(): void { }

  toogleTag1(){
    this.airplane =! this.airplane
  }

  toogleTag2(){
    this.bus =! this.bus
  }
  toogleTagimg1(){
    this.img1 =! this.img1
  }
  toogleTagimg2(){
    this.img2 =! this.img2
  }
  toogleTagimg3(){
    this.img3 =! this.img3
  }
  toogleTagimg4(){
    this.img4 =! this.img4
  }
  toogleTagimg5(){
    this.img5 =! this.img5
  }
}
