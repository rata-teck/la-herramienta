import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from './../modelos/admin';
import {Cliente} from './../modelos/cliente';
import {Laptop} from './../modelos/laptop';
import {Venta} from './../modelos/venta';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url : string = 'http://localhost:3000'; //la url base se concatena con la ruta requerida para hacer solicitudes al servidor.

  // los arrays son privados pero los metodos de busqueda retornan su contenido.
  private clientes : Array<Cliente> = [];
  private laptops : Array<Laptop> = [];
  private ventas : Array<Venta> = [];
  private admins : Array<Admin> = [];

  // tercer argumento del metodo post, hecho variable para mas placer xd.
  private info = {
    headers : {
      "Content-Type" : "application/json; charset = utf-8"
    }
  }

  constructor(
    public agentePerry : HttpClient // la mision de perry el ormitorrinco es meterse en los datos del dr doof.
  ) { }

  public obtenerRegistroClientes() : any{
    this.clientes = [];
    this.agentePerry.get<Cliente>(this.url+'/usuarios/clientes').subscribe(metroEnHoraPunta => { // pais que tenga metro sabe el contexto xd.
      this.clientes.push(metroEnHoraPunta);
    });
    return this.clientes;
  }
  public obtenerLaptops() : any{
    this.laptops = [];
    this.agentePerry.get<Laptop>(this.url+'/laptops').subscribe(caosPandemia => { // cuenta un video de tiktok que bill gates creo el covid, personalmente no le creo.
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
  public obtenerRegistroAdministradores() : any{
    this.admins = [];
    this.agentePerry.get<Admin>(this.url+'/usuarios/admins').subscribe(soyAdmin => { // ten cuidado perry, son los admins.
      this.admins.push(soyAdmin);
    });
    return this.admins;
  }

  // --- S O Y     A D M I N ---
  public registrarLaptop(laptop : Laptop) : Observable<any>{
    return this.agentePerry.post(this.url+'/laptops', laptop, this.info);
  }
  public registrarAdmin(admin : Admin) : Observable<any>{
    return this.agentePerry.post(this.url+'/usuarios/admins', admin, this.info);
  }
  public eliminarCliente(cliente : Cliente) : Observable<any>{
    return this.agentePerry.delete(this.url+'/usuarios/clientes/'+cliente.usuario.id);  // Te odio Perry el ormitorrinco!!!
  }
  public eliminarLaptop(laptop : Laptop) : Observable<any>{
    return this.agentePerry.delete(this.url+'/laptops/'+laptop.id);
  }
  public eliminarAdmin(admin : Admin) : Observable<any>{
    return this.agentePerry.delete(this.url+'/usuarios/admins/'+admin.usuario.id);
  }
  public modificarLaptop(laptop : Laptop) : Observable<any>{
    return this.agentePerry.put(this.url+'/laptops/'+laptop.id, laptop, this.info);
  }
  public actualizarPrecioLaptop(id : number, precio : number) : Observable<any>{
    return this.agentePerry.patch(this.url+'/laptops/'+id, {"precio" : precio}, this.info);
  }
  public actualizarStockLaptop(id : number, stock : number) : Observable<any>{
    return this.agentePerry.patch(this.url+'/laptops/'+id, {"stock" : stock}, this.info);
  }
  public modificarVenta(venta : Venta) : Observable<any>{
    return this.agentePerry.put(this.url+'/ventas/'+venta.id, venta, this.info);
  }
}
