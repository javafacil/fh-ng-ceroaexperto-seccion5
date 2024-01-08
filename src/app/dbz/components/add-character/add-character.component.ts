import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Output()
  public emitCharacterEmitter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.emitCharacterEmitter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
