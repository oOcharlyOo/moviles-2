import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
 exampleString: string;
  constructor() { 
    this.exampleString="5514788332";
  }

  ngOnInit(): void {
  }

}
