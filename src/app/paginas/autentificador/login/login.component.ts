import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import {DatosService} from './../../../servicios/datos.service';
import {Usuario} from './../../../modelos/usuario';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output()
  public m2 = new EventEmitter();
  formLogin: FormGroup;

  constructor(
    public fb : FormBuilder,
    private portero : DatosService,
    private ruta : Router
    ) {
      this.formLogin=this.fb.group({
        nombre_usuario: new FormControl("",Validators.required),
        clave: new FormControl("",Validators.required)
      });
     }
  public ingresar() : any{
    var datos = this.formLogin.value;
    var usuario : Usuario = this.portero.obtenerUsuario(datos.nombre_usuario);
    if(usuario.clave == datos.clave){
      if(usuario.estado == 1){
        this.ruta.navigateByUrl("/cli/"+usuario.id);
      }
      else{
        if(usuario.estado == 2){
          this.ruta.navigateByUrl("/adm/"+usuario.id);
        }
      }
    }
  }
  ngOnInit() {
  }

  public cambiarModo() : void{
    this.m2.emit();
  }
}
