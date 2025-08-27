import { Signal, signal, ChangeDetectionStrategy, Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string{
    return `Yo soy ${this.name()} y tengo ${this.age()} años`;
  }

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
