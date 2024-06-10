import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonajes: Character[] =
    [
      {
        id: '',
        name: 'Trunks',
        power :10
      }
    ];


  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }

}


