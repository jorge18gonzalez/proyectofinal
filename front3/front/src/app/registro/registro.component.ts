import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../cliente.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public form:FormGroup;

  constructor(private fb: FormBuilder, private client: ClienteService, private route: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      correo: new FormControl(),
      password: new FormControl()
    })

  }


 onSubmit(){
    if (this.form.valid) {
        this.client.postPrueba('http://localhost:5000/api/v01/prueba' , {
            correo:this.form.value,
            password:this.form.value
        }).subscribe(
            (response: any)=>{
             console.log(response)

            }
        )
    }
  

  }
}
