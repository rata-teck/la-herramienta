export interface DetalleLaptop {
  cpu : string,
  ram : string,
  disco : string,
  pantalla : string,
  grafica : string,
  bateria : string,
  conectividad : string,
  audio : string,
  software_incluido : string,
  id? : number
}
export interface Laptop {
  marca : string,
  modelo : string,
  foto : string,
  descripcion : string,
  precio : number,
  stock : number,
  id? : number
}
