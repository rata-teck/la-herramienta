import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autentificador',
  templateUrl: './autentificador.page.html',
  styleUrls: ['./autentificador.page.scss'],
})
export class AutentificadorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public modo : number = 1;

  public modo2() : void{
    this.modo = 2;
  }

  public modo1() : void{
    this.modo = 1;
  }

}
