import { Injectable } from '@angular/core';
import{LoginService} from './login.service';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    public logeo:LoginService,
    private Http:HttpClient,
  ) { }


  login(route: string , data?:any , token?:string){
    let config:any = {
      responseType:"json"
    }

    if (token){
      const header = new HttpHeaders().set('Authorization' ,`Bearer ${token}` )
      config["headers"] = header;
      
    }

    return this.Http.post(route ,data ,config)
   
  }



  postTest(route: string , data?:any){
    let config:any = {
        responseType:"json"
    }
    return this.Http.post(route , data , config);
  }


  getTest(route: string){
    let config:any = {
      responseType:"json"
    }

    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;

    return this.Http.get(route , config);
  }

  updateTest(route:string , data?:any , token?:string){
    let config:any = {
      responseType:"json"
    }

    if(token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(header)
      config["header"] = header;
    }

    return this.Http.put(route , data ,config)

  }
}
