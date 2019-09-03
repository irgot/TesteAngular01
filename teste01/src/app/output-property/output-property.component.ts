import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor:number=0;
  @Output() mudouValor = new EventEmitter();
  constructor() { }
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor:this.valor});
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor:this.valor});
  }
  ngOnInit() {
  }

}
