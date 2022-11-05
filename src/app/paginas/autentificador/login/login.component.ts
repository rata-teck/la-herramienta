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

  private usuario? : Usuario;

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
    this.portero.obtenerUsuario(datos.nombre_usuario).subscribe(data => {
      this.usuario = data;
    })
    if(this.usuario.clave == datos.clave){
      if(this.usuario.estado == 1){
        this.ruta.navigateByUrl("/cli/"+this.usuario.id);
      }
      else{
        if(this.usuario.estado == 2){
          this.ruta.navigateByUrl("/adm/"+this.usuario.id);
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
