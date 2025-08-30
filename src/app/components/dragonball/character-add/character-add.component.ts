import { Component, signal, output } from "@angular/core";
import type { Character } from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',

})
export class CharacterAddComponent{
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();
  /*characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
  ]);*/

  addCharacter(): void {
    if( !this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter: Character = {
      id: Math.floor( Math.random() * 10000 ),
      name: this.name(),
      power: this.power()
    };

    //this.characters.update( currentCharacters => [ ...currentCharacters, newCharacter] );
    this.newCharacter.emit( newCharacter );
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }

}



