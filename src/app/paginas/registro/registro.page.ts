import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formReg:FormGroup;

  constructor(
    public fb : FormBuilder,
    public alertController: AlertController
  ) {
    this.formReg=this.fb.group({
      nombre : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      apellido : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      edad: [16,Validators.required,Validators.min(16)],
      correo: new FormControl('',Validators.required),
      nombre_usuario: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      clave:new FormControl ('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
    });
   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formReg.value;

    if(this.formReg.invalid){
      const alert = await this.alertController.create({
        message:'Por favor llenar todos los datos',
        buttons:['aceptar']
      });
      await alert.present();
      return;
    }
  }

}
