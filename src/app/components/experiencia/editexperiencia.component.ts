import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(private experienciaS: ExperienciaService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar la experiencia");
        this.route.navigate(['']);
      }
    )
  }

  onUpdateExperiencia(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaS.update(id, this.experiencia).subscribe(
      data => {
        Swal.fire(
          'Experiencia',
          'La experiencia ha sido modificada con éxito',
          'success'
        );
        this.route.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Experiencia no pudo ser modificada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }

}
