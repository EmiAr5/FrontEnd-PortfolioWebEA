import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona;
  isLogged = false;

  constructor(private personaS: PersonaService, private tokenS: TokenService) { }
  
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaS.detail(1).subscribe(
      data => {
        this.persona = data;
      }
    )
  }
  
}
