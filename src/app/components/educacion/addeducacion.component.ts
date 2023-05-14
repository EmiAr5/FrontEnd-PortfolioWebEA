import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-addeducacion',
  templateUrl: './addeducacion.component.html',
  styleUrls: ['./addeducacion.component.css']
})
export class AddeducacionComponent implements OnInit {

  urllogoinst: string;
  institucion: string;
  fechainicio: string;
  fechafin: string;
  carrera: string;
  tituloobtenido: string;
  puntaje: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void { }

  onCreateEducacion(): void {
    const educacion = new Educacion(this.urllogoinst, this.institucion, this.fechainicio, this.fechafin, this.carrera, this.tituloobtenido, this.puntaje);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Educacion no pudo ser creada");
        this.router.navigate(['']);
      }
    )
  }
}
