import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {DatosService} from './../../../servicios/datos.service';
import {Laptop} from './../../../modelos/laptop';
import {IonInfiniteScroll, ModalController} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  laptopss=[];
  carrito=[];
  carritoCount:  BehaviorSubject<number>;
  public laptops? : Array<Laptop>;
  public infinito : IonInfiniteScroll;

  @Output()
  public verLaptop = new EventEmitter<number>();

  @ViewChild('carrito',{static: false, read: ElementRef})fab: ElementRef;

  constructor(
    public datos : DatosService,
    public ruta : Router,
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
    this.laptopss = this.datos.getLaptop();
    this.carrito= this.datos.getCarrito();
    this.carritoCount=this.datos.getCarritoCount();
    this.datos.obtenerLaptops().subscribe(data => {
      this.laptops = data;
      if(this.infinito){
        this.infinito.complete();
      }
    });
  }

  public verDetalles(id : number) : void{
    this.verLaptop.emit(id);
  }
  public cargarMas(){
    this.datos.obtenerMasLaptop();
  }

  addAlCarrito(laptopss){
    this.datos.addLaptop(laptopss);
  }
  async abrirCarrito(){
    let modal = await this.modalCtrl.create({
      component:CarritoComponent,
      cssClass:'carrito'
    });
    modal.present();
  }

}
