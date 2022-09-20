import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description:''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }


}
