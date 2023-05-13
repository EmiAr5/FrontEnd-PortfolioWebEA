import { Component, OnInit } from '@angular/core';
import { Hardskill } from 'src/app/model/hardskill';
import { Idioma } from 'src/app/model/idioma';
import { Softskill } from 'src/app/model/softskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import { IdiomaService } from 'src/app/service/idioma.service';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  softskill: Softskill[] = [];
  hardskill: Hardskill[] = [];
  idioma: Idioma[] = [];

  constructor(private softskillS: SoftskillService, private hardskillS: HardskillService, private idiomaS: IdiomaService) { }
  
  ngOnInit(): void {
    this.cargarSoftSkill();
    this.cargarHardSkill();
    this.cargarIdioma();
  }

  cargarSoftSkill(): void{
    this.softskillS.list().subscribe(
      data => {
        this.softskill = data;
      }
    )
  }

  cargarHardSkill(): void{
    this.hardskillS.list().subscribe(
      data => {
        this.hardskill = data;
      }
    )
  }

  cargarIdioma(): void{
    this.idiomaS.list().subscribe(
      data => {
        this.idioma = data;
      }
    )
  }

  deleteSoftSkill(id?: number): void{
    if (id != undefined) {
      this.softskillS.delete(id).subscribe(
        data => {
          this.cargarSoftSkill();
        }, err => {
          alert("No se pudo eliminar la Soft skill");
        }
      )
    }
  }

  deleteHardSkill(id?: number): void{
    if (id != undefined) {
      this.hardskillS.delete(id).subscribe(
        data => {
          this.cargarHardSkill();
        }, err => {
          alert("No se pudo eliminar la Hard skill");
        }
      )
    }
  }

  deleteIdioma(id?: number): void{
    if (id != undefined) {
      this.idiomaS.delete(id).subscribe(
        data => {
          this.cargarIdioma();
        }, err => {
          alert("No se pudo eliminar el idioma");
        }
      )
    }
  }
}
