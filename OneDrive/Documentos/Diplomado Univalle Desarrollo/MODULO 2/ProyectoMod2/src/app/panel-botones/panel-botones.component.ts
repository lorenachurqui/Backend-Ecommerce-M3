import { Component } from '@angular/core';
import { ComponenteBotonCompletada } from '../componente-boton-completada/componente-boton-completada.component';
import { ComponenteBotonPendiente } from '../componente-boton-pendiente/componente-boton-pendiente.component';

@Component({
  selector: 'panel-botones',
  standalone: true,
  imports: [ComponenteBotonCompletada, ComponenteBotonPendiente], // 🔥 Ahora debe funcionar
  templateUrl: './panel-botones.component.html',
  styleUrls: ['./panel-botones.component.css']
})

export class PanelBotonesComponent {
  contadorCompletadas = 0;
  contadorPendientes = 0;

  actualizarCompletadas(valor: number) {
    this.contadorCompletadas = valor;
  }

  actualizarPendientes(valor: number) {
    this.contadorPendientes = valor;
  }
}