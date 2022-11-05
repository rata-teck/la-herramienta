import { Component, OnInit, ViewChild } from '@angular/core';
import {DatosService} from './../../../servicios/datos.service';
import { Laptop } from 'src/app/modelos/laptop';
import {IonInfiniteScroll, ModalController} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  laptopss=[];
  carrito=[];
  carritoCount:  BehaviorSubject<number>;
  public listaPC : Array<Laptop> = [];

  @ViewChild(IonInfiniteScroll)
  public infinito : IonInfiniteScroll;

  constructor(
    private servicio : DatosService, private modalCtrl:ModalController

  ) { }

  ngOnInit() {
    this.laptopss = this.servicio.getLaptop();
    this.carrito= this.servicio.getCarrito();
    this.carritoCount=this.servicio.getCarritoCount();
    this.servicio.listarLaptop.subscribe(datos=>{
      this.listaPC = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    })
    this.servicio.listarLap();
  }
  addAlCarrito(laptopss){
    this.servicio.addLaptop(laptopss);
  }
  async abrirCarrito(){
    let modal = await this.modalCtrl.create({
      component:CarritoComponent,
      cssClass:'carrito'
    });
    modal.present();
  }

  ionViewWillEnter() : void{
    this.servicio.listarLap();
  }

  public cargarMas(){
    this.servicio.obtenerMasLaptop();
  }
}
