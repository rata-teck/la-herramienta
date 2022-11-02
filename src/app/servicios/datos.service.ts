import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from './../modelos/usuario';
import {Laptop, DetalleLaptop} from './../modelos/laptop';
import {Venta} from './../modelos/venta';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private url : string = 'http://localhost:3000'; //la url base se concatena con la ruta requerida para hacer solicitudes al servidor.

  // los arrays son privados pero los metodos de busqueda retornan su contenido.
  private usuarios : Array<Usuario> = [];
  private laptops : Array<Laptop> = [];
  private ventas : Array<Venta> = [];


  private laptop : {
    info : Laptop,
    detalles : DetalleLaptop
  }

  private usuario? : Usuario;
  private venta? : Venta;

  // tercer argumento del metodo post, hecho variable para mas placer xd.
  private info = {
    headers : {
      "Content-Type" : "application/json; charset = utf-8"
    }
  }

  constructor(
    public agentePerry : HttpClient // la mision de perry el ormitorrinco es meterse en los datos del dr doof.
  ) { }

  public obtenerRegistroUsuarios() : any{
    this.usuarios = [];
    this.agentePerry.get<Usuario>(this.url+'/usuarios/clientes').subscribe(metroEnHoraPunta => { // pais que tenga metro sabe el contexto xd.
      this.usuarios.push(metroEnHoraPunta);
    });
    return this.usuarios;
  }
  public obtenerLaptops() : any{
    this.laptops = [];
    this.agentePerry.get<Laptop>(this.url+'/laptops/listado').subscribe(caosPandemia => { // cuenta un video de tiktok que bill gates creo el covid, personalmente no le creo.
      this.laptops.push(caosPandemia);
    });
    return this.laptops;
  }
  public obtenerRegistroVentas() : any{
    this.ventas = [];
    this.agentePerry.get<Venta>(this.url+'/ventas').subscribe(donCangrejo => { // como hara bob esponja para ser tan feliz?
      this.ventas.push(donCangrejo);
    });
    return this.ventas;
  }

  public obtenerLaptop(id : number) : any{
    this.agentePerry.get<Laptop>(this.url+'/laptops/listado/'+id).subscribe(data => {
      this.laptop.info = data;
    });
    this.agentePerry.get<DetalleLaptop>(this.url+'/laptops/detalles/'+id).subscribe(data => {
      this.laptop.detalles = data;
    });
    return this.laptop;
  }

  public obtenerUsuario(id : string) : any{
    this.agentePerry.get<Usuario>(this.url+'/usuarios/'+id).subscribe(data => {
      this.usuario = data;
    });
    return this.usuario;
  }

  public obtenerVenta(id : number) : any{
    this.agentePerry.get<Venta>(this.url+'/ventas/'+id).subscribe(data => {
      this.venta = data;
    });
    return this.venta;
  }

  // --- S O Y     A D M I N ---

  // Registra la info basica y las specs por separado
  private registrarDetalleLaptop(detalles : DetalleLaptop) : Observable<any>{
    return this.agentePerry.post(this.url+'/laptops/detalles', detalles, this.info);
  }
  public registrarLaptop(laptop : Laptop, detalles : DetalleLaptop) : Observable<any>{
    this.registrarDetalleLaptop(detalles);
    return this.agentePerry.post(this.url+'/laptops/listado', laptop, this.info);
  }


  public registrarUsuario(usuario : Usuario) : Observable<any>{
    return this.agentePerry.post(this.url+'/usuarios', {...usuario}, {...this.info});
  }
  public eliminarUsuario(usuario : Usuario) : void{
    this.agentePerry.delete(this.url+'/usuarios/'+usuario.id);  // Te odio Perry el ormitorrinco!!!
  }


  private eliminarDetalleLaptop(id : number) : void{
    this.agentePerry.delete(this.url+'/laptops/detalles/'+id);
  }
  public eliminarLaptop(id : number) : void{
    this.eliminarDetalleLaptop(id);
    this.agentePerry.delete(this.url+'/laptops/listado/'+id);
  }


  private modificarDetalleLaptop(detalles : DetalleLaptop) : Observable<any>{
    return this.agentePerry.put(this.url+'/laptops/detalles/'+detalles.id, detalles, this.info);
  }
  public modificarLaptop(laptop : Laptop, detalles : DetalleLaptop) : Observable<any>{
    this.modificarDetalleLaptop(detalles);
    return this.agentePerry.put(this.url+'/laptops/listado/'+laptop.id, laptop, this.info);
  }


  public actualizarPrecioLaptop(id : number, precio : number) : Observable<any>{
    return this.agentePerry.patch(this.url+'/laptops/listado/'+id, {"precio" : precio}, this.info);
  }
  public actualizarStockLaptop(id : number, stock : number) : Observable<any>{
    return this.agentePerry.patch(this.url+'/laptops/listado/'+id, {"stock" : stock}, this.info);
  }


  public modificarVenta(venta : Venta) : Observable<any>{
    return this.agentePerry.put(this.url+'/ventas/'+venta.id, venta, this.info);
  }
  public eliminarVenta(id : number) : void{
    this.agentePerry.delete(this.url+'/ventas/'+id);
  }
}
