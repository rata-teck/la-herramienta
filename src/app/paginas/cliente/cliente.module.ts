import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';
import {DatosService} from './../../servicios/datos.service';
import {HttpClientModule} from '@angular/common/http';

import {InicioComponent} from './inicio/inicio.component';
import {ListadoComponent} from './listado/listado.component';
import {DetallesComponent} from './detalles/detalles.component';
import {CarritoComponent} from './carrito/carrito.component';
import {ComprarComponent} from './comprar/comprar.component';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ClientePage,
    InicioComponent,
    ListadoComponent,
    DetallesComponent,
    CarritoComponent,
    ComprarComponent,
    SeguimientoComponent
  ],
  providers: [
    DatosService
  ]
})
export class ClientePageModule {}
