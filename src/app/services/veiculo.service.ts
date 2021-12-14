import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Veiculo } from '../models/veiculo';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculoUrl: String = environment.veiculoUrl;
  constructor(private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Veiculo[]>{

    const url = this.veiculoUrl + "/listar";
    return  this.http.get<Veiculo[]>(url);

  }

  findById(id :any): Observable<Veiculo>{
    const url = `${this.veiculoUrl}${id}`;
    return this.http.get<Veiculo>(url);
  }

  create(veiculo: Veiculo):Observable<Veiculo>{
    const url = this.veiculoUrl + "/cadastrar";
    return this.http.post<Veiculo>(url, veiculo);
  }

  update(veiculo: Veiculo ):Observable<Veiculo>{
    const url = this.veiculoUrl+ veiculo.id;
    return this.http.put<Veiculo>(url, veiculo);
  

  }

  delete(id :any):Observable<void>{
    const url = `${this.veiculoUrl}${id}`;
    return this.http.delete<void>(url);
    
  }
  message(msg : String): void { 
    this.snack.open('', 'OK', {
      horizontalPosition:'end',
      verticalPosition:'top',
      duration: 6000
    })
  

  }
}
