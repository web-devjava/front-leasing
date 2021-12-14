import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-vendedor-read',
  templateUrl: './vendedor-read.component.html',
  styleUrls: ['./vendedor-read.component.css']
})
export class VendedorReadComponent implements AfterViewInit {

  listar : Vendedor[] = [];
  

  displayedColumns: string[] = ['id', 'nome', 'matricula', 'email', 'telefone','action'];
  dataSource = new MatTableDataSource<Vendedor>(this.listar);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: VendedorService,
    private router :Router ){}

  ngAfterViewInit() {
    
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {

      this.listar = resposta;
      this.dataSource = new MatTableDataSource<Vendedor>(this.listar);
      this.dataSource.paginator = this.paginator;
    }
    
    )
  }
  navigateToCreate():void{
    this.router.navigate(['vendedor/create'])

  }


}