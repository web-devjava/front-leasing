import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { VeiculoReadComponent } from './views/components/veiculo/veiculo-read/veiculo-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { VeiculoCreateComponent } from './views/components/veiculo/veiculo-create/veiculo-create.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { VendedorReadComponent } from './views/components/vendedor/vendedor-read/vendedor-read.component';
import { VendedorCreateComponent } from './views/components/vendedor/vendedor-create/vendedor-create.component';
import { VendedorUpdateComponent } from './views/components/vendedor/vendedor-update/vendedor-update.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { VendedorDeleteComponent } from './views/components/vendedor/vendedor-delete/vendedor-delete.component';
import { VeiculoUpdateComponent } from './views/components/veiculo/veiculo-update/veiculo-update.component';
import { VeiculoDeleteComponent } from './views/components/veiculo/veiculo-delete/veiculo-delete.component';

const routes: Routes = [

  {

    path:'',
    component: HomeComponent
    
  },

  {
    path: 'veiculos',
    component: VeiculoReadComponent
  },

  {
    path: 'veiculos/create',
    component: VeiculoCreateComponent
  },
  {
    path: 'veiculos/update/:id',
    component: VeiculoUpdateComponent
  },
  {
    path: 'veiculos/delete/:id',
    component: VeiculoDeleteComponent
    
  },
{

  path:'clientes',
  component: ClienteReadComponent
},

{
  path: 'clientes/create',
  component: ClienteCreateComponent
},

{

  path: 'clientes/update/:id',
  component: ClienteUpdateComponent
  
},

{
  path: 'vendedor',
  component: VendedorReadComponent
},

{
  path: 'vendedor/create',
  component: VendedorCreateComponent
},


{
  path: 'vendedor/update/:id',
  component: VendedorUpdateComponent
},


{
  path: 'vendedor/delete/:id',
  component: VendedorDeleteComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
