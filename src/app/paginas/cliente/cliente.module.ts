import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';
import {DatosService} from './../../servicios/datos.service';
import {HttpClientModule} from '@angular/common/http';

import {InicioComponent} from './inicio/inicio.component';
import {ListadoComponent} from './listado/listado.component';
import {DetallesComponent} from './detalles/detalles.component';
import {CarritoComponent} from './carrito/carrito.component';

import {RouterModule, RouterLink} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterLink,
    ReactiveFormsModule
  ],
  declarations: [
    ClientePage,
    InicioComponent,
    ListadoComponent,
    DetallesComponent,
    CarritoComponent
  ],
  providers: [
    DatosService
  ]
})
export class ClientePageModule {}
