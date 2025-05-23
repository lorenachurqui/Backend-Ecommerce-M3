import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-featured',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './task-featured.component.html',
  styleUrl: './task-featured.component.css'
})
export class TaskFeaturedComponent {

}
