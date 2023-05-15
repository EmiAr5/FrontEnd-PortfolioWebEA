import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';
import Swal from 'sweetalert2';

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
        Swal.fire(
          'Idioma creado',
          'El idioma ha sido creado con éxito',
          'success'
        );
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Idioma no pudo ser creado',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}

