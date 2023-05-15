import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsoftskill',
  templateUrl: './addsoftskill.component.html',
  styleUrls: ['./addsoftskill.component.css']
})
export class AddsoftskillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private softskillS: SoftskillService, private router: Router) { }

  ngOnInit(): void { }

  onCreateSS(): void {
    const softskill = new Softskill(this.nombre, this.porcentaje);
    this.softskillS.save(softskill).subscribe(
      data => {
        Swal.fire(
          'Habilidad creada',
          'La Soft Skill ha sido creada con éxito',
          'success'
        );
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Soft Skill no pudo ser creada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}
