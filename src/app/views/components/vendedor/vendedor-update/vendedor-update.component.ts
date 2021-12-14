import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { VendedorService } from 'src/app/services/vendedor.service';


@Component({
  selector: 'app-vendedor-update',
  templateUrl: './vendedor-update.component.html',
  styleUrls: ['./vendedor-update.component.css']
})
export class VendedorUpdateComponent implements OnInit {
  id_vendedor =''

  alterar: Vendedor[] = [];
  
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

  update():void {
    this.service.update(this.vendedor).subscribe((resposta) => {
    this.router.navigate(['vendedor'])
    })
  }

  findById():void {
    this.service.findById(this.id_vendedor).subscribe(resposta => {
      this.service.message('Vendedor Alterado Com Sucesso, OK')
    this.vendedor = resposta;

    })
  }

  cancel(): void {
    this.router.navigate(['vendedor'])
  }

}
