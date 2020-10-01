import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    ProductosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    FooterComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
