import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService:DbzService) {}

  ngOnInit() {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  addItem(newItem: Character): void {
    this.dbzService.addItemService(newItem);
  }

  removeItem(index: number): void {
    this.dbzService.removeItemService(index);
  }
}
