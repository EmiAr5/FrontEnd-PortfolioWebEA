import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';

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
        Swal.fire(
          'Proyecto',
          'El proyecto ha sido modificado con éxito',
          'success'
        );
        this.route.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Proyecto no pudo ser modificado',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}

