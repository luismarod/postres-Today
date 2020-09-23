import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'quienes-somos', component: QuienesSomosComponent},
  {path:'productos', component: ProductosComponent},
  {path:'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
