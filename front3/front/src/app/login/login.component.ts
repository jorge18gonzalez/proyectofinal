import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router} from '@angular/router';
import { ClienteService} from '../cliente.service';
import {AuthService} from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  load:boolean = true;
  public form:FormGroup;
 


  constructor( public login: LoginService, private Router:Router, private Cliente: ClienteService , private  fb:FormBuilder, public Auth:AuthService) { }

  ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),

     });
  
  }

  //login

 async logeo(){
    if (this.form.valid) {
     this.Cliente.login('http://localhost:5000/api/v01/login' ,{
        email:this.form.value.email,
        password:this.form.value.password,

      }).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token)
          console.log(localStorage.getItem('token'));

          //recojemos el token
          this.Auth.login(response.token)

          //recogemos el nombre
          this.Auth.setCourrentUser(response.name)

          this.load = true;
          Swal.fire({
            icon: 'success',
            title: 'login exitoso',
            text: 'esta ciendo redirigido',
          })
        
          this.Router.navigate(['test/listar']);
        
          console.log(response);

         
          this.Router.navigate(['/'])
        }
      )
    }

    
    this.load = false;
  
    setTimeout(() => {

     
    }, 4000);

  }

}
