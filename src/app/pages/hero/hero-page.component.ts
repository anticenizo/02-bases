import { Signal, signal, ChangeDetectionStrategy, Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  // styleUrls: ['./hero-page.component.css'],
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class HeroPageComponent {

  nameSignal = signal('Ironman');
  ageSignal = signal(45);

  getHeroDescription(name: Signal<string>, age: Signal<number>): string{
    return `Yo soy ${name()} y tengo ${age()} años`;
  }

  changeHero(): void{
    this.nameSignal.update(() => 'Spiderman');
    this.ageSignal.update(() => 22);
  }

  resetForm(): void{
    this.nameSignal.update(() => 'Ironman');
    this.ageSignal.update(() => 45);
  }

  changeAge(): void{
    this.ageSignal.update(() => 60);
  }
}
