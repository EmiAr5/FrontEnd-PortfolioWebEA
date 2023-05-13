import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona!: Persona;
  

  constructor(private personaS: PersonaService) { }

  ngOnInit(): void {

    this.cargarPersona();
  }



  cargarPersona(): void {
    this.personaS.detail(1).subscribe(
      data => {
        this.persona = data;
      })
  }

}
