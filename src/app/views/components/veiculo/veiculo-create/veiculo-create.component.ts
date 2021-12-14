import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  cadastrar: Veiculo[] = [];
  
  categoria:String[]=["Passeio", "Esportivo"];
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
    private service: VeiculoService) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['veiculos'])
  }

  create(): void {

    this.service.create(this.veiculo).subscribe((resposta) => {
      this.service.message('Veículo Cadastrado Com Sucesso, OK')
      this.router.navigate(['veiculos'])
    }
    )
  }
  
 
}
