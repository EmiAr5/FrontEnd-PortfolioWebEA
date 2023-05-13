import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(private proyectoS: ProyectoService) { }
  
  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void{
    this.proyectoS.list().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

  deleteProyecto(id?: number): void{
    if (id != undefined) {
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar el proyecto");
        }
      )
    }
  }
  
}
