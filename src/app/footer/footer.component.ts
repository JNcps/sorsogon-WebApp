import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showMe:boolean=false
  logout:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toogleTag(){
    this.showMe=!this.showMe
   }
   toogleTag2(){
    this.logout=!this.logout
   }

}
