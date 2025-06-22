import { Component, OnInit  } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  responsible?: string;
  deadline?: string;
}

@Component({
  selector: 'app-task-progress',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-progress.component.html',
  styleUrl: './task-progress.component.css'
})
export class TaskProgressComponent implements OnInit {
  tasks: Task[] = []; 
  completedTasks = 0;
  totalTasks = 0;
  progressPercentage = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    this.taskService.getTasks().subscribe(
      (data: Task[]) => { 
        this.tasks = data;
        this.calculateProgress();
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }

  calculateProgress() {
    this.totalTasks = this.tasks.length;
    this.completedTasks = this.tasks.filter(task => task.completed).length;
    this.progressPercentage = this.totalTasks > 0 ? Math.round((this.completedTasks / this.totalTasks) * 100) : 0;
  }
}
