import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from './../modelos/usuario';
import {Laptop, DetalleLaptop} from './../modelos/laptop';
import {Venta} from './../modelos/venta';
import {Observable,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private url : string = 'http://localhost:3000'; //la url base se concatena con la ruta requerida para hacer solicitudes al servidor.


  // los arrays son privados pero los metodos de busqueda retornan su contenido.
  public usuarios : Array<Usuario> = [];
  public laptops? : Array<Laptop>;
  public ventas : Array<Venta> = [];
  private compList = new BehaviorSubject<Array<Laptop>>([]);
  public listarLaptop = this.compList.asObservable();
  private paginaActual=1;


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

  public obtenerRegistroUsuarios() : Observable<Usuario[]>{
    return this.agentePerry.get<Usuario[]>(this.url+'/usuarios');
  }
  public obtenerLaptops() : Observable<Laptop[]>{
    return this.agentePerry.get<Laptop[]>(this.url+'/listado-laptops');
  }
  public obtenerRegistroVentas() : Observable<Venta[]>{
    return this.agentePerry.get<Venta[]>(this.url+'/ventas');
  }

  public obtenerLaptop(id : number) : Observable<Laptop>{
    return this.agentePerry.get<Laptop>(this.url+'/listado-laptops/'+id);
  }
  public obtenerDetalleLaptop(id : number) : Observable<DetalleLaptop>{
    return this.agentePerry.get<DetalleLaptop>(this.url+'/detalles-laptop/'+id);
  }

  public obtenerUsuario(id : string) : Observable<Usuario>{
    return this.agentePerry.get<Usuario>(this.url+'/usuarios/'+id);
  }

  public obtenerVenta(id : number) : Observable<Venta>{
    return this.agentePerry.get<Venta>(this.url+'/ventas/'+id);
  }

  public listarLap(){
    this.agentePerry.get<Array<Laptop>>(`${this.url+'/listado-laptops'}?_page=1`)
    .subscribe(datos=>{
      this.paginaActual = this.paginaActual +1;
      this.compList.next(datos);

    })
  }

  public obtenerMasLaptop(){
    this.agentePerry.get<Array<Laptop>>(`${this.url+'/listado-laptops'}?_page=${this.paginaActual}`)
    .subscribe(datos=>{
      if(datos){
        this.paginaActual = this.paginaActual +1;
      this.compList.next(this.compList.getValue().concat(datos));
      }

    })
  }


  // --- S O Y     A D M I N ---

  // Registra la info basica y las specs por separado
  private registrarDetalleLaptop(detalles : DetalleLaptop) : Observable<any>{
    return this.agentePerry.post(this.url+'/detalles-laptop', detalles, this.info);
  }
  public registrarLaptop(laptop : Laptop, detalles : DetalleLaptop) : Observable<any>{
    this.registrarDetalleLaptop(detalles).subscribe(data => {
      console.log(data.id);
    })
    return this.agentePerry.post(this.url+'/listado-laptops', laptop, this.info);
  }


  public registrarUsuario(usuario : Usuario) : Observable<any>{
    return this.agentePerry.post(this.url+'/usuarios', {...usuario}, {...this.info});
  }
  public eliminarUsuario(usuario : Usuario) : void{
    this.agentePerry.delete(this.url+'/usuarios/'+usuario.id);  // Te odio Perry el ormitorrinco!!!
  }


  private eliminarDetalleLaptop(id : number) : void{
    this.agentePerry.delete(this.url+'/detalles-laptop/'+id);
  }
  public eliminarLaptop(id : number) : void{
    this.eliminarDetalleLaptop(id);
    this.agentePerry.delete(this.url+'/listado-laptops/'+id);
  }


  private modificarDetalleLaptop(detalles : DetalleLaptop) : Observable<any>{
    return this.agentePerry.put(this.url+'/detalles-laptop/'+detalles.id, detalles, this.info);
  }
  public modificarLaptop(laptop : Laptop, detalles : DetalleLaptop) : Observable<any>{
    this.modificarDetalleLaptop(detalles);
    return this.agentePerry.put(this.url+'/listado-laptops/'+laptop.id, laptop, this.info);
  }


  public actualizarPrecioLaptop(id : number, precio : number) : Observable<any>{
    return this.agentePerry.patch(this.url+'/listado-laptops/'+id, {"precio" : precio}, this.info);
  }
  public actualizarStockLaptop(id : number, stock : number) : Observable<any>{
    return this.agentePerry.patch(this.url+'/listado-laptops/'+id, {"stock" : stock}, this.info);
  }


  public modificarVenta(venta : Venta) : Observable<any>{
    return this.agentePerry.put(this.url+'/ventas/'+venta.id, venta, this.info);
  }
  public eliminarVenta(id : number) : void{
    this.agentePerry.delete(this.url+'/ventas/'+id);
  }
}
