import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditheaderComponent } from './components/header/editheader.component';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { EditinfopersonalComponent } from './components/acerca-de/editinfopersonal.component';
import { EditsoftskillComponent } from './components/skill/edit/editsoftskill.component';
import { EdithardskillComponent } from './components/skill/edit/edithardskill.component';
import { EditidiomaComponent } from './components/skill/edit/editidioma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    HomeComponent,
    LoginComponent,
    EditheaderComponent,
    EditacercadeComponent,
    EditeducacionComponent,
    EditexperienciaComponent,
    EditproyectoComponent,
    EditinfopersonalComponent,
    EditsoftskillComponent,
    EdithardskillComponent,
    EditidiomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
