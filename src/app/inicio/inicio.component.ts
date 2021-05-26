import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
exampleString : string;
  constructor() { 
    this.exampleString="Lista sencilla con angular";
  }

  ngOnInit(): void {
  }

}
