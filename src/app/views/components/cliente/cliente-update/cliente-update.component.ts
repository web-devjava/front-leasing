import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  id_cliente =''
  alterar: Cliente[] = [];

  cliente: Cliente = {

    id:'',
    nome:'',
    telefone:'',
    email:'',
    cpf:''

  }

  constructor(private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

   this.id_cliente = this.route.snapshot.paramMap.get('id')!
   this.findById();
  }

  cancel(): void {
    this.router.navigate(['clientes'])
  }


  update():void {
    this.service.update(this.cliente).subscribe((resposta) => {
    this.router.navigate(['clientes'])
    })
  }

  findById():void {
    this.service.findById(this.id_cliente).subscribe(resposta => {
    this.cliente = resposta;

    })
  }

}
