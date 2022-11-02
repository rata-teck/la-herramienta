import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutentificadorPageRoutingModule } from './autentificador-routing.module';

import { AutentificadorPage } from './autentificador.page';
import {RegistroComponent} from './registro/registro.component';
import {LoginComponent} from './login/login.component';

import {DatosService} from './../../servicios/datos.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AutentificadorPageRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AutentificadorPage,
    RegistroComponent,
    LoginComponent
  ],
  providers: [
    DatosService
  ]
})
export class AutentificadorPageModule {}
