import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto: Proyecto[] = [];
  isLogged = false;

  constructor(private proyectoS: ProyectoService, private tokenS: TokenService) { }

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.list().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

  deleteProyecto(id?: number): void {
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
          this.proyectoS.delete(id).subscribe(
            data => {
              this.cargarProyecto();

            }, err => {
              alert("No se pudo eliminar el proyecto");
            }
          )
          Swal.fire(
            'Proyecto borrado',
            'Se ha borrado el proyecto con éxito',
            'success'
          )
        }
      })
    }
  }
}
