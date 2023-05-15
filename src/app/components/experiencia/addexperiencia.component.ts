import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {

  urllogocomp: string;
  fechainicio: string;
  fechafin: string;
  puesto: string;
  compania: string;
  descripciontrabajo: string;


  constructor(private experienciaS: ExperienciaService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onCreateExperiencia(): void {
    const experiencia = new Experiencia(this.urllogocomp, this.fechainicio, this.fechafin, this.puesto, this.compania, this.descripciontrabajo);
    this.experienciaS.save(experiencia).subscribe(
      data => {
        Swal.fire(
          'Experiencia creada',
          'La experiencia ha sido creada con éxito',
          'success'
        );
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Experiencia no pudo ser creada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}

