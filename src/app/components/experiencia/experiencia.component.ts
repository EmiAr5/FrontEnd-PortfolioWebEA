import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];
  isLogged= false;

  constructor(private experienciaS: ExperienciaService, private tokenS: TokenService) { }

  ngOnInit(): void { 
    this.cargarExperiencia();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
