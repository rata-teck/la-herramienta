import { Component, OnInit } from '@angular/core';
import {Usuario} from './../../modelos/usuario';
import {DatosService} from './../../servicios/datos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  public usuario? : Usuario;
  public modo : string = 'inicio';
  public idLaptop? : number;
  public cantidad? : number;
  public accionCarrito? : string;

  constructor(
    private datos : DatosService,
    private ruta : ActivatedRoute
  ) { }

  ngOnInit() {
    this.datos.obtenerUsuario(this.ruta.snapshot.params.id).subscribe(data => {
      this.usuario = {...data};
    });
  }

  public cambiarModo(nuevo : string) : void{
    this.modo = nuevo;
  }

  public mostrarLaptop(id : number) : void{
    this.idLaptop = id;
    this.modo = 'detalles';
  }

  public redireccionarProducto(producto : Array<number>) : void{
    this.idLaptop = producto[0];
    this.cantidad = producto[1];
    this.accionCarrito = 'agregar';
    this.modo = 'carrito';
  }

}
