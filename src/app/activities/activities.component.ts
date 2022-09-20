import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {

  }

}
