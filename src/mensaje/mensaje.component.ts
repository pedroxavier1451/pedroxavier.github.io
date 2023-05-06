import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  standalone: true,
  styleUrls: ['./mensaje.component.css'],
})
export class MensajeComponent implements OnInit {

  @Input() name = "Pedro"
  @Output() miEvento = new EventEmitter<void>()

  onButtonClick() {
    this.miEvento.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}