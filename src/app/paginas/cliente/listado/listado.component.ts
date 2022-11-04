import { Component, OnInit, ViewChild } from '@angular/core';
import {DatosService} from './../../../servicios/datos.service';
import { Laptop } from 'src/app/modelos/laptop';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  public listaPC : Array<Laptop> = [];

  @ViewChild(IonInfiniteScroll)
  public infinito : IonInfiniteScroll;

  constructor(
    private servicio : DatosService
  ) { }

  ngOnInit() {
    this.servicio.listarLaptop.subscribe(datos=>{
      this.listaPC = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    })
    this.servicio.listarLap();
  }

  ionViewWillEnter() : void{
    this.servicio.listarLap();
  }

  public cargarMas(){
    this.servicio.obtenerMasLaptop();
  }
}
