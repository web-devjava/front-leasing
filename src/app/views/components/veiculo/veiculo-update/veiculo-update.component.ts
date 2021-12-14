import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})


export class VeiculoUpdateComponent implements OnInit {
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

  update():void {
    this.service.update(this.veiculo).subscribe((resposta => {
      this.service.message('Veículo Alterado Com Sucesso, OK')
      this.router.navigate(['veiculos'])


    }))
      
  }

  findById():void {
    this.service.findById(this.id_veiculo).subscribe(resposta => {
      this.veiculo = resposta;
    })
  }



  cancel(): void {
    this.router.navigate(['veiculos'])
  }
}
