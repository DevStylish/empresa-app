import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'empleado/:id', component: EmpleadoComponent},
    { path: 'about', component: AboutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];