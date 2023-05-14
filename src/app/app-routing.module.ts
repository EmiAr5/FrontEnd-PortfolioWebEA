import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditheaderComponent } from './components/header/editheader.component';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditinfopersonalComponent } from './components/acerca-de/editinfopersonal.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { EditsoftskillComponent } from './components/skill/edit/editsoftskill.component';
import { EdithardskillComponent } from './components/skill/edit/edithardskill.component';
import { EditidiomaComponent } from './components/skill/edit/editidioma.component';
import { AddeducacionComponent } from './components/educacion/addeducacion.component';
import { AddexperienciaComponent } from './components/experiencia/addexperiencia.component';
import { AddsoftskillComponent } from './components/skill/add/addsoftskill.component';
import { AddhardskillComponent } from './components/skill/add/addhardskill.component';
import { AddidiomaComponent } from './components/skill/add/addidioma.component';
import { AddproyectoComponent } from './components/proyecto/addproyecto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editHeader/:id', component: EditheaderComponent },
  { path: 'editAcercade/:id', component: EditacercadeComponent },
  { path: 'editInfopersona/:id', component: EditinfopersonalComponent },
  { path: 'editExperiencia/:id', component: EditexperienciaComponent },
  { path: 'editEducacion/:id', component: EditeducacionComponent },
  { path: 'editProyecto/:id', component: EditproyectoComponent },
  { path: 'editSoftskill/:id', component: EditsoftskillComponent },
  { path: 'editHardskill/:id', component: EdithardskillComponent },
  { path: 'editIdioma/:id', component: EditidiomaComponent },
  { path: 'addEducacion', component: AddeducacionComponent },
  { path: 'addExperiencia', component: AddexperienciaComponent },
  { path: 'addSoftskill', component: AddsoftskillComponent },
  { path: 'addHardskill', component: AddhardskillComponent },
  { path: 'addIdioma', component: AddidiomaComponent },
  { path: 'addProyecto', component: AddproyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
