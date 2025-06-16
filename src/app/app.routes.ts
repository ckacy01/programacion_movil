import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'tareas',
    loadComponent: () => import('./pages/tareas/tareas.page').then(m => m.TareasPage),
  },
];
