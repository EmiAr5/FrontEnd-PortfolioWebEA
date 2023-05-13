import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoS: ProyectoService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Error al modificar el proyecto");
      this.route.navigate(['']);
    }
    )
  }

  onUpdateProyecto(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        alert("Se modificaron los datos correctamente");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudieron modificar los datos del proyecto")
        this.route.navigate(['']);
      }
    )
  }
}

