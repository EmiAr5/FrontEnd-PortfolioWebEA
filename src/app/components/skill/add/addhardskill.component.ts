import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardskill } from 'src/app/model/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addhardskill',
  templateUrl: './addhardskill.component.html',
  styleUrls: ['./addhardskill.component.css']
})
export class AddhardskillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private hardskillS: HardskillService, private router: Router) { }

  ngOnInit(): void { }

  onCreateHS(): void {
    const hardskill = new Hardskill(this.nombre, this.porcentaje);
    this.hardskillS.save(hardskill).subscribe(
      data => {
        Swal.fire(
          'Habilidad creada',
          'La Hard Skill ha sido creada con éxito',
          'success'
        );
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Hard Skill no pudo ser creada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}

