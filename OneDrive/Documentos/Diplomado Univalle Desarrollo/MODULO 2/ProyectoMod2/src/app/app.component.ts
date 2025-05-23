import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GESTOR DE TAREAS';
  tasks: { id: number; title: string; completed: boolean }[] = []; // Lista de tareas
  
  addTask(title: string) {
    const newTask = { id: Date.now(), title, completed: false };
    this.tasks = [...this.tasks, newTask]; // Agrega nueva tarea a la lista

    console.log("Nueva tarea agregada:", title);
  }
}
