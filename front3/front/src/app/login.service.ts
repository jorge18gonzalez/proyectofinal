import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  public usuario:string = "jorgetgonzalez3@gmail.com";
  public contra:string = "1234567";
 

  constructor() { }
  

   ingresar() {
   
    
    if (this.usuario == "jorgetgonzalez3@gmail.com" && this.contra == "1234567") {
      console.log('logeado')
     
      
    }else{
      console.log('error')
    }
  }


 
}
