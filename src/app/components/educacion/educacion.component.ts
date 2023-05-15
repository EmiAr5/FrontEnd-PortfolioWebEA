import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  isLogged = false;

  constructor(private educacionS: EducacionService, private tokenS: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.list().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  deleteEducacion(id?: number): void {
    if (id != undefined) {
      Swal.fire({
        title: '¿Está seguro que desea eliminar este componente?',
        text: "Esta acción no podrá ser revertida",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.educacionS.delete(id).subscribe(
            data => {
              this.cargarEducacion();

            }, err => {
              alert("No se pudo eliminar la educación");
            }
          )
          Swal.fire(
            'Educación borrada',
            'Se ha borrado la educación con éxito',
            'success'
          )
        }
      })
    }
  }
}
