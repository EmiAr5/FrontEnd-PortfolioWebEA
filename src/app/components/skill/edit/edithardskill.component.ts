import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardskill } from 'src/app/model/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import Swal from 'sweetalert2';

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
        Swal.fire(
          'Habilidad',
          'La Hard Skill ha sido modificada con éxito',
          'success'
        );
        this.route.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Hard Skill no pudo ser modificada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }

}