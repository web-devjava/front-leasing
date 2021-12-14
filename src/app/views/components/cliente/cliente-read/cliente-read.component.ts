import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements AfterViewInit {

  listar : Cliente[] = [];
  

  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone','cpf','action'];
  dataSource = new MatTableDataSource<Cliente>(this.listar);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ClienteService,
    private router :Router ){}

  ngAfterViewInit() {
    
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {

      this.listar = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(this.listar);
      this.dataSource.paginator = this.paginator;
    }
    
    )
  }
  navigateToCreate():void{
    this.router.navigate(['clientes/create'])

  }


}
