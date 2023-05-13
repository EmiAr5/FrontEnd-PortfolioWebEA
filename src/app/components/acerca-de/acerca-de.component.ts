import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona;

  constructor(private personaS: PersonaService) { }
  
  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void{
    this.personaS.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }
  
}
