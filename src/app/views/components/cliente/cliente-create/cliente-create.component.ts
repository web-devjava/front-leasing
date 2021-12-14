import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cadastrar: Cliente[] = [];
  
  cliente: Cliente = {

    id:'',
    nome:'',
    telefone:'',
    email:'',
    cpf:''

  }

  

  constructor(private router: Router,
    private service: ClienteService) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(['clientes'])
  }

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      this.service.message('Cliente Cadastrado Com Sucesso, OK')
      this.router.navigate(['clientes'])

    })

  }
}