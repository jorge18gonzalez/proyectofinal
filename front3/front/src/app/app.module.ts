import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { ListarTestComponent } from './listar-test/listar-test.component';
import { LoginComponent } from './login/login.component';
import { ListarAnunciosComponent } from './listar-anuncios/listar-anuncios.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GenerarTestComponent } from './generar-test/generar-test.component';
import { RegistroComponent } from './registro/registro.component';




@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent,
    ListarTestComponent,
    LoginComponent,
    ListarAnunciosComponent,
    NavComponent,
    FooterComponent,
    GenerarTestComponent,
    RegistroComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
