import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';
import { Matrix } from '../matrix';

@Component({
  selector: 'app-conway-grid',
  templateUrl: './conway-grid.component.html',
  styleUrls: ['./conway-grid.component.css']
})
export class ConwayGridComponent implements OnInit {

  private intervalId: number;
  private matrix:Matrix  ;
  private r:number = 50;
  private c:number = 50;

  constructor() { 
  	this.matrix = new Matrix(this.r, this.c);
  }

  ngOnInit() {
  		this.start();
  }

  update()
  {
  	let randomR = Math.floor(Math.random() * 40);
  	let randomC = Math.floor(Math.random() * 40);
  	this.matrix.setState(randomR, randomC, "alive" );
  	//console.log(this.matrix.matrix[Math.floor(Math.random() * 26)][Math.floor(Math.random() * 26)] );
  }

  start(){
	  this.intervalId = window.setInterval(() => {
	      this.update();
	    }, 200);
  }



}
