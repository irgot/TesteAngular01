import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor:number=0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild("campoInput",{static:false}) campoValorInput:ElementRef;

  constructor() { }
  incrementa(){
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor:this.valor});
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor:this.valor});
  }
  ngOnInit() {
  }

}
