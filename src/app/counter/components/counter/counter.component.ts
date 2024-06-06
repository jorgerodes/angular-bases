import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

      <h3> Counter : {{ counter }}</h3>

      <button (click)="increaseBy()">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="decreaseBy()">-1</button>

  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;
  increaseBy(value: number = 1) : void
  {
    this.counter = this.counter + value;
  };
  decreaseBy(value: number = 1) : void
  {
    this.counter = this.counter - value;
  };
  reset() : void
  {
    this.counter = 10;
  };

}
