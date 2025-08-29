import { Component, computed, signal } from "@angular/core";
import { NgClass } from "@angular/common";


interface Character {
  id: number
  name: string;
  power: number;
}


@Component({  selector: 'app-dragonball-page',

  templateUrl: './dragonball-page.component.html',

})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
    { id: 3, name: 'Piccolo', power: 3000},
    { id: 4, name: 'Yamcha', power: 500},
  ]);

  addCharacter(): void {
    console.log({ name: this.name(), power: this.power() });

  }

    // powerClasses = computed(() => {
    //   return {
    //       'text-danger': true
    //   }
    // })

  }
