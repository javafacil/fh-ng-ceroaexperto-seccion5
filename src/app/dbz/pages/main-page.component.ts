import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  public characters: Character[] = [
    { name: 'Krillin', power: 400 },
    { name: 'Goku', power: 10500 },
    { name: 'Yamcha', power: 300 },
    { name: 'Milk', power: 100 },
  ];

  constructor() {}

  ngOnInit() {}

  addItem(newItem: Character): void {
    this.characters.push(newItem);
  }

  removeItem(index: number): void {
    this.characters.splice(index, 1);
  }
}
