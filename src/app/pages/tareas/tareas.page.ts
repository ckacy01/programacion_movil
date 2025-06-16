import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  checkboxOutline, 
  addCircleOutline, 
  createOutline, 
  flagOutline, 
  chevronDownOutline,
  alertCircleOutline,
  warningOutline,
  checkmarkCircleOutline,
  addCircle,
  listOutline,
  documentTextOutline,
  flag,
  trashOutline,
  trashBinOutline,
  clipboardOutline,
  happyOutline,
  arrowUpOutline
} from 'ionicons/icons';

interface Tarea {
  id: number;
  titulo: string;
  prioridad: 'alta' | 'media' | 'baja';
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TareasPage {
  nuevaTarea: string = '';
  prioridadSeleccionada: 'alta' | 'media' | 'baja' = 'media';
  tareas: Tarea[] = [];
  private contadorId = 1;

  prioridades: Array<{valor: 'alta' | 'media' | 'baja', nombre: string, color: string}> = [
    { valor: 'alta', nombre: 'Alta', color: '#ff4444' },
    { valor: 'media', nombre: 'Media', color: '#ffaa00' },
    { valor: 'baja', nombre: 'Baja', color: '#00dd00' }
  ];

  mostarSelectorPrioridad: boolean = false;

  constructor() {
    addIcons({
      'checkbox-outline': checkboxOutline,
      'add-circle-outline': addCircleOutline,
      'create-outline': createOutline,
      'flag-outline': flagOutline,
      'chevron-down-outline': chevronDownOutline,
      'alert-circle-outline': alertCircleOutline,
      'warning-outline': warningOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'add-circle': addCircle,
      'list-outline': listOutline,
      'document-text-outline': documentTextOutline,
      'flag': flag,
      'trash-outline': trashOutline,
      'trash-bin-outline': trashBinOutline,
      'clipboard-outline': clipboardOutline,
      'happy-outline': happyOutline,
      'arrow-up-outline': arrowUpOutline
    });
  }

  seleccionarPrioridad(prioridad: 'alta' | 'media' | 'baja') {
    this.prioridadSeleccionada = prioridad;
    this.mostarSelectorPrioridad = true;
  }

  obtenerColorPrioridad(prioridad: 'alta' | 'media' | 'baja'): string {
    const prioridadObj = this.prioridades.find(p => p.valor === prioridad);
    return prioridadObj ? prioridadObj.color : '#666';
  }

  obtenerNombrePrioridad(prioridad: 'alta' | 'media' | 'baja'): string {
    const prioridadObj = this.prioridades.find(p => p.valor === prioridad);
    return prioridadObj ? prioridadObj.nombre : '';
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() === '') {
      return;
    }

    const tarea: Tarea = {
      id: this.contadorId++,
      titulo: this.nuevaTarea.trim(),
      prioridad: this.prioridadSeleccionada,
      completada: false
    };

    this.tareas.push(tarea);
    this.nuevaTarea = '';
  }

  toggleCompletada(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  eliminarTodasLasTareas() {
    this.tareas = [];
  }

  get hayTareas(): boolean {
    return this.tareas.length > 0;
  }
}