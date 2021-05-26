import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent implements OnInit {
  exmpleString: string;

  constructor() { 
    this.exmpleString="Soy estudiante de la universidad politecnica de tecamac";
  }

  ngOnInit(): void {
  }

}
