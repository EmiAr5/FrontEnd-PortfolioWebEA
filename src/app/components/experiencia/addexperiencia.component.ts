import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

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
        alert("Experiencia creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Experiencia no pudo ser creada");
        this.router.navigate(['']);
      }
    )
  }
}

