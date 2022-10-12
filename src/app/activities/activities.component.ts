import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  hotel1:boolean=false
  hotel2:boolean=false
  hotel3:boolean=false
  hotel4:boolean=false
  img1:boolean=false
  img2:boolean=false
  img3:boolean=false
  img4:boolean=false
  img5:boolean=false
  constructor(private crudService : CrudService) { }

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
