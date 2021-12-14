import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})
export class VeiculoDeleteComponent implements OnInit {

  id_veiculo = ''

  veiculo: Veiculo = {
    cor: '',
    placa: '',
    fabricante: '',
    combustivel: '',
    modelo: '',
    nacionalidade:'',
    categoria:'',
    ano:'',
    diaria:'',
    chassi:''
  }

  constructor(private router: Router,
    private service: VeiculoService,
    private route: ActivatedRoute) { }



    
  ngOnInit(): void {

    this.id_veiculo = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  


  findById():void {
    this.service.findById(this.id_veiculo).subscribe(resposta => {
      this.veiculo = resposta;
    })
 
  }

  delete():void {

    this.service.delete(this.id_veiculo).subscribe(resposta => {
    this.router.navigate(['veiculos'])
    this.service.message('Veiculo excluido com Sucesso')

    })
  }
  cancel(): void {
    this.router.navigate(['veiculos'])
  }
}
