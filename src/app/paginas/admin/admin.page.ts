import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public modo : string = 'inicio';

  public cambiarModo(nuevo : string) : void{
    this.modo = nuevo;
  }

}
