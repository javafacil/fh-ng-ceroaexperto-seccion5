import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    { name: 'Krillin', power: 400 },
    { name: 'Goku', power: 10500 },
    { name: 'Yamcha', power: 300 },
    { name: 'Milk', power: 100 },
  ];

  constructor() { }

  addItemService(newItem: Character): void {
    this.characters.push(newItem);
  }

  removeItemService(index: number): void {
    this.characters.splice(index, 1);
  }
}
