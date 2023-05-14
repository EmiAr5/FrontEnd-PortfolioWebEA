import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-addsoftskill',
  templateUrl: './addsoftskill.component.html',
  styleUrls: ['./addsoftskill.component.css']
})
export class AddsoftskillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private softskillS: SoftskillService, private router: Router) { }

  ngOnInit(): void { }

  onCreateSS(): void {
    const softskill = new Softskill(this.nombre, this.porcentaje);
    this.softskillS.save(softskill).subscribe(
      data => {
        alert("Soft Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Soft Skill no pudo ser creada");
        this.router.navigate(['']);
      }
    )
  }
}
