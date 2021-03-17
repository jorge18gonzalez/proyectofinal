import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import { ClienteService} from '../cliente.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-generar-test',
  templateUrl: './generar-test.component.html',
  styleUrls: ['./generar-test.component.css']
})
export class GenerarTestComponent implements OnInit {
  load:boolean = true;
  public form:FormGroup;

  constructor(private Router:Router , private cliente:ClienteService , private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      talla: new FormControl(),
      peso: new FormControl()
    })


  }

  async generar(){
    if (this.form.valid){
      this.cliente.postTest('http://localhost:5000/api/v01/test',{
        talla: this.form.value.talla,
        peso: this.form.value.peso,
      }).subscribe(
        (response:any) =>{
          Swal.fire({
            icon: 'success',
            title: 'test registrado ',
            text: 'esta ciendo redirigido',
          })
          this.Router.navigate(['test/listar']);
        }
      )
    }
  }

}
