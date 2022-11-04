import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import {InicioComponent} from './inicio/inicio.component';
import {LaptopsComponent} from './laptops/laptops.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {VentasComponent} from './ventas/ventas.component';

import {DatosService} from './../../servicios/datos.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminPage,
    InicioComponent,
    LaptopsComponent,
    UsuariosComponent,
    VentasComponent
  ],
  providers: [
    DatosService
  ]
})
export class AdminPageModule {}
