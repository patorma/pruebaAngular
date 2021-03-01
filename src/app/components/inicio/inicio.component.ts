import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  titulo: string = 'Sistema Saludo'
  saludo: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
