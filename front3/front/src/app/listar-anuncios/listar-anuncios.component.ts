import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-anuncios',
  templateUrl: './listar-anuncios.component.html',
  styleUrls: ['./listar-anuncios.component.css']
  
})
export class ListarAnunciosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  listar = [
    {"nombre":"fista" , "descripccion":"se va a celebrar fiesta" , "imagen":"imagen1"},
    {"nombre":"actividad" , "descripccion":"se va a realizar una rumboterapia", "imagen":"imagen2"},
    {"nombre":"anuncio" , "descripccion": "el gimnacio va esta cerrado" , "imagen":"imagen3"}
  ]

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };
  }

}
