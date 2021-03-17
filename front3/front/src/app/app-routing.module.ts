import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import {ListarAnunciosComponent}from './listar-anuncios/listar-anuncios.component';
import{ListarTestComponent}from'./listar-test/listar-test.component';
import{ LoginComponent}from './login/login.component';
import{GenerarTestComponent} from './generar-test/generar-test.component';



const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'anuncios' ,component: AnunciosComponent },
  {path:'anuncios/listar' , component:ListarAnunciosComponent},
  {path:'test/listar' , component:ListarTestComponent},
  {path:'test' , component:GenerarTestComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
