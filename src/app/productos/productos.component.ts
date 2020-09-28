import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { postres } from './postres';
import { tiposPostres } from './tipo-postres';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  tipoPostres: any[] = tiposPostres;
  postres: any[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  filtrarTipo(id:number){
   this.postres = this.productosService.filtrarPostres(id);
  }

}
