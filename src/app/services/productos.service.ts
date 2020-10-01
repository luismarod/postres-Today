import { Injectable } from '@angular/core';
import { postres } from '../components/productos/postres';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  filtrarPostres(tipo: number){

    let postresArr = [];

    for(let i=0; i <postres.length; i++) {

      let postre = postres[i];

      if(tipo == postre.tipoPostre_id){
        postresArr.push(postre);
      }
    }

    return postresArr;
  }
}
