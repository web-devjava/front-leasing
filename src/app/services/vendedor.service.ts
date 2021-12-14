import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendedor } from '../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  vendedorUrl: String = environment.vendedorUrl;
  constructor(private http : HttpClient,
              private snack: MatSnackBar) { }

  findAll():Observable<Vendedor[]>{
    const url = this.vendedorUrl + "/listar";
    return this.http.get<Vendedor[]>(url);
  }


  findById(id : any):Observable<Vendedor>{
    const url = `${this.vendedorUrl}${id}`;
    return this.http.get<Vendedor>(url);
  }


  create(vendedor: Vendedor):Observable<Vendedor>{
  const url = this.vendedorUrl + "/cadastrar";
  return this.http.post<Vendedor>(url, vendedor);
}

update(vendedor: Vendedor):Observable<Vendedor>{

  const url = this.vendedorUrl + vendedor.id;
  return this.http.put<Vendedor>(url, vendedor);
  
}

delete(id : any):Observable<void>{
  const url = `${this.vendedorUrl}${id}`;
  return this.http.delete<void>(url);

}

message(msg : String): void { 
  this.snack.open('Vendedor Excluído com Sucesso', 'OK', {
    horizontalPosition:'end',
    verticalPosition:'top',
    duration: 6000
  })

}
}
