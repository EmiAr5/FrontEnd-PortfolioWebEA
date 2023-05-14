import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-addproyecto',
  templateUrl: './addproyecto.component.html',
  styleUrls: ['./addproyecto.component.css']
})
export class AddproyectoComponent implements OnInit {
enlace: string;
    urlimagen: string;
    nombre: string;
    fechainicio: string;
    fechafin: string;
  descripcion: string;
  
  constructor(private proyectoS: ProyectoService, private router: Router) { }
  
  ngOnInit(): void { }

  onCreateProyecto(): void{
    const proyecto = new Proyecto(this.enlace, this.urlimagen, this.nombre, this.fechainicio, this.fechafin, this.descripcion);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Proyecto no pudo ser creado");
        this.router.navigate(['']);
      }
    )
  }
}

