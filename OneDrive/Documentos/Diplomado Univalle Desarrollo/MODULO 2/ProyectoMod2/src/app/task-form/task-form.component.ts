import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // incluir FormsModule
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<string>();

  newTaskTitle = '';
  newTaskDescription = ''; 
  newTaskRegistrationDate: string = new Date().toISOString().split('T')[0]; // fecha de registro automática
  newTaskReminderDate: string = ''; // fecha recordatorio
  newTaskCategory: string = ''; // Categoría: tarea, trabajo, proyecto
  newTaskPriority: string = ''; // Prioridad: Baja, Media, Alta
  newTaskDueDate: string = ''; // Fecha de vencimiento

validateReminderDate() {
  if (this.newTaskReminderDate > this.newTaskDueDate) {
    this.newTaskReminderDate = ''; // Limpia automáticamente la fecha
  }
}
clearReminderDate() {
  this.newTaskReminderDate = ''; // Borra la fecha de recordatorio al hacer clic en la fecha de vencimiento
}

  addTask(taskForm: any) {
    if (!this.newTaskTitle.trim()) return;

    this.taskAdded.emit(this.newTaskTitle);
    this.newTaskTitle = ''; // Limpia campos
    taskForm.resetForm(); // resetea
  }
}