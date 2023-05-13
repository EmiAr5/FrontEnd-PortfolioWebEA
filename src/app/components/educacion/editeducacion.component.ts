import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private educacionS: EducacionService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(data => {
      this.educacion = data;
    }, err => {
      alert("Error al modificar la educacion");
      this.route.navigate(['']);
    }
    )
  }

  onUpdateEducacion(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        alert("Se modificaron los datos correctamente");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudieron modificar los datos de la educacion")
        this.route.navigate(['']);
      }
    )
  }
}
