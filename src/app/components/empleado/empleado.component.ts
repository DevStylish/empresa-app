import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado: any;
  idEmpleado: any;

  constructor(private empleadosService: EmpleadosService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.idEmpleado = params.get('id');
      this.empleado = this.empleadosService.getEmployee(this.idEmpleado);
    });
  }

  ngOnInit(): void {}

}
