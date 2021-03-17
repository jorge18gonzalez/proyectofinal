import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {

  constructor(public auth: AuthService , private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise ((resolve , reject) =>{
      this.auth.isLogin.subscribe(
       login => {
        if (login) {
          resolve(true)
        }else{
          this.router.navigate(['/'])
          reject(false)
        }
        } )
    });
  }
  
}
