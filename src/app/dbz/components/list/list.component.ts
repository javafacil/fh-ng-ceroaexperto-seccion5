import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public emitDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(indx: number): void {
    this.emitDeleteCharacter.emit(indx);
  }
}
