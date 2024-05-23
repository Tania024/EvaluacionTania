import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent  {


  constructor (private tareaService: TareaService) { }
  tareas: Tarea[] = [];
  titulo: string = '';
  descripcion: string = '';


  ngOnInit(): void {
    this.tareas = this.tareaService.getTareas();

  }

  addTarea(): void {
    const newTarea: Tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion
    };
    this.tareaService.addTarea(newTarea);
    this.titulo = '';
    this.descripcion = '';
    this.tareas = this.tareaService.getTareas();
  }

 deleteTarea(id: number):void{
    this.tareaService.deleteTarea(id);
    this.tareas = this.tareaService.getTareas();
  }
 }

