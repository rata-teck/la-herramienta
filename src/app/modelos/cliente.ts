import {Usuario} from './usuario';
import {Venta} from './venta';
export interface Cliente {
  usuario : Usuario,
  foto? : string,
  compras? : Array<Venta>
}
