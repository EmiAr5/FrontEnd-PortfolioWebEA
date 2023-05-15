import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
import Swal from 'sweetalert2';

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
        Swal.fire(
          'Habilidad',
          'La Soft Skill ha sido modificada con éxito',
          'success'
        );
        this.route.navigate(['']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Soft Skill no pudo ser modificada',
          text: 'Revisa los campos ingresados.',
        });
      }
    )
  }
}
