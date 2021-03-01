import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit ,OnChanges {
  @Input() nombre: string;

  constructor() { }

  ngOnInit(): void {
   
  }
  ngOnChanges(){
    console.log('name is ' + this.nombre);
  }

}
