import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../cliente.service';

@Component({
  selector: 'app-listar-test',
  templateUrl: './listar-test.component.html',
  styleUrls: ['./listar-test.component.css']
})
export class ListarTestComponent implements OnInit {

  constructor( public client: ClienteService) { }

  test : [];
  obj:any = 0;
 

  ngOnInit(): void {
    this.client.getTest('http://localhost:5000/api/v01/list').subscribe(
      (data):any =>{
        this.test = data["datos"]
      }, 
      error=>console.log()
    )
  }


  editar(listar){
   this.obj = listar
   this.ngOnInit
  }

}
