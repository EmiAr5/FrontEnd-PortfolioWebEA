import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

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
        alert("Se modificaron los datos correctamente");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudieron modificar los datos de la experiencia")
        this.route.navigate(['']);
      }
    )
  }

}
