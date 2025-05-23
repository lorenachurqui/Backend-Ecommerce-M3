import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'componente-boton-completada',
  standalone: true, // 
  templateUrl: './componente-boton-completada.component.html',
})


export class ComponenteBotonCompletada {
  @Input() etiqueta: string = '✔ Completadas'; 
  @Input() contadorCompletadas: number = 0; // Recibe el número de tareas completadas
  @Output() clicked = new EventEmitter<number>(); // Emite el total actualizado

  incrementarCompletadas() {
    this.contadorCompletadas++;
    this.clicked.emit(this.contadorCompletadas);
  }
}