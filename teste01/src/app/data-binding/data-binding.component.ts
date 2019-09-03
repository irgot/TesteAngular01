import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string = 'Angular';
  valorInicial: number= 15;
  constructor() { }

  onMudouValor(evento){
    // console.log(evento.novoValor);
  }
  ngOnInit() {
  }

}
