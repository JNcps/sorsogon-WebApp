import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  img1:boolean=false
  img2:boolean=false
  img3:boolean=false
  img4:boolean=false
  img5:boolean=false
  img6:boolean=false
  img7:boolean=false
  img8:boolean=false
  constructor() { }

  ngOnInit(): void {
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
  toogleTagimg6(){
    this.img6=!this.img6
  }
  toogleTagimg7(){
    this.img7=!this.img7
  }
  toogleTagimg8(){
    this.img8=!this.img8
  }
}
