import { Component, OnInit } from '@angular/core';
import { Hardskill } from 'src/app/model/hardskill';
import { Idioma } from 'src/app/model/idioma';
import { Softskill } from 'src/app/model/softskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import { IdiomaService } from 'src/app/service/idioma.service';
import { SoftskillService } from 'src/app/service/softskill.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  softskill: Softskill[] = [];
  hardskill: Hardskill[] = [];
  idioma: Idioma[] = [];
  isLogged = false;

  constructor(private softskillS: SoftskillService, private hardskillS: HardskillService, private idiomaS: IdiomaService, private tokenS: TokenService) { }

  ngOnInit(): void {
    this.cargarSoftSkill();
    this.cargarHardSkill();
    this.cargarIdioma();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSoftSkill(): void {
    this.softskillS.list().subscribe(
      data => {
        this.softskill = data;
      }
    )
  }

  cargarHardSkill(): void {
    this.hardskillS.list().subscribe(
      data => {
        this.hardskill = data;
      }
    )
  }

  cargarIdioma(): void {
    this.idiomaS.list().subscribe(
      data => {
        this.idioma = data;
      }
    )
  }

  deleteSoftSkill(id?: number): void {
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
          this.softskillS.delete(id).subscribe(
            data => {
              this.cargarSoftSkill();

            }, err => {
              alert("No se pudo eliminar la habilidad");
            }
          )
          Swal.fire(
            'Soft skill borrada',
            'Se ha borrado la habilidad con éxito',
            'success'
          )
        }
      })
    }
  }

  deleteHardSkill(id?: number): void {
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
          this.hardskillS.delete(id).subscribe(
            data => {
              this.cargarHardSkill();

            }, err => {
              alert("No se pudo eliminar la habilidad");
            }
          )
          Swal.fire(
            'Hard skill borrada',
            'Se ha borrado la habilidad con éxito',
            'success'
          )
        }
      })
    }
  }

  deleteIdioma(id?: number): void {
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
          this.idiomaS.delete(id).subscribe(
            data => {
              this.cargarIdioma();

            }, err => {
              alert("No se pudo eliminar el idioma");
            }
          )
          Swal.fire(
            'Idioma borrado',
            'Se ha borrado el idioma con éxito',
            'success'
          )
        }
      })
    }
  }
}
