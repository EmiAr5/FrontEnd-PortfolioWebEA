import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editinfopersonal',
  templateUrl: './editinfopersonal.component.html',
  styleUrls: ['./editinfopersonal.component.css']
})
export class EditinfopersonalComponent {
  persona: Persona;

  constructor(private personaS: PersonaService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.detail(1).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert('Error al modificar el header');
        this.route.navigate(['']);
      }
    )
  }

  onUpdateInfopersonal(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.update(1, this.persona).subscribe(
      data => {
        Swal.fire(
          'Información personal',
          'La sección de Información personal ha sido modificada con éxito',
          'success'
        );
        this.route.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Información personal no pudo ser modificada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}
