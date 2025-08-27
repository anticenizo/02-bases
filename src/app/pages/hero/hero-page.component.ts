import { Signal, signal, ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe]
})


export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
      const description = `${ this.name() } - ${this.age()}`;
      return description;
  })

   capitalizedName = computed( () => this.name().toUpperCase() );

  changeHero(): void{
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void{
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(): void{
    this.age.set(60);
  }
}
