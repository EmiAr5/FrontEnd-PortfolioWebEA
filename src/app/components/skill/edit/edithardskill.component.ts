import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardskill } from 'src/app/model/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';

@Component({
  selector: 'app-edithardskill',
  templateUrl: './edithardskill.component.html',
  styleUrls: ['./edithardskill.component.css']
})
export class EdithardskillComponent implements OnInit {

  hardskill: Hardskill = null;

  constructor(private hardskillS: HardskillService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.hardskillS.detail(id).subscribe(data => {
      this.hardskill = data;
    }, err => {
      alert("Error al modificar la habilidad");
      this.route.navigate(['']);
    }
    )
  }

  onUpdateHardskill(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.hardskillS.update(id, this.hardskill).subscribe(
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