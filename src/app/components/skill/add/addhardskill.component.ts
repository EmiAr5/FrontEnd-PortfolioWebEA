import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardskill } from 'src/app/model/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';

@Component({
  selector: 'app-addhardskill',
  templateUrl: './addhardskill.component.html',
  styleUrls: ['./addhardskill.component.css']
})
export class AddhardskillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private hardskillS: HardskillService, private router: Router) { }

  ngOnInit(): void { }

  onCreateHS(): void {
    const hardskill = new Hardskill(this.nombre, this.porcentaje);
    this.hardskillS.save(hardskill).subscribe(
      data => {
        alert("Hard Skill creada correctamente");
        this.router.navigate(['/#Skills']);
      }, err => {
        alert("Hard Skill no pudo ser creada");
        this.router.navigate(['']);
      }
    )
  }
}

