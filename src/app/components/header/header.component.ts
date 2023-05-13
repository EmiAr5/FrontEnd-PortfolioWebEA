import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona!: Persona;
  isLogged = false;


  constructor(private personaS: PersonaService, private tokenS: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenS.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }



  cargarPersona(): void {
    this.personaS.detail(1).subscribe(
      data => {
        this.persona = data;
      })
  }

  login() {
    this.router.navigate(['/login']);
  }
  onLogOut(): void {
    this.tokenS.logOut();
    location.reload();
  }

  editHeader() {
    this.router.navigate(['/editHeader/{{Persona.id}}']);
  }

}
