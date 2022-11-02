type Procesador = {
  marca : string,
  linea : string,
  serie : string,
  modelo : string
  nucleos : number,
  fbase : number,
  fmax : number,
  arq : string
}
type Disco = {
  tipo : string,
  capacidad : number,
}
type Ram = {
  capacidad : number,
  tipo : string,
  frecuencia : number
}
type Grafica = {
  marca : string,
  linea : string,
  modelo : string,
  nucleos : number,
  frecuencia : number,
  vram : number
}
type Bateria = {
  voltaje : number,
  amperaje : number
}
type Pantalla = {
  tamanio : number,
  ancho : number,
  alto : number,
  frecuencia : number,
  panel : string,
  iluminacion : string
}
type Audio = {
  potencia : number,
  parlantes : number,
  microfono : string,
  salida : string
}
type Conexion = {
  tipo : string,
  version : string
}
export interface DetalleLaptop {
  cpu : Procesador,
  ram : Ram,
  disco : Disco,
  pantalla : Pantalla,
  grafica? : Grafica,
  bateria : Bateria,
  conectividad : Array<Conexion>,
  audio : Audio,
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
