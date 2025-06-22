import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-categories',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-categories.component.html',
  styleUrl: './task-categories.component.css'
})
export class TaskCategoriesComponent {
 categories = [
    { id: 1, name: 'Tarea' },
    { id: 2, name: 'Trabajo' },
    { id: 3, name: 'Proyecto' }
  ];
  
  newCategoryName = '';

  addCategory(taskForm: any) {
    if (this.newCategoryName.trim()) {
      const newCategory = {
        id: this.categories.length + 1,
        name: this.newCategoryName
      };
      this.categories.push(newCategory);
      this.newCategoryName = ''; // Limpiar campo
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => category.id !== id);
  }

}
