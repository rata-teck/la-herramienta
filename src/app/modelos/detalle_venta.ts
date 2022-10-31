import {Laptop} from './laptop';

type Notebook = {
  laptop : Laptop,
  cantidad : number
}
export interface DetalleVenta {
  laptops : Array<Notebook>
}
