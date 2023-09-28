import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  /* Datos en bruto. */
  listEmpleados2: Empleado[] = [
    {
      num: 1,
      nombre: 'Devra',
      apellido: 'Juajijajoija',
      sexo: 'Femenino',
      salario: 77777,
    },
    {
      num: 2,
      nombre: 'Trasgo',
      apellido: 'Perrinxi',
      sexo: 'Masculino',
      salario: 18000,
    },
    {
      num: 3,
      nombre: 'Palermo',
      apellido: 'Gatuno',
      sexo: 'Masculino',
      salario: 10000,
    },
    {
      num: 4,
      nombre: 'Roco',
      apellido: 'Miedosin',
      sexo: 'Masculino',
      salario: 0,
    },
  ];
  listEmpleados: Empleado[] = [
    {
      num: 1,
      nombre: 'Devra',
      apellido: 'Juajijajoija',
      sexo: 'Femenino',
      salario: 77777,
    },
    {
      num: 2,
      nombre: 'Trasgo',
      apellido: 'Perrinxi',
      sexo: 'Masculino',
      salario: 18000,
    },
    {
      num: 3,
      nombre: 'Palermo',
      apellido: 'Gatuno',
      sexo: 'Masculino',
      salario: 10000,
    },
    {
      num: 4,
      nombre: 'Roco',
      apellido: 'Miedosin',
      sexo: 'Masculino',
      salario: 0,
    },
    {
      num: 5,
      nombre: 'Lila',
      apellido: 'Rosado',
      sexo: 'Femenino',
      salario: 25000,
    },
    {
      num: 6,
      nombre: 'Marco',
      apellido: 'Polo',
      sexo: 'Masculino',
      salario: 30000,
    },
    {
      num: 7,
      nombre: 'Sara',
      apellido: 'Luna',
      sexo: 'Femenino',
      salario: 40000,
    },
    {
      num: 8,
      nombre: 'Leo',
      apellido: 'Solis',
      sexo: 'Masculino',
      salario: 35000,
    },
    {
      num: 9,
      nombre: 'Ana',
      apellido: 'Marin',
      sexo: 'Femenino',
      salario: 45000,
    },
    {
      num: 10,
      nombre: 'Pedro',
      apellido: 'Sanchez',
      sexo: 'Masculino',
      salario: 50000,
    },
    {
      num: 11,
      nombre: 'Eva',
      apellido: 'Garcia',
      sexo: 'Femenino',
      salario: 55000,
    },
    {
      num: 12,
      nombre: 'Luis',
      apellido: 'Rodriguez',
      sexo: 'Masculino',
      salario: 60000,
    },
    {
      num: 13,
      nombre: 'Marta',
      apellido: 'Perez',
      sexo: 'Femenino',
      salario: 65000,
    },
    {
      num: 14,
      nombre: 'Juan',
      apellido: 'Lopez',
      sexo: 'Masculino',
      salario: 70000,
    },
    {
      num: 15,
      nombre: 'Lucia',
      apellido: 'Gomez',
      sexo: 'Femenino',
      salario: 75000,
    },
    {
      num: 16,
      nombre: 'Carlos',
      apellido: 'Martinez',
      sexo: 'Masculino',
      salario: 80000,
    },
    {
      num: 17,
      nombre: 'Laura ',
      apellido: 'Sanchez ',
      sexo: 'Femenino ',
      salario: 85000,
    },
    {
      num: 18,
      nombre: 'David ',
      apellido: 'Fernandez ',
      sexo: 'Masculino ',
      salario: 90000,
    },
    {
      num: 19,
      nombre: 'Maria ',
      apellido: 'Gonzalez ',
      sexo: 'Femenino ',
      salario: 95000,
    },
    {
      num: 20,
      nombre: 'Jose ',
      apellido: 'Diaz ',
      sexo: 'Masculino ',
      salario: 100000,
    },
    {
      num: 21,
      nombre: 'Carmen ',
      apellido: 'Ruiz ',
      sexo: 'Femenino ',
      salario: 105000,
    },
    {
      num: 22,
      nombre: 'Daniel ',
      apellido: 'Hernandez ',
      sexo: 'Masculino ',
      salario: 110000,
    },
    {
      num: 23,
      nombre: 'Sofia ',
      apellido: 'Lopez ',
      sexo: 'Femenino ',
      salario: 115000,
    },
  ];
  radioButtonSeleccionado = 'Todos';
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }
  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Femenino').length;
  }
  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Masculino')
      .length;
  }
  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }
}
