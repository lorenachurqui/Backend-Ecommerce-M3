import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'componente-boton-pendiente',
  standalone: true, 
  templateUrl: './componente-boton-pendiente.component.html',
})


export class ComponenteBotonPendiente {
  @Input() etiqueta: string = '⏳ Pendientes'; 
  @Input() contadorPendientes: number = 0; // Recibe el número de tareas 
  @Output() clicked = new EventEmitter<number>(); // Emite el total actualizado

  incrementarPendientes() {
    this.contadorPendientes++;
    this.clicked.emit(this.contadorPendientes);
  }
}