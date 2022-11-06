type Aaaa = {
  idLaptop : number,
  unidades : number
}
export interface Usuario {
  nombre : string,
  apellido : string,
  edad : number,
  correo : string,
  clave : string,
  foto? : string,
  estado : number,
  carrito? : Array<Aaaa>,
  id : string
}
