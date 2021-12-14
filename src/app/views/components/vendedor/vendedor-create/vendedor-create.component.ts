import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-vendedor-create',
  templateUrl: './vendedor-create.component.html',
  styleUrls: ['./vendedor-create.component.css']
})
export class VendedorCreateComponent implements  OnInit {

  cadastrar: Vendedor[] = [];
  
  vendedor: Vendedor = {

    id:'',
    nome:'',
    matricula:``,
    telefone:'',
    email:''
    

  }

  

  constructor(private router: Router,
    private service: VendedorService) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['vendedor'])
  }

  create(): void {
    this.service.create(this.vendedor).subscribe((resposta) => {
      this.service.message('Vendedor Cadastrado Com Sucesso, OK')
      this.router.navigate(['vendedor'])

    })

  }
}

