import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-addidioma',
  templateUrl: './addidioma.component.html',
  styleUrls: ['./addidioma.component.css']
})
export class AddidiomaComponent implements OnInit {
  nombre: string;
  escritura: string;
  lectura: string;
  oralidad: string;

  constructor(private idiomaS: IdiomaService, private router: Router) { }

  ngOnInit(): void { }

  onCreateIdioma(): void {
    const idioma = new Idioma(this.nombre, this.escritura, this.lectura, this.oralidad);
    this.idiomaS.save(idioma).subscribe(
      data => {
        alert("Idioma creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Idioma no pudo ser creado");
        this.router.navigate(['']);
      }
    )
  }
}

