import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  public nombre! : string;

  constructor(
    private ruta : ActivatedRoute
  ) { }

  ngOnInit() {
    this.nombre = this.ruta.snapshot.params.id;
  }

}
