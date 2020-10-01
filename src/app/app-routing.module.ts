import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MainComponent } from './components/main/main.component';
import { ProductosComponent } from './components/productos/productos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';



const routes: Routes = [
  {path:'inicio', component: MainComponent},
  {path:'quienes-somos', component: QuienesSomosComponent},
  {path:'productos', component: ProductosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
