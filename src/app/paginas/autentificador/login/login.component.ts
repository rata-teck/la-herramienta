import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

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
    public fb : FormBuilder
    ) {
      this.formLogin=this.fb.group({
        nombre_usuario: new FormControl("",Validators.required),
        clave: new FormControl("",Validators.required)
      });
     }
  public ingresar;
  ngOnInit() {
  }

  public cambiarModo() : void{
    this.m2.emit();
  }
}
