import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(private empleadosService: EmpleadosService, private router: Router) { 
    this.empleados = empleadosService.getEmpleados();
  }

  mostrarEmpleado(id: number){
    this.router.navigate(['empleado', id]);
  }

  ngOnInit(): void {}

}
