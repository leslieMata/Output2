import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent {
    public heroes : Heroe[] = [
      {nombre : 'spicerman', poder : 5000},
      {nombre : 'Hulk', poder : 30000}
    ];
    @Output()
    public emitirHeroe : EventEmitter<Heroe[]> = new EventEmitter();
    public Heroe = [];
    public enviarHeroe() {
      this.emitirHeroe.emit(this.Heroe);
    }

}
