import {Venta} from './venta';
import {Laptop} from './laptop';
type Aaaa = {
  laptop : Laptop,
  unidades : number
}
export interface Usuario {
  nombre : string,
  apellido : string,
  edad : number,
  correo : string,
  clave : string,
  foto? : string,
  compras? : Array<Venta>,
  estado : number,
  carrito? : Array<Aaaa>,
  id : string
}
