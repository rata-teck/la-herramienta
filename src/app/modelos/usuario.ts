import {Venta} from './venta';
export interface Usuario {
  nombre : string,
  apellido : string,
  edad : number,
  correo : string,
  clave : string,
  foto? : string,
  compras? : Array<Venta>,
  estado : number
  id : string
}
