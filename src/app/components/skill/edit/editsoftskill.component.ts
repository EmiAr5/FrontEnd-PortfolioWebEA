import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-editsoftskill',
  templateUrl: './editsoftskill.component.html',
  styleUrls: ['./editsoftskill.component.css']
})
export class EditsoftskillComponent implements OnInit {

  softskill: Softskill = null;

  constructor(private softskillS: SoftskillService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.softskillS.detail(id).subscribe(data => {
      this.softskill = data;
    }, err => {
      alert("Error al modificar la habilidad");
      this.route.navigate(['']);
    }
    )
  }

  onUpdateSoftskill(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.softskillS.update(id, this.softskill).subscribe(
      data => {
        alert("Se modificaron los datos correctamente");
        this.route.navigate(['']);
      }, err => {
        alert("No se pudieron modificar los datos de la habilidad")
        this.route.navigate(['']);
      }
    )
  }
}
