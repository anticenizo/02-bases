import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";



interface Character {
  id: number
  name: string;
  power: number;
}


@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
  ]);

  /*addCharacter(): void {
    if( !this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update( currentCharacters => [ ...currentCharacters, newCharacter] );
    this.resetFields();
  }*/

  /*resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }*/

}
