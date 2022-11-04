import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {DatosService} from './../../../servicios/datos.service';
import {Usuario} from './../../../modelos/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  @Output()
  public m1 = new EventEmitter();

  private usuario? : Usuario ;

  formReg : FormGroup;
  constructor(
    public fb :FormBuilder,
    private puente : DatosService,
    private portero : Router
  ) {
    this.formReg = this.fb.group({
      nombre : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      apellido : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      edad: new FormControl('',[Validators.required,Validators.min(16)]),
      correo: new FormControl('',Validators.required),
      nombre_usuario: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      clave:new FormControl ('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
    });
  }

  ngOnInit() {}

  public guardar() : any{
    var f = this.formReg.value;

    this.usuario = {
      nombre : f.nombre,
      apellido : f.apellido,
      edad : f.edad,
      correo : f.correo,
      clave : f.clave,
      estado : 1,
      id : f.nombre_usuario
    }
    this.puente.registrarUsuario(this.usuario).subscribe(data => {
      this.portero.navigate(['registro']);
    })
    this.m1.emit();
  }
  public cambiarModo() : void{
    this.m1.emit();
  }
}
