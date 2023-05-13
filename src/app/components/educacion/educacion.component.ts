import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService) {}

  ngOnInit(): void{
    this.cargarEducacion();
  }

  cargarEducacion(): void{
    this.educacionS.list().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  deleteEducacion(id?: number): void{
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar la educación");
        }
      )
    }
  }
}
