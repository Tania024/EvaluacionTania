import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea [] = [];
  private idCounter = 1;

  constructor() { }

  getTareas(): Tarea[] {
    return this.tareas;
  }

  addTarea(tarea: Tarea): void {
    tarea.id = this.idCounter++;
    this.tareas.push(tarea);
  }

  deleteTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

}
