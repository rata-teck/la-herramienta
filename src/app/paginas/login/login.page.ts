import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


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

}
