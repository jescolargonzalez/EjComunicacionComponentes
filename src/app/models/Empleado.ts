export class Empleado {

  num: number;
  nombre: String;
  apellido: String;
  sexo: String;
  salario: number;

  constructor(num:number ,nombre:string ,apellido:string ,sexo:string ,salario: number) {
    this.num = num;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.salario = salario;
  }

}
