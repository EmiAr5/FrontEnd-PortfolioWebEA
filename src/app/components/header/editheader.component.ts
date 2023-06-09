import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editheader',
  templateUrl: './editheader.component.html',
  styleUrls: ['./editheader.component.css']
})
export class EditheaderComponent implements OnInit {

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

  onUpdateHeader(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.update(1, this.persona).subscribe(
      data => {
        Swal.fire(
          'Header',
          'La sección de Header ha sido modificada con éxito',
          'success'
        );
        this.route.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Header no pudo ser modificada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }



}
