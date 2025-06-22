import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


 
@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  imports: [CommonModule, FormsModule,RouterModule]
})
export class TaskItemComponent {
  @Input() task!: { id: number; title: string; completed: boolean };

  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<{ id: number; title: string }>(); 

  isEditing = false;

  onToggleCompleted() {
    this.toggleCompleted.emit(this.task.id);
  }

  onDelete() {
    this.deleteTask.emit(this.task.id);
  }

  toggleEdit() {
    if (this.isEditing) {
      this.editTask.emit({ id: this.task.id, title: this.task.title });
    }
    this.isEditing = !this.isEditing;
  }
}