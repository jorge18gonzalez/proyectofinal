import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new BehaviorSubject<boolean>(this.checkToken());

  //método que nos permitirá chequear si existe un token, en tal
  //caso retornará true
  public checkToken() : boolean {
    return !!localStorage.getItem('token');
  }

  //método que nos permite establecer el token en el almacenamiento local
  //y enviar una señal al BehaviorSubject para establecer su nuevo valor en
  //true para indicar que estamos logueados
  login(token:string) : void {
    localStorage.setItem('token', token);
    this.isLogin.next(true);
  }

  //método que nos permite establecer el nombre del usuario
  //en el BehaviorSubject userName
  setCourrentUser(user:string) : void {
    localStorage.setItem('courrentUser', user);
  }

  //método que nos permite recuperar el nombre del usuario
  //del BehaviorSubject userName
  getCourrentUser() : string {
    return localStorage.getItem('courrentUser');
  }

  //método que nos permite eliminar el nombre de usuario
  // del BehaviorSubject userName
  private deleteCourrentUser() : void {
    localStorage.removeItem('courrentUser');
  }


  //método que nos permite romover el token almacenado y el nombre del
  //usuario actual y enviar una señal al BehaviorSubject para establecer
  //su nuevo valor, en este caso false para indicar que no estamos logueados
  logout() : void {
    localStorage.removeItem('token');
    this.deleteCourrentUser();
    this.isLogin.next(false);
  }

  //método que nos retorna el BehaviorSubject cómo un observable
  isLoggedIn() : Observable<boolean> {
    return this.isLogin.asObservable();
   }

}
