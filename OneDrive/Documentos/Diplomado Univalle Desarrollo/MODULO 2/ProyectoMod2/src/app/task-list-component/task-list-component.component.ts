import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../services/task.service'; // Importar el servicio
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent implements OnInit {
  @Input() tasks: { id: number; title: string; completed: boolean }[] = [];
  userAddedTasks: { id: number; title: string; completed: boolean }[] = [];
  contadorCompletadas: any;

  currentPage = 1;
  itemsPerPage = 10;

get totalPages() {
  return Math.ceil(this.tasks.length / this.itemsPerPage);
}

get paginatedTasks() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.tasks.slice(startIndex, endIndex); // 10 registros por pagina
}

changePage(direction: number) {
  const newPage = this.currentPage + direction;
  if (newPage > 0 && newPage <= this.totalPages) {
    this.currentPage = newPage;
  }
}
  
  constructor(private taskService: TaskService, private cdRef: ChangeDetectorRef) {}
  
    ngOnInit() {
    const savedTasks = localStorage.getItem('userTasks');
    if (savedTasks) {
      this.userAddedTasks = JSON.parse(savedTasks); // Restaurar tareas guardadas
      }
      this.loadTasksFromAPI(); // Fusiona datos de API con tareas manuales
      console.log("🔹 Tareas restauradas desde LocalStorage:", this.userAddedTasks);
    }
    
    mergeTasks(apiTasks: any[]) {
      return [...apiTasks.slice(0, 6), ...this.userAddedTasks]; // Mantiene tareas manuales
    }
    
    loadTasksFromAPI() {
      this.taskService.getTasks().subscribe(
        (data) => {
           console.log('🔹 Tareas obtenidas desde API:', data);
      this.tasks = this.mergeTasks(data); // Fusiona sin perder tareas manuales
      this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
    }
    
    addTask(title: string) {
      if (!title.trim()) {
        console.error('Error: El título es obligatorio.');
        return;
      }
      
      if (title.length < 3) {
        console.error('Error: La tarea debe tener al menos 3 caracteres.');
        return;
      }
      
      const newTask = { id: Date.now(), title, completed: false };
      this.userAddedTasks = [...this.userAddedTasks, newTask]; // Agrega nueva tarea
      
      localStorage.setItem('userTasks', JSON.stringify(this.userAddedTasks)); // Guarda en LocalStorage
      this.tasks = this.mergeTasks(this.tasks.length ? this.tasks : []); // Asegura que `tasks` siempre se actualice con las tareas manuales
      this.cdRef.detectChanges();
    }
    
    trackTask(index: number, task: { id: number; title: string; completed: boolean }) {
      return task.id;
    }
    
    onEditTask(taskId: number, newTitle: string) {
      this.taskService.editTask(taskId, newTitle).subscribe((updatedTask) => {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) task.title = updatedTask.title;
      });
    }

    onDeleteTask(taskId: number) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
      });
    }
  
    onToggleCompleted(taskId: number) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        this.taskService.toggleTaskCompletion(taskId, !task.completed).subscribe((updatedTask) => {
          task.completed = updatedTask.completed;
        });
      }
    }
    
    isInvalid: boolean = true; // Estado inicial (deshabilitado)
    validateInput(value: string) {
      this.isInvalid = value.length < 3; // Si es menor a 3, sigue deshabilitado
      }
}