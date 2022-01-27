import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';

import {EmpleadosService} from './services/empleados.service';
import { PostsService } from './services/posts.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [
    EmpleadosService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
