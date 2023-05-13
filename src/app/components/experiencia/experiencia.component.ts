import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private experienciaS: ExperienciaService) { }

  ngOnInit(): void { 
    this.cargarExperiencia();
  }

  cargarExperiencia(): void{
    this.experienciaS.list().subscribe(
      data => {
        this.experiencia = data;
      }
    )
  }

  deleteExperiencia(id?: number): void{
    if(id != undefined){
      this.experienciaS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar la experiencia")
        }
      )
    }
  }
}
