import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-calendar',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-calendar.component.html',
  styleUrl: './task-calendar.component.css'
})
export class TaskCalendarComponent {
  selectedDate: string = '';
  
  tasks = [
    { id: 1, title: 'Revisión de código', dueDate: '2025-05-22' },
    { id: 2, title: 'Entrega de informe', dueDate: '2025-05-23' },
    { id: 3, title: 'Planificación de proyecto', dueDate: '2025-05-22' }
  ];

  filteredTasks = [...this.tasks]; // Inicialmente, muestra todas las tareas

  filterByDate() {
    if (this.selectedDate) {
      this.filteredTasks = this.tasks.filter(task => task.dueDate === this.selectedDate);
    } else {
      this.filteredTasks = [...this.tasks]; // Si no hay fecha seleccionada, mostrar todas
    }
  }

  viewDetails(id: number) {
    console.log(`Ver detalles de la tarea con ID: ${id}`);
  }


}
