import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
  {
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 8000
  }
];

onNuevoPersonaje(character: Character): void {
  this.characters.push(character);
}

onBorraPersonaje(index: number): void {
  this.characters.splice(index,1);
}
}
