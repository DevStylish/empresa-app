import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  constructor(private empleadosService: EmpleadosService, private router: Router) {
    this.empleados = empleadosService.getEmployees();
  }

  showEmployee(id: number) {
    this.router.navigate(['empleado', id]);
  }

  ngOnInit(): void {}

}
