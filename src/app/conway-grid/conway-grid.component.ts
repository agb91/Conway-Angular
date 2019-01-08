import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';
import { Matrix } from '../matrix';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-conway-grid',
  templateUrl: './conway-grid.component.html',
  styleUrls: ['./conway-grid.component.css']
})
export class ConwayGridComponent implements OnInit {

  private intervalId: number;
  private matrix: Matrix;
  private r: number = 50;
  private c: number = 50;

  constructor(private gridService: GridService) {
    this.matrix = new Matrix(this.r, this.c);
  }

  ngOnInit() {
    this.start();

  }

  start() {
    this.matrix = this.gridService.initialize( this.matrix );
    //this.intervalId = window.setInterval(() => {
      this.matrix = this.gridService.update(this.matrix);
    //}, 10000);
  }


}
