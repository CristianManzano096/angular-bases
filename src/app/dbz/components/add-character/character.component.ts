import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: 'character.component.html'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 1
  };

  emitCharacter(): void{
    if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    console.log(this.character);
    this.character = { name: '', power: 0};
  }
}
