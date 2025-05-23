import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-assignments',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './task-assignments.component.html',
  styleUrls: ['./task-assignments.component.css']
})
export class TaskAssignmentsComponent implements OnInit {
  tasks: { id: number; title: string }[] = [];
  users = [
    { id: 1, name: 'Lorena' },
    { id: 2, name: 'Carlos' },
    { id: 3, name: 'Ana' }
  ];
  selectedTask = '';
  selectedUser = '';

   assignments: { taskTitle: string; userName: string }[] = [];

  assignTask() {
    const taskTitle = this.tasks.find(task => task.id === Number(this.selectedTask))?.title || '';
    const userName = this.users.find(user => user.id === Number(this.selectedUser))?.name || '';

    if (taskTitle && userName) {
      this.assignments.push({ taskTitle, userName });
      this.selectedTask = '';
      this.selectedUser = ''; 
    }
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data; // Asigna lista de tareas obtenidas del servicio
        console.log("📌 Tareas obtenidas:", this.tasks);
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }
  
}