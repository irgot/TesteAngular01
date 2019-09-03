import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() valorInicial:number = 0;
  constructor() { 
    this.log("Construtor");
  }
  
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.log("ngAfterContentInit");
  }
  ngAfterContentChecked():void{
    this.log("ngAfterContentChecked");
  }
  ngAfterViewInit():void{
    this.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked");
    
  }
  ngOnChanges(): void {
    this.log("ngOnChanges");
    
  }
  ngOnDestroy(): void {
    this.log("ngOnDestroy");
    
  }
  ngOnInit() {
    this.log("ngOnInint");
  }
  ngDoCheck(): void {
    this.log("ngDoCheck");
    
  }
  private log(hook:string){
    console.log(hook);
  }

}
