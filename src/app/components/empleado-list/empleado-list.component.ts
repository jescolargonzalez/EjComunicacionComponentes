import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  /* Datos en bruto. */
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
