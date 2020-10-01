import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {


  @Input() item
  constructor() { }

  ngOnInit(): void {
  }

}
