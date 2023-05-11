import { Component } from '@angular/core';
import { Heroe } from './interfaces/heroe.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public recibeNombre(nombre : string){
    console.log(nombre);
  }
  public recibeHeroe(heroes : Heroe){
    console.log(heroes);
  }
}
