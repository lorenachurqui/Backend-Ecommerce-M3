import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';
import { TaskCalendarComponent } from './task-calendar/task-calendar.component';
import { TaskFeaturedComponent } from './task-featured/task-featured.component';
import { TaskCategoriesComponent } from './task-categories/task-categories.component';
import { TaskAssignmentsComponent } from './task-assignments/task-assignments.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'tasks', component: TaskListComponentComponent }, //Lista de tareas
    { path: 'tasks/:id', component: TaskDetailsComponent },// Detalles de una tarea específica
    { path: 'new-task', component: TaskFormComponent }, //Agregar nueva tarea
    { path: 'progress', component: TaskProgressComponent }, // Panel de progreso
    { path: 'calendar', component: TaskCalendarComponent }, // Calendario de tareas
    { path: 'featured', component: TaskFeaturedComponent }, // Tareas destacadas
    { path: 'categories', component: TaskCategoriesComponent }, // Filtrar tareas por categoría
    { path: 'assignments', component: TaskAssignmentsComponent }, // Asignación de responsables
    { path: '**', redirectTo: '/tasks' } // Manejo de rutas incorrectas
];
