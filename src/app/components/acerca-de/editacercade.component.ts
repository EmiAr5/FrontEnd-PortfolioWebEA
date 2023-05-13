import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent {
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

  onUpdateAcercade(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaS.update(1, this.persona).subscribe(
      data => {
        alert("Se modificaron los datos correctamente");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudieron modificar los datos del header")
        this.route.navigate(['']);
      }
    )
  }
}
