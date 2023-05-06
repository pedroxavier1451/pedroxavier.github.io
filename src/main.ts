import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './mensaje/mensaje.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, MensajeComponent, CabeceraComponent, MenuComponent, PiePaginaComponent, ContactoComponent],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  name = 'Pedro';
  cargo = 'Estudiante';

  onMiEvento() {
    console.log('Se ha emitido el evento desde el hijo');
    alert("Se ha emitido el evento desde el hijo");
  }

  contador = 0;
  a = 0;
  b = 0;
  s = 0;
  r = 0;
  m = 0;
  d = 0;

  calcularsuma() {
    this.contador = this.contador + 1;
    this.s = eval('' + this.a) + eval('' + this.b);
    console.log('Suma es: ', this.s);
  }

  calcularresta() {
    this.contador = this.contador + 1;
    this.r = eval('' + this.a) - eval('' + this.b);
    console.log('Resta es: ', this.r);
  }

  calcularmultiplicacion() {
    this.contador = this.contador + 1;
    this.m = eval('' + this.a) * eval('' + this.b);
    console.log('Multipliacion es: ', this.m);
  }

  calculardivision() {
    this.contador = this.contador + 1;
    this.d = eval('' + this.a) / eval('' + this.b);
    console.log('Division es: ', this.d);
  }
}

bootstrapApplication(App);
