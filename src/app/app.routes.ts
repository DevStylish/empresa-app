import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PostsComponent } from './components/posts/posts.component'
import { CommentsComponent } from './components/comments/comments.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'empleado/:id', component: EmpleadoComponent},
    { path: 'comments/:id', component: CommentsComponent},
    { path: 'posts', component: PostsComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];