import { Component, OnInit } from '@angular/core';
import {DatosService} from './../../../servicios/datos.service';
import {Laptop, DetalleLaptop} from './../../../modelos/laptop';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss'],
})
export class LaptopsComponent implements OnInit {

  public formularioRegistroBasico : FormGroup;
  public formularioRegistroDetalles : FormGroup;


  public imagenRegistro64 = '';

  public modo : string = 'listado';
  public laptops? : Array<Laptop>;
  public laptop? : Laptop;
  public detalles? : DetalleLaptop;
  public idLaptop! : number;

  constructor(
    public datos : DatosService,
    private fb : FormBuilder,
  ) { }

  public crearFormularioRegistro(){
    this.formularioRegistroBasico = this.fb.group({
      marca : new FormControl('', Validators.required),
      modelo : new FormControl('', Validators.required),
      foto : new FormControl('', Validators.required),
      descripcion : new FormControl('', Validators.required),
      precio : new FormControl(0, Validators.required),
      stock : new FormControl(0, Validators.required)
    })
    this.formularioRegistroDetalles = this.fb.group({
      cpu : new FormControl('', Validators.required),
      ram : new FormControl('', Validators.required),
      disco : new FormControl('', Validators.required),
      pantalla : new FormControl('', Validators.required),
      grafica : new FormControl('', Validators.required),
      bateria : new FormControl('', Validators.required),
      conectividad : new FormControl('', Validators.required),
      audio : new FormControl('', Validators.required),
      software_incluido : new FormControl('', Validators.required)
    })
    this.modo = 'registro';
  }

  public leerArchivo(evento : Event){
    const archivo = (evento.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () => {
      this.imagenRegistro64 = reader.result as string;
    }
  }

  public registrarLaptop(){
    this.datos.registrarLaptop({
      ...this.formularioRegistroBasico.value,
      foto : this.imagenRegistro64
    },
    {
      ...this.formularioRegistroDetalles.value
    }).subscribe(data => {
      console.log(data.id);
      this.modo = 'listado';
    })
  }

  ngOnInit() {
    this.datos.obtenerLaptops().subscribe(data =>{
      this.laptops = data;
    })
  }

  public verLaptop(id : number) : void{
    this.datos.obtenerLaptop(id).subscribe(data => {
      this.laptop = data;
    })
    this.datos.obtenerDetalleLaptop(id).subscribe(data => {
      this.detalles = data;
    })
    this.modo = 'detalles';
  }

  //delete(laptop:Laptop):void{
    //this.datos.eliminarLaptop(laptop.id).subscribe{
      //res=>this.datos.obtenerLaptops().subscribe(
        //response=>this.laptops=response
      //)
    //}
  //}

}
