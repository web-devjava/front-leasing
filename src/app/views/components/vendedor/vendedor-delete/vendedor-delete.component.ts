import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-vendedor-delete',
  templateUrl: './vendedor-delete.component.html',
  styleUrls: ['./vendedor-delete.component.css']
})
export class VendedorDeleteComponent implements  OnInit {
  id_vendedor =''

  excluir: Vendedor[] = [];
  
  vendedor: Vendedor = {

    id:'',
    nome:'',
    matricula:``,
    telefone:'',
    email:''
    

  }
  
  constructor(private router: Router,
    private service: VendedorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id_vendedor = this.route.snapshot.paramMap.get('id')!
   this.findById();

  }

 

  findById():void {
    this.service.findById(this.id_vendedor).subscribe(resposta => {
    this.vendedor = resposta;

    })
  }
  delete():void{

    this.service.delete(this.id_vendedor).subscribe(resposta => {
    this.router.navigate(['vendedor'])
    this.service.message('Vendedor excluido com Sucesso')

    })
  }

  cancel(): void {
    this.router.navigate(['vendedor'])
  }

}
