import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { VeiculoReadComponent } from './views/components/veiculo/veiculo-read/veiculo-read.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VendedorReadComponent } from './views/components/vendedor/vendedor-read/vendedor-read.component';
import { AluguelReadComponent } from './views/components/aluguel/aluguel-read/aluguel-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { VeiculoCreateComponent } from './views/components/veiculo/veiculo-create/veiculo-create.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { VendedorCreateComponent } from './views/components/vendedor/vendedor-create/vendedor-create.component';
import { VendedorUpdateComponent } from './views/components/vendedor/vendedor-update/vendedor-update.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { VendedorDeleteComponent } from './views/components/vendedor/vendedor-delete/vendedor-delete.component';
import { VeiculoUpdateComponent } from './views/components/veiculo/veiculo-update/veiculo-update.component';
import { VeiculoDeleteComponent } from './views/components/veiculo/veiculo-delete/veiculo-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    VeiculoReadComponent,
    VendedorReadComponent,
    AluguelReadComponent,
    ClienteReadComponent,
    VeiculoCreateComponent,
    ClienteCreateComponent,
    VendedorCreateComponent,
    VendedorUpdateComponent,
    ClienteUpdateComponent,
    VendedorDeleteComponent,
    VeiculoUpdateComponent,
    VeiculoDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
