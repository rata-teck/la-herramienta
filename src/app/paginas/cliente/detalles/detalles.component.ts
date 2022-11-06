import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DatosService} from './../../../servicios/datos.service';
import {Laptop, DetalleLaptop} from './../../../modelos/laptop';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  public laptop? : Laptop;
  public detalles? : DetalleLaptop;
  @Input()
  public idLaptop? : number;

  @Output()
  public elegido = new EventEmitter<Array<number>>();

  public cuantosQuiere : FormGroup;

  constructor(
    private datos : DatosService,
    public fb : FormBuilder
  ) {
    this.cuantosQuiere = this.fb.group({
      cantidad : new FormControl(0, Validators.required)
    });
  }

  ngOnInit() {
    this.datos.obtenerLaptop(this.idLaptop).subscribe(data => {
      this.laptop = {...data}
    });
    this.datos.obtenerDetalleLaptop(this.idLaptop).subscribe(data => {
      this.detalles = {...data}
    });
  }

  //public agregarAlCarrito() : void{
    //var queso = this.cuantosQuiere.value;
    //this.elegido.emit([this.laptop.id, queso.cantidad]);
  //}
  addAlCarrito(laptopss){
    this.datos.addLaptop(laptopss);
  }

}
