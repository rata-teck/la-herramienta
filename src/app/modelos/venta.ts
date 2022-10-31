import {DetalleVenta} from './detalle_venta';
export interface Venta {
  detalles : DetalleVenta,
  precio_total : number
  estado : string,
  id? : number
}
