import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';
import { Row } from '../row';
import { Matrix } from '../matrix';

@Component({
  selector: 'app-conway-grid',
  templateUrl: './conway-grid.component.html',
  styleUrls: ['./conway-grid.component.css']
})
export class ConwayGridComponent implements OnInit {

  matrix:Matrix  
  r:number = 50
  c:number = 50

  constructor() { 
  	this.matrix = new Matrix(this.r, this.c);
  }

  ngOnInit() {
  }

}
