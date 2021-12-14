import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements  AfterViewInit {

  listar : Veiculo[] = [];
  displayedColumns: string[] = ['id','cor','placa','fabricante','combustivel','modelo','nacionalidade','categoria','ano','diaria','chassi','action'];
  dataSource = new _MatTableDataSource<Veiculo>(this.listar);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service : VeiculoService,
    private router :Router ){}

  ngAfterViewInit() {
    
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.listar = resposta;
      this.dataSource = new _MatTableDataSource<Veiculo>(this.listar);
      
    })
  }

  navigateToCreate():void{
    this.router.navigate(['veiculos/create'])

  }

}