import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-editidioma',
  templateUrl: './editidioma.component.html',
  styleUrls: ['./editidioma.component.css']
})
export class EditidiomaComponent implements OnInit {
  idioma: Idioma = null;

  constructor(private idiomaS: IdiomaService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.idiomaS.detail(id).subscribe(data => {
      this.idioma = data;
    }, err => {
      alert("Error al modificar el idioma");
      this.route.navigate(['']);
    }
    )
  }

  onUpdateIdioma(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.idiomaS.update(id, this.idioma).subscribe(
      data => {
        alert("Se modificaron los datos correctamente");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudieron modificar los datos del idioma")
        this.route.navigate(['']);
      }
    )
  }
}
