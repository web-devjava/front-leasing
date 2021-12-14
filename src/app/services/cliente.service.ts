import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteUrl: String = environment.clienteUrl;
  constructor(private http : HttpClient,
              private snack: MatSnackBar) { }

  findAll():Observable<Cliente[]>{
    const url = this.clienteUrl + "/listar";
    return this.http.get<Cliente[]>(url);
  }

  findById(id : any):Observable<Cliente>{
    const url = `${this.clienteUrl}${id}`;
    return this.http.get<Cliente>(url);
  }

  create(cliente: Cliente):Observable<Cliente>{
  const url = this.clienteUrl + "/cadastrar";
  return this.http.post<Cliente>(url, cliente);
}


update(cliente: Cliente):Observable<Cliente>{

  const url = this.clienteUrl + cliente.id;
  return this.http.put<Cliente>(url, cliente);
}



message(msg : String): void { 
  this.snack.open('Cliente Cadastrado', 'OK', {
    horizontalPosition:'end',
    verticalPosition:'top',
    duration: 6000
  })

}
}
