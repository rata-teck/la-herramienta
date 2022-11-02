import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { Laptop } from '../../../modelos/laptop';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public listaPC: Array<Laptop>=[];

  @ViewChild(IonInfiniteScroll)
  public infinito: IonInfiniteScroll;


  constructor(
    private service: DatosService
  ) {

  }

  ngOnInit() {
    this.service.listarLaptop.subscribe(datos=>{
      this.listaPC = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    })
    this.service.listarLap();
  }

  ionViwwillEnter(): void{
    this.service.listarLap();
  }
  ionViewDidEnter():void{
  }
  public cargarMas(){
    this.service.obtenerMasLaptop();
  }

}
