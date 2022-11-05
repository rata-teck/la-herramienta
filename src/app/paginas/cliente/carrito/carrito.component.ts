import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatosService } from 'src/app/servicios/datos.service';
import { Laptop,DetalleLaptop } from './../../../modelos/laptop';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  carrito: Laptop[]=[];

  constructor(
    private servicio:DatosService,
    private modalCtrl:ModalController
    ) { }

  ngOnInit() {
    this.carrito=this.servicio.getCarrito();
  }

  decreaseCarritoI(laptop){
    this.servicio.decreaseLaptop(laptop);
  }
  increaseCarritoI(laptop){
    this.servicio.addLaptop(laptop);
  }
  removeCarritoI(laptop){
    this.servicio.removeLaptop(laptop);
  }

  getTotal(){
    return this.carrito.reduce((i,j)=>i+j.precio*j.stock,0);
  }
  cerrar(){
    this.modalCtrl.dismiss();
  }

}
